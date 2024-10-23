"use client";
import { useState } from "react";
import MemberCard from "./MemberCard";

interface Member {
  image: string;
  name: string;
  description: string;
  instituicao: string;
  lattes?: string;
}

const membersData: Member[] = [
  {
    image: "/img/members/Rossana.gif",
    name: "Rossana Maria de Castro Andrade",
    description: "Professora Titular do Curso de Ciências da Computação",
    instituicao: "Universidade Federal do Ceará",
    lattes: "http://lattes.cnpq.br/9576713124661835",
  },
  {
    image: "/img/members/evilasio.gif",
    name: "Evilasio Costa Junior",
    description: "Professor do Curso de Engenharia da Computação",
    instituicao: "Universidade Federal do Ceará - Campus Sobral",
    lattes: "http://lattes.cnpq.br/1879682483814917",
  },
  {
    image: "/img/members/ismayle.gif",
    name: "Ismayle de Sousa Santos",
    description: "Professor do Curso de Ciências da Computação",
    instituicao: "Universidade Estadual do Ceará",
    lattes: "http://lattes.cnpq.br/4278565937358466",
  },
  {
    image: "/img/members/pesquisador1.jpg",
    name: "Evilasio Costa Junior",
    description: "Professor do Curso de Engenharia da Computação",
    instituicao: "UFC - Sobral",
    lattes: "http://lattes.cnpq.br/Gumball",
  },
  {
    image: "/img/members/gumball.svg",
    name: "Gumball",
    description: "Desenvolvedor Full-Stack",
    instituicao: "UFC - Sobral",
    lattes: "http://lattes.cnpq.br/Gumball",
  },
];

const CardMembersCarousel: React.FC = () => {
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
          className="flex gap-1 transition-transform duration-500 ease-in-out"
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
              />
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary-blue p-2 rounded-full"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary-blue p-2 rounded-full"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default CardMembersCarousel;
