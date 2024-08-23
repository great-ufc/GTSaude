"use client";
import { useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

const Articles = () => {
    const articles = [
        {
            title: 'Learning Next.js',
            description: 'A guide to building modern web applications with Next.js.',
            imageUrl: 'https://via.placeholder.com/600x400',
            tags: [
                { name: 'Next.js', color: '#0070f3' },
                { name: 'React', color: '#61dafb' },
                { name: 'Web Development', color: '#4caf50' },
            ],
            articleUrl: '/articles/learning-nextjs',
        },
        {
            title: 'Learning Next.js',
            description: 'A guide to building modern web applications with Next.js.',
            imageUrl: 'https://via.placeholder.com/600x400',
            tags: [
                { name: 'Next.js', color: '#0070f3' },
                { name: 'React', color: '#61dafb' },
                { name: 'Web Development', color: '#4caf50' },
            ],
            articleUrl: '/articles/learning-nextjs',
        },
        {
            title: 'Learning Next.js',
            description: 'A guide to building modern web applications with Next.js.',
            imageUrl: 'https://via.placeholder.com/600x400',
            tags: [
                { name: 'Next.js', color: '#0070f3' },
                { name: 'React', color: '#61dafb' },
                { name: 'Web Development', color: '#4caf50' },
            ],
            articleUrl: '/articles/learning-nextjs',
        },
        {
            title: 'Learning Next.js',
            description: 'A guide to building modern web applications with Next.js.',
            imageUrl: 'https://via.placeholder.com/600x400',
            tags: [
                { name: 'Next.js', color: '#0070f3' },
                { name: 'React', color: '#61dafb' },
                { name: 'Web Development', color: '#4caf50' },
            ],
            articleUrl: '/articles/learning-nextjs',
        },
        {
            title: 'Learning Next.js',
            description: 'A guide to building modern web applications with Next.js.',
            imageUrl: 'https://via.placeholder.com/600x400',
            tags: [
                { name: 'Next.js', color: '#0070f3' },
                { name: 'React', color: '#61dafb' },
                { name: 'Web Development', color: '#4caf50' },
                { name: 'Vivi', color: '#4caf50' },
            ],
            articleUrl: '/articles/learning-nextjs',
        },
        {
            title: 'Learning Next.js',
            description: 'A guide to building modern web applications with Next.js.',
            imageUrl: 'https://via.placeholder.com/600x400',
            tags: [
                { name: 'Next.js', color: '#0070f3' },
                { name: 'React', color: '#61dafb' },
                { name: 'Web Development', color: '#4caf50' },
                { name: 'Vivi', color: '#4caf50' },
            ],
            articleUrl: '/articles/learning-nextjs',
        },
        {
            title: 'Learning Next.js',
            description: 'A guide to building modern web applications with Next.js.',
            imageUrl: 'https://via.placeholder.com/600x400',
            tags: [
                { name: 'Next.js', color: '#0070f3' },
                { name: 'React', color: '#61dafb' },
                { name: 'Web Development', color: '#4caf50' },
                { name: 'Vivi', color: '#4caf50' },
            ],
            articleUrl: '/articles/learning-nextjs',
        },
        {
            title: 'Learning Next.js',
            description: 'A guide to building modern web applications with Next.js.',
            imageUrl: 'https://via.placeholder.com/600x400',
            tags: [
                { name: 'Next.js', color: '#0070f3' },
                { name: 'React', color: '#61dafb' },
                { name: 'Web Development', color: '#4caf50' },
                { name: 'Vivi', color: '#4caf50' },
            ],
            articleUrl: '/articles/learning-nextjs',
        },
        {
            title: 'Learning Next.js',
            description: 'A guide to building modern web applications with Next.js.',
            imageUrl: 'https://via.placeholder.com/600x400',
            tags: [
                { name: 'Next.js', color: '#0070f3' },
                { name: 'React', color: '#61dafb' },
                { name: 'Web Development', color: '#4caf50' },
                { name: 'Vivi', color: '#4caf50' },
            ],
            articleUrl: '/articles/learning-nextjs',
        },
        //Caso necessário, copie, cole e modifique os moldes acima e adicione novos artigos.
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 6;

    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const currentArticles = articles.slice(
        (currentPage - 1) * articlesPerPage,
        currentPage * articlesPerPage
    );

    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="flex flex-col items-center h-full py-8 gap-12 bg-secondary-blue">
            <div className="flex flex-col items-center gap-6 max-w-4xl py-">
                <h1 className="text-xl md:text-4xl text-primary-white text-center font-semibold">Artigos</h1>
                <p className="text-base md:text-xl text-primary-white text-justify">Aqui, você encontrará publicações relevantes, estudos de caso, e materiais essenciais que podem ser utilizados em nossas investigações acadêmicas e científicas. Esta seção é dedicada a compartilhar o conhecimento gerado pelo nosso grupo, bem como a disseminação de recursos que podem enriquecer o trabalho de pesquisa de nossos membros e colaboradores.</p>
            </div>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {currentArticles.map((article, index) => (
                        <ArticleCard
                            key={index}
                            title={article.title}
                            description={article.description}
                            imageUrl={article.imageUrl}
                            tags={article.tags}
                            articleUrl={article.articleUrl}
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