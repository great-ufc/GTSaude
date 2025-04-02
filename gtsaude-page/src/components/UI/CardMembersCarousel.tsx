"use client";
import { useState, useEffect } from "react";
import MemberCard from "./MemberCard";
import Papa from "papaparse";

// Link da planilha
const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhKX1VJ83ns6ujBStRVJvLSqallRt2jK9vsfXICRZOJMQxNzIvb4EA3rOG9kGpkhAh8GPogIuVUNj3/pub?gid=0&single=true&output=csv";

// Interface para os membros
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
  const [loading, setLoading] = useState(true);

  // Fetch dos dados da planilha
  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse<Member>(data, { header: true });
        setMembersData(parsedData.data.filter((m) => m.Nome)); // Filtra apenas membros válidos
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados:", err);
        setLoading(false);
      });
  }, []);

  // Ajuste responsivo dos cards
  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navegação
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? membersData.length - cardsPerPage : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= membersData.length - cardsPerPage ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-xs md:max-w-5xl mx-auto">
      <div className="relative overflow-hidden w-full">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-pulse w-full">
            {Array.from({ length: cardsPerPage }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 p-4 border border-gray-300 rounded shadow-sm bg-gray-300/40"
              >
                <div className="h-48 w-[15rem] bg-gray-400 rounded"></div> {/* Imagem esqueleto maior */}
                <div className="h-8 bg-gray-400 rounded w-full"></div> {/* Título esqueleto mais largo */}
                <div className="h-6 bg-gray-400 rounded w-3/4"></div> {/* Tag esqueleto mais alta */}
                <div className="h-6 bg-gray-400 rounded w-full"></div> {/* Tag esqueleto maior */}

              </div>
            ))}
          </div>
        ) : (
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
        )}
      </div>

      {/* Botões de navegação */}
      {!loading && membersData.length > cardsPerPage && (
        <>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary-blue p-2 rounded-full text-xs px-3"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary-blue p-2 rounded-full text-xs px-3"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </>
      )}
    </div>
  );
};

export default CardMembersCarousel;
