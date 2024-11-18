"use client";
import { useState } from 'react';

//Aqui é onde o Accordeon é montado

type AccordionItemProps = {
  title: string;
  description: string;
  currentstatus:string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, description,currentstatus }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
       {/* Navegação */}
      <button
        className="w-full text-left py-4 px-6 focus:outline-none flex justify-between items-center"
        onClick={toggleAccordion}
      >
         {/* Título da pesquisa */}
        <span className="text-2xl font-semibold">{title}</span>
        {/* Seta de navegação */}
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-270 text-detail-green' : '-rotate-90'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {/* Descrição e Status da pesquisa */}
      <div
        className={`px-6 overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <p className="py-4 text-gray-100 text-justify">{description}</p>
      </div>
      <div
        className={`px-6 overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <p className="py-4 text-gray-100">Status: {currentstatus}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
