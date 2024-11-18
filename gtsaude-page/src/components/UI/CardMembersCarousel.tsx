"use client";
import { useState, useEffect } from "react";
import MemberCard from "./MemberCard";
import Papa from "papaparse";

//Aqui é onde a organização dos cards acontece, é aqui onde as informações dos cards são puxadas da planilha

//Link da Planilha
const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhKX1VJ83ns6ujBStRVJvLSqallRt2jK9vsfXICRZOJMQxNzIvb4EA3rOG9kGpkhAh8GPogIuVUNj3/pub?gid=0&single=true&output=csv";

//Variáveis de acordo com as colunas da planilha
interface Member {
  Nome?: string;
  Descrição?: string;
  Foto?: string;
  Lattes?: string;
  Linkedin?: string;
}


const CardMembersCarousel: React.FC = () => {
  const [membersData, setMembersData] = useState<Member[]>([]);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch data
  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse<Member>(data, { header: true });
        setMembersData(parsedData.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Ajuste responsivo dos cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1); // 1 card para telas menores
      } else {
        setCardsPerPage(3); // 3 cards para telas maiores
      }
    };

    handleResize(); // Executa no início
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navegação
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? membersData.length - cardsPerPage : prevIndex - 1
    );
  };
 // Navegação
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === membersData.length - cardsPerPage ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative max-w-xs md:max-w-5xl mx-auto ">
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,
          }}
        >
          {membersData.map((member, index) => (
            <div
              key={index}
              className="min-w-[calc(100%/3)] flex justify-center"
              style={{ minWidth: `calc(100% / ${cardsPerPage})` }}
            >
              {/* Aqui as informações da planilha são enviadas para a montagem do card no componente MemberCard */}
              <MemberCard
                image={member.Foto || "/"}
                name={member.Nome || ""}
                description={member.Descrição || ""}
                lattes={member.Lattes || "#"}
                linkedin={member.Linkedin || "#"}
              />
            </div>
          ))}
        </div>
        {/* Navegação */}
        <button
          className="absolute top-1/2 left-0 md:left-0 transform -translate-y-1/2 bg-primary-blue p-2 rounded-full text-xs px-3"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        {/* Navegação */}
        <button
          className="absolute top-1/2 right-0 md:right-0 transform -translate-y-1/2 bg-primary-blue p-2 rounded-full text-xs px-3"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default CardMembersCarousel;
