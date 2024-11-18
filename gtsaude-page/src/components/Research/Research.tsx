"use client";
import { useState, useEffect } from "react";
import Papa from "papaparse";
import SelectableList from "../SelectableList/SelectableList";
import Accordion from "../UI/Accordion";

//Sessão dedicada a apresentar as pesquisas do grupo, realizadas e em andamento.

//Link da Planilha
const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhKX1VJ83ns6ujBStRVJvLSqallRt2jK9vsfXICRZOJMQxNzIvb4EA3rOG9kGpkhAh8GPogIuVUNj3/pub?gid=737971149&output=csv";

//Variáveis de acordo com as colunas da planilha
interface ResearchData {
  Ano: string;
  Titulo: string;
  Descricao: string;
  Status: string;
}

const Research = () => {
    
    const [researchData, setResearchData] = useState<ResearchData[]>([]);
    const [years, setYears] = useState<string[]>([]);
    const [selectedYear, setSelectedYear] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento

    // Fetch e parse dos dados do Google Sheets
    useEffect(() => {
        fetch(url)
            .then((response) => response.text())
            .then((data) => {
                const parsedData = Papa.parse<ResearchData>(data, { header: true });
                const formattedData = parsedData.data.map(item => ({
                    Ano: item.Ano || "",
                    Titulo: item.Titulo || "",
                    Descricao: item.Descricao || "",
                    Status: item.Status || ""
                }));
                setResearchData(formattedData);

                // Extrair anos únicos para a lista de seleção
                const uniqueYears = Array.from(new Set(formattedData.map(item => item.Ano))).filter(year => year);
                uniqueYears.sort();
                setYears(uniqueYears);

                // Define o primeiro ano como selecionado
                if (uniqueYears.length > 0) {
                    setSelectedYear(uniqueYears[0]);
                }
                setLoading(false); // Define o carregamento como falso após os dados serem carregados
            })
            .catch((err) => {
                console.log("Erro ao buscar dados:", err);
                setLoading(false); // Também define o carregamento como falso em caso de erro
            });
    }, []);

    // Dados filtrados por ano
    const filteredData = selectedYear
        ? researchData.filter(item => item.Ano === selectedYear)
        : researchData;

    return (

        <div className="flex flex-col items-center h-full py-8 gap-12 bg-primary-blue" id="Research">
            <div className="flex flex-col items-center gap-6 max-w-4xl py-4">
                {/* Título da Sessão */}
                <h1 className="text-xl md:text-4xl text-primary-white text-center font-semibold">Projetos em Andamento</h1>
                {/* Descrição da Sessão */}
                <p className="text-base md:text-xl text-primary-white text-justify">Esta seção oferece aos visitantes uma oportunidade de acompanhar os avanços mais recentes e inovadores em diversas áreas do conhecimento...</p>
            </div>
            <div>
                 {/* Navegação por ano */}
                <SelectableList items={years} onSelect={setSelectedYear} />
            </div>
             {/* Accordion com as pesquisas */}
            <div className="w-full">
                {loading ? (
                    // Skeleton Loader
                    <div className="animate-pulse flex justify-center items-center flex-col gap-5">
                        <div className="h-6 bg-gray-300/40 rounded w-1/2"></div>
                        <div className="h-6 bg-gray-300/40 rounded w-1/3"></div>
                        <div className="h-6 bg-gray-300/40 rounded w-1/2"></div>
                    </div>
                ) : (
                    <Accordion items={filteredData} />
                )}
            </div>
        </div>
    );
};

export default Research;
