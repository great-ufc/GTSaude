"use client";
import Logo from '@/assets/Logo_v2.svg'
import Image from 'next/image'
import { ItemMenu } from '@/components/UI/Button'
import React, { useState } from "react";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

//Sessão dedicada a barra de navegação.

export default function Header() {
    const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
   
    return (
        <nav className='fixed flex items-center justify-center w-full h-24 bg-primary-blue shadow-2xl z-50' id="Header">
                
            <div className='flex items-center justify-between w-full max-w-[1246px] px-4 mx-auto' id="navbar-sticky">
                {/* Sessões de Navegação + Logo */}
                <ul className='hidden md:flex items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 '>
                    
                    <li>    <ItemMenu name='Início' anchorId='HeroSection'/>    </li>
                    <li>    <ItemMenu name='Sobre nós' anchorId='AboutUs'/>     </li>
                    <li>    <ItemMenu name='Membros' anchorId='Members' />      </li>
                        
                        <a href='/'>
                            <Image
                                className='md:min-h-16 md:min-w-16 h-16 w-16 transition-transform duration-300 ease-in-out transform hover:scale-110 active:opacity-75 cursor-pointer'
                                src={Logo}
                                alt="Logo"
                            />
                        </a>

                    <li>    <ItemMenu name='Pesquisa' anchorId='Research' />    </li>
                    <li>    <ItemMenu name='Artigos' anchorId='Articles' />     </li>
                    <li>    <ItemMenu name='Contatos' anchorId='Contacts' />       </li>
                
                </ul>
                
                <a href='/'>
                        <Image
                            className='md:hidden md:min-h-16 md:min-w-16 h-16 w-16 mt-2 ml-4 transition-transform duration-300 ease-in-out transform hover:scale-110 active:opacity-75 cursor-pointer'
                            src={Logo}
                            alt="Logo"
                        />
                </a>
                

                
                {/* NavBar Responsiva -> */}

                <div onClick={handleNav} className="block md:hidden items-center" >
                    {nav ? <AiOutlineClose className="z-10 absolute top-8 right-4 text-detail-green" size={30}/> : <AiOutlineMenu className="z-10 absolute top-8 right-4 text-detail-green"  size={30} />}
                </div>
                
                <div className={nav ? '  md:hidden absolute left-0 top-0 w-[100%] h-fit bg-primary-blue shadow-2xl ease-in-out duration-500 font-bold    ': 'fixed top-[-100%]'}>
                    
                    <a href='/'>
                        <Image
                            className='md:min-h-16 md:min-w-16 h-16 w-16 mt-6 ml-8 transition-transform duration-300 ease-in-out transform hover:scale-110 active:opacity-75 cursor-pointer'
                            src={Logo}
                            alt="Logo"
                        />
                    </a>
                    {/* Sessões de Navegação */}
                    <ul className='pb-4 text-center'>
                        <li className='pb-4'>    <ItemMenu name='Início' anchorId='HeroSection'/>    </li>
                        <li className='p-4'>    <ItemMenu name='Sobre nós' anchorId='AboutUs'/>     </li>
                        <li className='p-4'>    <ItemMenu name='Membros' anchorId='Members' />      </li>
                        <li className='p-4'>    <ItemMenu name='Pesquisa' anchorId='Research' />    </li>
                        <li className='p-4'>    <ItemMenu name='Artigos' anchorId='Articles' />     </li>
                        <li className='p-4'>    <ItemMenu name='Contatos' anchorId='Contacts' />       </li>
                    </ul>
                </div>

                
            </div>
        </nav>
    )
}
