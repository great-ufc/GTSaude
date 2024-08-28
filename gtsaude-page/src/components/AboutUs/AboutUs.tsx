import Logo from '@/assets/Logo_v2.svg'
import Healthy from '@/assets/Healthy.svg'

import Image from 'next/image'

export default function AboutUs (){
    return(
        <section className="w-full h-[120hv] max-h-[1200px] bg-primary-blue relative " id='AboutUs'>      
        
        <div className="h-full flex flex-col items-center justify-center max-w-[1246px] mx-auto my-auto ">

            <div className="justify-center text-center py-10">
                <h1 className="font-bold text-2xl md:text-4xl text-p-white ">Sobre nós</h1>
            </div>
            

            {/* Texto da página */}
            <div className='flex items-center justify-center w-[80%]'>
                <div className='md:w-[50%] w-[20%]  flex items-center justify-center '>
                    <Image
                        className='md:h-64 md:w-64 h-24 w-24 mr-4'
                        src={Logo}
                        alt="Logo"
                    />
                </div>

                <div className='flex-col md:w-[50%] w-[80%] text-p-white text-justify h-30 relative'>  
                    
                    <h1 className='text-lg md:text-2xl pb-8 text-right relative'>Como a GT Saúde surgiu?
                        <div className='absolute bg-orange-500 md:h-2 h-1 md:right-[-25vw] right-[-60vw] md:w-[80vh] w-[40vh] bottom-[0px] rounded-l-xl mb-4 '>
                            <h1 className='text-transparent'> . </h1>
                        </div>    
                    </h1> 
                       
                    <h4 className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>

                </div>
            </div>

            <div className='flex items-center justify-center w-[80%] py-20'>
                <div className='flex-col md:w-[50%] w-[80%] text-p-white text-justify'>  
                    
                <h1 className='text-lg md:text-2xl pb-8 text-left relative'>Qual o nosso objetivo?
                        <div className='absolute bg-orange-500 md:h-2 h-1 md:left-[-25vw] left-[-60vw] md:w-[80vh] w-[40vh] bottom-[0px] rounded-r-xl mb-4 '>
                            <h1 className='text-transparent'> . </h1>
                        </div>    
                    </h1> 
                    <h4 className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>

                </div>

                <div className='md:w-[50%] w-[20%] flex items-center justify-center '>
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