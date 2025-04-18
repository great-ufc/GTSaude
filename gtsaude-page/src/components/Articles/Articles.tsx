"use client";
import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import Papa from "papaparse";

interface ArticlesColluns {
  Ano?: string | number;
  Nome?: string;
  Tag1?: string;
  Tag2?: string;
  Tag3?: string;
  Link?: string;
}

const Articles = () => {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhKX1VJ83ns6ujBStRVJvLSqallRt2jK9vsfXICRZOJMQxNzIvb4EA3rOG9kGpkhAh8GPogIuVUNj3/pub?gid=168103023&single=true&output=csv";

  const [articlesData, setArticlesData] = useState<ArticlesColluns[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Adicionado estado
  const articlesPerPage = 4;

  // Fetch Data
  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse<ArticlesColluns>(data, { header: true });
        const articlesData: ArticlesColluns[] = parsedData.data.map((item) => ({
          Ano: item.Ano || "",
          Nome: item.Nome || "",
          Tag1: item.Tag1 || "",
          Tag2: item.Tag2 || "",
          Tag3: item.Tag3 || "",
          Link: item.Link || "",
        }));
        setArticlesData(articlesData);
        setLoading(false); // Define carregamento como falso após os dados serem carregados
      })
      .catch((err) => {
        console.error("Erro ao buscar dados:", err);
        setLoading(false); // Também define carregamento como falso em caso de erro
      });
  }, []);

  const totalPages = Math.ceil(articlesData.length / articlesPerPage);

  const currentArticles = articlesData.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 4;

    // Calculando as páginas a serem exibidas
    let startPage = Math.max(currentPage - 1, 1);
    let endPage = Math.min(currentPage + 2, totalPages);

    // Se a página inicial não for 1, podemos exibir '...'
    if (startPage > 2) {
      pages.push(1);
      pages.push('...');
    }

    // Adiciona as páginas visíveis
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Se a última página não for a total, adiciona '...' e a última página
    if (endPage < totalPages - 1) {
      pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex flex-col items-center h-full py-8 gap-12 bg-secondary-blue" id="Articles">
      <div className="flex flex-col items-center gap-6 max-w-4xl w-[80%] py-4">
        <h1 className="text-xl md:text-4xl text-primary-white text-center font-semibold">Artigos</h1>
        <p className="text-base md:text-xl text-primary-white text-justify">
          Aqui, você encontrará publicações relevantes, estudos de caso, e materiais essenciais que podem ser utilizados em nossas
          investigações acadêmicas e científicas. Esta seção é dedicada a compartilhar o conhecimento gerado pelo nosso grupo, bem
          como a disseminação de recursos que podem enriquecer o trabalho de pesquisa de nossos membros e colaboradores.
        </p>
      </div>
      
      <div className="container mx-auto p-4">
        {/* Skeleton Loader */}
        {loading ? (
          <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 animate-pulse">
            {Array.from({ length: articlesPerPage }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 p-4 border border-gray-300 rounded shadow-sm bg-gray-300/40"
              >
                <div className="h-32 bg-gray-400 rounded"></div> {/* Imagem esqueleto */}
                <div className="h-6 bg-gray-400 rounded w-3/4"></div> {/* Título esqueleto */}
                <div className="h-4 bg-gray-400 rounded w-1/2"></div> {/* Tag esqueleto */}
                <div className="h-4 bg-gray-400 rounded w-5/6"></div> {/* Tag esqueleto */}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
            {currentArticles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.Nome || "Título padrão"}
                tag1={article.Tag1}
                tag2={article.Tag2}
                tag3={article.Tag3}
                articleUrl={article.Link || "#"}
              />
            ))}
          </div>
        )}

        {/* Navegação de páginas */}
        <div className="flex justify-center mt-8">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => {
                if (typeof page === "number") {
                  goToPage(page);
                }
              }}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === page
                  ? 'bg-detail-orange text-white'
                  : 'bg-gray-200 text-secondary-blue hover:bg-gray-300'
              }`}
              disabled={typeof page !== "number"}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
