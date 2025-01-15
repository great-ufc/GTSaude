import Logo from '@/assets/Logo_v2.svg'
import Healthy from '@/assets/Healthy.svg'

import Image from 'next/image'

//Sobre nós é a sessão dedicada a falar sobre o grupo GTsaúde e falar seus obetivos
export default function AboutUs (){
    return(
        <section className="w-full h-[120hv] max-h-[1200px] bg-primary-blue relative " id='AboutUs'>      
        
                <div className="h-full flex flex-col items-center justify-center max-w-[1246px] mx-auto my-auto ">
                {/* Título da sessão */}
                <div className="justify-center text-center py-10">
                    <h1 className="font-bold text-2xl md:text-4xl text-p-white ">Sobre nós</h1>
                </div>
                

                {/* Texto superior da página */}
                <div className='flex items-center justify-center w-[80%]'>
                    {/* Logo GTsaúde */}
                    <div className='md:w-[50%] w-[20%]  md:flex hidden items-center justify-center '>
                        <Image
                            className='md:h-64 md:w-64 h-24 w-24 mr-4'
                            src={Logo}
                            alt="Logo"
                        />
                    </div>
                    {/* Como a GT Saúde surgiu? */}
                    <div className='flex-col md:w-[50%] w-[80%] text-p-white text-justify h-30 relative'>  
                        
                        <h1 className='text-lg md:text-2xl pb-8 text-right relative'>Como a GT Saúde surgiu?
                            <div className='md:absolute hidden bg-orange-500 md:h-2 h-1 md:right-[-25vw] right-[-20vw] md:w-[80vh] w-[20vh] bottom-[0px] rounded-l-xl mb-4 '>
                                <h1 className='text-transparent'> . </h1>
                            </div>    
                        </h1> 
                        
                        <h4 className='md:text-base text-sm'>O GT Saúde é um grupo de trabalho associado ao Grupo de Redes de Computadores, Engenharia de Software e Sistemas (GREat) da Universidade Federal do Ceará (UFC). Esse laboratório está associado ao Departamento de Computação e aos programas de Mestrado e Doutorado em Ciências da Computação e Programa de Pós-Graduação em Engenharia de TeleInformática da UFC. O GT Saúde atua nas área de Saúde Digital, Saúde Inteligente (Smart Health), e Internet das Coisas Médicas (Internet of Health Things - IoHT). Os pesquisadores do GREat já atuam nessas áreas de pesquisa desde 2013 e o GT Saúde foi iniciado em 2018 para integrar todos os pesquisadores do GREat que atuam em pesquisas nas áreas supracitadas.</h4>

                    </div>
                </div>

                {/* Texto Inferior da página */}
                <div className='flex items-center justify-center w-[80%] py-20'>
                    <div className='flex-col md:w-[50%] w-[80%] text-p-white text-justify'>  
                    
                    {/* Qual o nosso objetivo? */}
                    <h1 className='text-lg md:text-2xl pb-8 text-left relative'>Qual o nosso objetivo?
                            <div className='md:absolute hidden bg-orange-500 md:h-2 h-1 md:left-[-25vw] left-[-50vw] md:w-[80vh] w-[40vh] bottom-[0px] rounded-r-xl mb-4 '>
                                <h1 className='text-transparent'> . </h1>
                            </div>    
                        </h1> 
                        <h4 className='md:text-base text-sm'>O objetivo do GT de Saúde é integrar diferentes pesquisadores nas áreas de computação e saúde das UFC e de outras Instituições de Ensino Superior para desenvolver pesquisas e projetos nas áreas de tem como foco desenvolver pesquisas e projetos na área de Saúde Digital, Saúde Inteligente (Smart Health), e Internet das Coisas Médicas (Internet of Health Things - IoHT). O GT saúde conta com a colaboração de Professores, Estudantes de Pós-Graduação e Graduação e Profissionais de Saúde parceiros</h4>

                    </div>
                    {/* Imagem de analogia à saúde */}
                    <div className='md:w-[50%] w-[20%] md:flex hidden items-center justify-center '>
                        <Image
                            className='md:h-64 md:w-64 h-24 w-24 ml-4'
                            src={Healthy}
                            alt="Logo"
                        />
                    </div>

                </div>

                
            </div>  
        </section>
    )
}
