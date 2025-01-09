// components/ArticleCard.tsx
import React from 'react';
import Link from 'next/link';
import Tag from '../UI/Tag';

//Aqui é onde os cards dos artigos são montados

//Variáveis para montagem do card
type ArticleCardProps = {
  title: string;
  tag1?: string,
  tag2?: string,
  tag3?: string,
  articleUrl: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ title, tag1, tag2, tag3, articleUrl }) => {
  return (
    //Link redirecionando para o artigo em questão
    <Link href={articleUrl} passHref target="_blank">
      <div
        className="max-w-sm rounded-md overflow-hidden shadow-lg cursor-pointer bg-primary-white hover:shadow-2xl transition-shadow duration-300"
      >
       {/* Imagem padrão dos cards */}
       <div className='bg-black'>
        <img className="w-full rounded-t-sm" 
          src={"https://i.imgur.com/yQrb8zK.jpeg"} 
          alt={'www.freepik.com'} 
          />
        </div>
        {/* Nome do artigo */}
        <div className="px-6 py-4 ">
          <div className="font-bold text-base mb-2 text-primary-blue h-[9vh] max-h-16 text-left">{title}</div>
        </div>
        
        {/* Tags do artigo */}
        <div className="px-6 pt-4 pb-2">
          
          {tag1 && <Tag name={tag1} color="#0070f3" />}
          {tag2 && <Tag name={tag2} color="#61dafb" />}
          {tag3 && <Tag name={tag3} color="#4caf50" />}

        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
