// components/ArticleCard.tsx
import React from 'react';
import Link from 'next/link';
import Tag from '../UI/Tag';

type ArticleCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  tags: { name: string; color: string }[];
  articleUrl: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, imageUrl, tags, articleUrl }) => {
  return (
    <Link href={articleUrl} passHref>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer bg-primary-white hover:shadow-2xl transition-shadow duration-300"
      >
        <img className="w-full" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-primary-blue">{title}</div>
          <p className="text-primary-blue text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag) => (
            <Tag key={tag.name} name={tag.name} color={tag.color} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
