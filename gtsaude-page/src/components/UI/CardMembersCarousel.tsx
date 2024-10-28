"use client";
import { useState, useEffect } from "react";
import MemberCard from "./MemberCard";
import Papa from "papaparse";
import Image from "next/image";

interface Member {
  name: string;
  Nome?: string;
  description: string;
  Descrição?: string;
  Foto?: string;
  Lattes?: string;
  Linkedin?: string;
  image: string;
  instituicao?: string;
  lattes?: string;
  linkedin?: string;
}

const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhKX1VJ83ns6ujBStRVJvLSqallRt2jK9vsfXICRZOJMQxNzIvb4EA3rOG9kGpkhAh8GPogIuVUNj3/pub?gid=0&single=true&output=csv";

const CardMembersCarousel: React.FC = () => {
  const [membersData, setMembersData] = useState<Member[]>([]); // Renomeado para membersData

  useEffect(() => {
    console.log("Fetch data");

    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse<Member>(data, { header: true });
        const membersData: Member[] = parsedData.data.map(item => ({
          name: item.Nome || "", // Altere 'Nome' para o nome correto da coluna na sua planilha
          description: item.Descrição || "", // Altere conforme necessário
          image: item.Foto || "", // Assumindo que a imagem está na coluna 'image'
          lattes: item.Lattes || "", // Altere conforme necessário
          linkedin: item.Linkedin || "", // Altere conforme necessário
        }));
        setMembersData(membersData); // Atualizando o estado com os dados mapeados
      })
      .catch((err) => console.log(err));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? membersData.length - 3 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === membersData.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {membersData.map((member, index) => (
            <div
              key={index}
              className="min-w-[calc(100%/3)] flex justify-center"
            >
              <MemberCard
                image={member.image}
                name={member.name}
                description={member.description}
                lattes={member.lattes}
                linkedin={member.linkedin}
              />
            </div>
          ))}
        </div>
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
      </div>
    </div>
  );
};

export default CardMembersCarousel;
