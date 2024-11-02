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
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhKX1VJ83ns6ujBStRVJvLSqallRt2jK9vsfXICRZOJMQxNzIvb4EA3rOG9kGpkhAh8GPogIuVUNj3/pub?gid=168103023&single=true&output=csv";
    
    const [articlesData, setArticlesData] = useState<ArticlesColluns[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 6;

    useEffect(() => {
        console.log("Fetch data");
    
        fetch(url)
          .then((response) => response.text())
          .then((data) => {
            const parsedData = Papa.parse<ArticlesColluns>(data, { header: true });
            const articlesData: ArticlesColluns[] = parsedData.data.map(item => ({
              Ano: item.Ano || "",
              Nome: item.Nome || "",
              Tag1: item.Tag1 || "",
              Tag2: item.Tag2 || "",
              Tag3: item.Tag3 || "",
              Link: item.Link || "",
            }));
            setArticlesData(articlesData);
          })
          .catch((err) => console.log(err));
      }, []); 

    const totalPages = Math.ceil(articlesData.length / articlesPerPage);

    const currentArticles = articlesData.slice(
        (currentPage - 1) * articlesPerPage,
        currentPage * articlesPerPage
    );

    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="flex flex-col items-center h-full py-8 gap-12 bg-secondary-blue" id="Articles">
            <div className="flex flex-col items-center gap-6 max-w-4xl py-">
                <h1 className="text-xl md:text-4xl text-primary-white text-center font-semibold">Artigos</h1>
                <p className="text-base md:text-xl text-primary-white text-justify">Aqui, você encontrará publicações relevantes, estudos de caso, e materiais essenciais que podem ser utilizados em nossas investigações acadêmicas e científicas. Esta seção é dedicada a compartilhar o conhecimento gerado pelo nosso grupo, bem como a disseminação de recursos que podem enriquecer o trabalho de pesquisa de nossos membros e colaboradores.</p>
            </div>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                <div className="flex justify-center mt-6">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => goToPage(index + 1)}
                            className={`px-4 py-2 mx-1 rounded ${
                                currentPage === index + 1
                                    ? 'bg-detail-orange text-white'
                                    : 'bg-gray-200 text-secondary-blue hover:bg-gray-300'
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Articles;
