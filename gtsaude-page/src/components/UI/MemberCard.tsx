import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import Lattes from '@/assets/lattes2.png'
import Linkedin from '@/assets/linkedin.png'


interface MemberCardProps {
  image: string;
  name: string;
  description: string;
  linkedin?: string;
  lattes?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ image, name, description, linkedin, lattes }) => {
  return (
    <Card className="pb-4 flex flex-col items-center justify-between bg-primary-blue rounded-xl md:w-64 w-42 md:h-96 h-70">
      <CardBody className="flex justify-center items-center">
        <div className="w-full h-44 relative">
          <Image
            alt={name}
            className="object-cover rounded-t-xl"
            src={image}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardBody>
      <CardHeader className="px-4 flex-col items-center text-center">
        <h4 className="font-bold text-base pb-4">{name}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </CardHeader>
      <CardFooter className="flex justify-center space-x-6">
        {lattes && (
          <a href={lattes} target="_blank" rel="noopener noreferrer">
            <Image 
            src={Lattes}
            alt="Link para o Lattes" 
            className="md:w-11 md:h-11 w-9 h-9 object-cover hover:opacity-50 transition-transform duration-500 ease-in-out"
            />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Image 
            src={Linkedin}
            alt="Link para o Linkedin" 
            className="md:w-11 md:h-11 w-9 h-9  object-cover hover:opacity-50 transition-transform duration-500 ease-in-out"
            />
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default MemberCard;
