import Logo_Extd from '@/assets/Logo_extendida.svg'
// import { FaFacebookSquare, FaInstagramSquare, FaLinkedin} from "react-icons/fa";
// import { ImMail } from "react-icons/im";

import Image from 'next/image'

export default function AboutUs (){
    return(
        <section className="w-full md:h-[50vh] h-[32vh] max-h-[1200px] bg-primary-blue relative " id='AboutUs'>      
        
        <div className="h-full flex flex-col items-center justify-center max-w-[1246px] mx-auto my-auto py-10 ">

            <div className='md:flex-row flex flex-col items-center md:justify-between justify-center w-[80%] relative'>
                                
                    <a>
                        <Image
                            className='md:h-48 md:w-48 h-24 w-24  transition-transform duration-300 ease-in-out transform hover:scale-110 active:opacity-75 cursor-pointer'
                            src={Logo_Extd}
                            alt="Logo"
                        />
                    </a>


                    <ul className='text-xs md:text-lg md:text-left text-center pt-4'>
                        <li className='font-bold py-2'>
                            Contato GTsaúde:
                        </li>
                        
                        <li>
                            <a href="#" className="hover:underline focus:underline">gtsaudegrt@gmail.com</a>
                        </li>
                        
                    </ul>

                    <ul className='text-xs md:text-lg md:text-left text-center pt-4'>
                        <li className='font-bold py-2'>
                            Contato GREAT:
                        </li>
                        
                        <li>
                            <a href="#" className="hover:underline focus:underline">https://www.great.ufc.br</a>
                        </li>
                        
                    </ul>

                    
                    
                    <div className='absolute w-[70%] mx-auto bg-orange-500  h-1 rounded-xl mb-4 md:-bottom-14 -bottom-10 right-0 left-0'>
                            <h1 className='text-transparent'> . </h1>
                    </div> 
            </div> 

            {/* <div className='flex md:pt-32 pt-16 md:text-6xl text-3xl gap-10 text-detail-orange'>
                
                <a className='transition-transform duration-300 ease-in-out transform hover:scale-110 active:opacity-75 cursor-pointer' href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare />
                </a>

                <a className='transition-transform duration-300 ease-in-out transform hover:scale-110 active:opacity-75 cursor-pointer' href='https://www.instagram.com' target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare />
                </a>

                <a className='transition-transform duration-300 ease-in-out transform hover:scale-110 active:opacity-75 cursor-pointer' href='https://www.linkedin.com' target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>

                <a className='transition-transform duration-300 ease-in-out transform hover:scale-110 active:opacity-75 cursor-pointer' href='https://www.google.com' target="_blank" rel="noopener noreferrer">
                    <ImMail />
                </a>                                

            </div>            */}
        </div>  
        </section>
    )
}