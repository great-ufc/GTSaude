import Logo from '@/assets/Logo_v2.svg'
import Healthy from '@/assets/Healthy.svg'

import Image from 'next/image'

export default function AboutUs (){
    return(
        <section className="w-full  h-[120vh] max-h-[1000px] bg-primary-blue relative " id='AboutUs'>      
        
        <div className="h-full flex flex-col items-center justify-center max-w-[1246px] mx-auto my-auto ">

            <div className="justify-center text-center py-16">
                <h1 className="font-bold text-6xl text-p-white ">Sobre nós</h1>
            </div>
            
            <div className='absolute bg-orange-500 h-2 right-0 w-[60vh] top-[280px] rounded-l-xl '>
                <h1 className='text-transparent'> . </h1>
            </div>
            <div className='absolute bg-orange-500 h-2 left-0 w-[60vh] bottom-[230px] rounded-r-xl '>
                <h1 className='text-transparent'> . </h1>
            </div>

            {/* Texto da página */}
            <div className='flex items-center justify-center w-[80%]'>
                <div className='w-[50%] flex items-center justify-center '>
                    <Image
                        className='h-64 w-64'
                        src={Logo}
                        alt="Logo"
                    />
                </div>

                <div className='flex-col w-[50%] text-p-white text-justify h-30'>  
                    
                    <h1 className='text-2xl pb-8 text-right'>Como a GT Saúde surgiu?</h1> 
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>

                </div>
            </div>

            <div className='flex items-center justify-center w-[80%] pt-20'>
                <div className='flex-col w-[50%] text-p-white text-justify'>  
                    
                    <h1 className='text-2xl pb-8'>Qual o nosso objetivo?</h1> 
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>

                </div>

                <div className='w-[50%] flex items-center justify-center '>
                    <Image
                        className='h-64 w-64 '
                        src={Healthy}
                        alt="Logo"
                    />
                </div>

            </div>

            
        </div>  
        </section>
    )
}