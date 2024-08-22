import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { FaLinkedin, FaLemon } from "react-icons/fa";

interface MemberCardProps {
  image: string;
  name: string;
  description: string;
  linkedin?: string;
  lattes?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ image, name, description, linkedin, lattes }) => {
  return (
    <Card className="pb-4 flex flex-col items-center justify-between bg-primary-blue rounded-xl w-64 h-96">
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
        <h4 className="font-bold text-lg">{name}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </CardHeader>
      <CardFooter className="flex justify-center space-x-4">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 w-6 h-6" />
          </a>
        )}
        {lattes && (
          <a href={lattes} target="_blank" rel="noopener noreferrer">
            <FaLemon className="text-yellow-500 w-6 h-6" />
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default MemberCard;
