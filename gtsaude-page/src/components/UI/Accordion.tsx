// components/Accordion.tsx
import AccordionItem from './AccordionItem';

const Accordion: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <AccordionItem
        title="Primeiro Item"
        description="Esta é a descrição do primeiro item do acordeão. Pode incluir qualquer conteúdo que desejar."
      />
      <AccordionItem
        title="Segundo Item"
        description="Esta é a descrição do segundo item. Experimente clicar para abrir e fechar."
      />
      <AccordionItem
        title="Terceiro Item"
        description="Aqui está o terceiro item do acordeão, com mais detalhes e informações."
      />
      <AccordionItem
        title="Quarto Item"
        description="Aqui está o terceiro item do acordeão, com mais detalhes e informações."
      />
      <AccordionItem
        title="Quinto Item"
        description="Aqui está o terceiro item do acordeão, com mais detalhes e informações."
      />
      <AccordionItem
        title="Sexto Item"
        description="Aqui está o terceiro item do acordeão, com mais detalhes e informações."
      />
    </div>
  );
};

export default Accordion;
