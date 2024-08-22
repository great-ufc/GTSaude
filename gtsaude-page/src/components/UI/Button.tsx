'use client';
import React from 'react';

type Props = {
  name: string;
  anchorId?: string; // Adiciona anchorId como uma propriedade opcional
};

export function ItemMenu({ name, anchorId }: Props) {
  const scrollToSection = () => {
    if (anchorId) {
      const section = document.getElementById(anchorId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button className="w-40" onClick={scrollToSection}>
      <span className='text-p-white font-bold mx-2 px-2 py-1 hover:border-b-4 border-detail-green focus active:border-b-4'>
        {name}
      </span>
    </button>
  );
}
