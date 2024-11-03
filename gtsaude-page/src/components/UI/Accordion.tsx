import AccordionItem from './AccordionItem';

type AccordionProps = {
  items: {
    Titulo: string;
    Descricao: string;
    Status: string;
  }[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.Titulo}
          description={item.Descricao}
          currentstatus={item.Status}
        />
      ))}
    </div>
  );
};

export default Accordion;
