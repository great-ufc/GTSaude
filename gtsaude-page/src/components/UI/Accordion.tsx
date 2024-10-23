// components/Accordion.tsx
import AccordionItem from './AccordionItem';

const Accordion: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <AccordionItem
        title="[Funcap-Pesquisador Emprendedor] QoL Monitor: Aplicativo para Monitoramento e Melhoria da Qualidade de Vida"
        description=" A Qualidade de Vida (QV) vem sendo estudada por um longo tempo e a Organização Mundial de Saúde (OMS) define QV como a percepção individual de cada ser humano sobre sua vida considerando seu contexto sócio-cultural, objetivos, expectativas e padrões pessoais. Em geral, essa percepção é vinculada a quatro grandes domínios: físico, psicológico, social e ambiental. A relevância para estudar QV reside na busca por estratégias capazes de mensurar o bem-estar de um paciente. Sem essas estratégias, tratamentos e soluções tecnológicas que buscam melhorar a Qualidade de Vida das pessoas estariam restritos às percepções subjetivas dos profissionais de saúde. Nesse sentido, existem muitos instrumentos para avaliação formal da QV (em geral, questionários), no entanto, o uso desses instrumentos é complexo, custoso, não-transparente e propenso a erros. Considerando esse problema, este projeto propõe o uso de Internet das Coisas Médicas (IoHT, do inglês Internet of Health Things) para coletar dados de ambiente inteligentes e aplicar técnicas de aprendizagem de máquina a fim de inferir medidas de Qualidade de Vida. Para alcançar esse objetivo, foi desenvolvido um aplicativo móvel que usa dados IoHT e Machine Learning para inferir o nível de Qualidade de Vida dos seus usuários."
        currentstatus="Em andamento."
      />
      <AccordionItem
        title="[Ines 2.0] Subprojeto GREat Health - Ambiente para Desenvolvimento de Aplicações IoHT Auto Adaptativas baseado na Arquitetura de Microsserviços"
        description="Nos próximos anos, o número de pessoas que vivem nos centros urbanos aumentará. Como resultado, os problemas de infra-estrutura tornar-se-ão cada vez mais complexos. As cidades precisam de ser inteligentes para garantir o bem-estar da cidade e dos seus cidadãos. A inteligência de uma cidade é impulsionada e tecnologicamente possibilitada pela Internet das Coisas (IoT). Neste contexto, este projeto propõe uma abordagem para o desenvolvimento e avaliação de aplicações IoT focadas em cidades inteligentes. Como resultado, este trabalho investigará questões de personalização para cenários de casas inteligentes onde as preferências do usuário podem ser identificadas para prever ações que os objetos inteligentes podem executar proativamente. Ao mesmo tempo, as adaptações realizadas pelos objetos inteligentes neste cenário exigem que aspectos de qualidade sejam garantidos. Portanto, deve-se priorizar a melhor configuração do sistema que maximize os atributos de qualidade. Como resultado, espera-se novos métodos para identificação de perfis de usuários no contexto de cidades inteligentes e novas medidas de avaliação de qualidade adaptadas para cidades inteligentes."
        currentstatus="Em andamento."
      />
      <AccordionItem
        title="[Pibic - UFC] P-GRAFIT: Plataforma de criação de grafos de classificação para sistemas de Internet das Coisas Médicas"
        description="O projeto propõe a criação da plataforma web P-GRAFIT, que tem como objetivo auxiliar a construção, disponibilização e consumo de grafos de classificação por sistemas IoHT. O P-GRAFIT deve facilitar a interação dos desenvolvedores que quiserem construir grafos de classificação para relacionar os dados de sensores e as situações de saúde. Uma vez gerado o grafo, a plataforma também deve oferecer download do grafo e dos modelos de machine learning treinados. Além disso, a P-GRAFIT também deve prover uma forma de visualizar os grafos construídos para auxiliar a tomada de decisão do desenvolvedor do sistema IoHT e permitir que desenvolvedores de outros sistemas possam utilizar grafos já prontos."
        currentstatus="Em andamento"
      />
      <AccordionItem
        title="[Funcap - Inovafit] FRIEND - Plataforma para Desenvolvimento de Aplicações IoHT Autoadaptativas baseado na Arquitetura de Microsserviços"
        description="O monitoramento da saúde das pessoas através da coleta de dados de sensores é um tema que ganhou destaque nos últimos anos com o advento da Internet das Coisas Médicas (no inglês, Internet of Health Things - IoHT) e com a percepção crescente de envelhecimento populacional em muitos países. neste contexto, o objetivo deste projeto é desenvolver a plataforma FRIEND, uma plataforma de desenvolvimento para aplicações IoHT autoadaptativas baseadas em microsserviços. Sistemas autoadaptativos são ideais para tratar da dinamicidade de sistemas IoHT, pois são projetados para se adaptar automaticamente às mudanças no contexto."
        currentstatus="Concluído."
      />
    </div>
  );
};

export default Accordion;
