import SelectableList from "../SelectableList/SelectableList";
import Accordion from "../UI/Accordion";

const Research = () => {
    const items = ['2021.1', '2021.2', '2022.1', '2022.2', '2023.1', '2023.2'];

    return (
        <div className="flex flex-col items-center h-full py-8 gap-12 bg-primary-blue">
            <div className="flex flex-col items-center gap-6 max-w-4xl py-4">
                <h1 className="text-xl md:text-4xl text-primary-white text-center font-semibold">Pesquisas em Andamento</h1>
                <p className="text-base md:text-xl text-primary-white text-justify">Esta seção oferece aos visitantes uma oportunidade de acompanhar os avanços mais recentes e inovadores em diversas áreas do conhecimento. Cada projeto listado inclui uma descrição concisa de seus objetivos, metodologia e impacto esperado, proporcionando um panorama das questões científicas e tecnológicas que estamos explorando.</p>
            </div>
            <div>
            <SelectableList items={items} />
            </div>
            <div>
                <Accordion></Accordion>
            </div>
        </div>
    );
}

export default Research