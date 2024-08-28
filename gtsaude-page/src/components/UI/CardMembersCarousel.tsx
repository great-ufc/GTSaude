"use client";
import { useState } from "react";
import MemberCard from "./MemberCard";

interface Member {
  image: string;
  name: string;
  description: string;
  linkedin?: string;
  lattes?: string;
}

const membersData: Member[] = [
  {
    image: "/img/members/pesquisador1.jpg",
    name: "Gumball",
    description: "Desenvolvedor Full-Stack",
    linkedin: "https://www.linkedin.com/in/gumbal/",
    lattes: "http://lattes.cnpq.br/Gumball",
  },
  {
    image: "/img/members/pesquisador1.jpg",
    name: "Anaís",
    description: "Designer UX/UI",
    linkedin: "https://www.linkedin.com/in/anais/",
    lattes: "http://lattes.cnpq.br/anais",
  },
  {
    image: "/img/members/pesquisador1.jpg",
    name: "Darwin",
    description: "Pesquisador de Engenharia de Pesca",
    linkedin: "https://www.linkedin.com/in/darwin/",
    lattes: "http://lattes.cnpq.br/darwin",
  },
  {
    image: "/img/members/gumball.svg",
    name: "Gumball",
    description: "Desenvolvedor Full-Stack",
    linkedin: "https://www.linkedin.com/in/gumbal/",
    lattes: "http://lattes.cnpq.br/Gumball",
  },
  {
    image: "/img/members/gumball.svg",
    name: "Gumball",
    description: "Desenvolvedor Full-Stack",
    linkedin: "https://www.linkedin.com/in/gumbal/",
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
                linkedin={member.linkedin}
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
