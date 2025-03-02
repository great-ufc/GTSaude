import CardMembersCarousel from "../UI/CardMembersCarousel";

//Membros é a sessão dedicada a apresentar os integrantes do grupo.

const Members = () => {
    return (
        <div className="flex flex-col items-center bg-primary-white h-full py-8 gap-12 w-full" id="Members">
            <div className="flex flex-col items-center gap-6 max-w-4xl py-4">
                {/* Título da Sessão */}
                <h1 className="text-xl md:text-4xl text-primary-blue text-center font-semibold">Membros</h1>
                {/* Descrição da Sessão */}
                <p className="text-base md:text-xl px-6 md:px-0 text-primary-blue text-center"> Atualmente integram o GT Saúde professores e alunos de Pós-Graduação de Graduação da UFC e de outras universidades.
                </p>
            </div>

            <div className="flex">
                {/* Chamada do conjunto de cards dos integrantes*/}
                <CardMembersCarousel />
            </div>
        </div>
    );
}

export default Members