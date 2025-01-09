"use client";
import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import Papa from "papaparse";

// Sessão dedicada a expor os artigos escritos por integrantes do grupo

// Link da Planilha
const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhKX1VJ83ns6ujBStRVJvLSqallRt2jK9vsfXICRZOJMQxNzIvb4EA3rOG9kGpkhAh8GPogIuVUNj3/pub?gid=168103023&single=true&output=csv";

// Variáveis de acordo com as colunas da planilha
interface ArticlesColluns {
  Ano?: string | number;
  Nome?: string;
  Tag1?: string;
  Tag2?: string;
  Tag3?: string;
  Link?: string;
}

const Articles = () => {
  const [articlesData, setArticlesData] = useState<ArticlesColluns[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Adicionado estado de carregamento
  const articlesPerPage = 3;

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

  // Navegação
  const totalPages = Math.ceil(articlesData.length / articlesPerPage);

  const currentArticles = articlesData.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col items-center mx-auto h-full py-8 gap-12 bg-secondary-blue" id="Articles">
      <div className="flex flex-col items-center gap-6 max-w-4xl py-">
        {/* Título da Sessão */}
        <h1 className="text-xl md:text-4xl text-primary-white text-center font-semibold">Artigos</h1>
        {/* Descrição da Sessão */}
        <p className="text-base md:text-lg text-primary-white text-justify">
          Aqui, você encontrará publicações relevantes, estudos de caso, e materiais essenciais que podem ser utilizados
          em nossas investigações acadêmicas e científicas. Esta seção é dedicada a compartilhar o conhecimento gerado
          pelo nosso grupo, bem como a disseminação de recursos que podem enriquecer o trabalho de pesquisa de nossos
          membros e colaboradores.
        </p>
      </div>
      <div className="container mx-auto p-4">
        {loading ? (
          // Skeleton Loader
          <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-pulse">
            {Array.from({ length: articlesPerPage }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 p-4 border border-gray-300 rounded shadow-sm bg-gray-300/40"
              >
                <div className="h-6 bg-gray-400 rounded w-3/4"></div>
                <div className="h-4 bg-gray-400 rounded w-1/2"></div>
                <div className="h-4 bg-gray-400 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
            {/* Navegação paginada */}
            <div className="flex justify-center mt-6">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index + 1)}
                  className={`px-4 py-2 mx-1 rounded ${
                    currentPage === index + 1
                      ? "bg-detail-orange text-white"
                      : "bg-gray-200 text-secondary-blue hover:bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Articles;
