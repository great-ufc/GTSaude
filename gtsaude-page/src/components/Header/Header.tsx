import Logo from '@/assets/Logo_v2.svg'
import Image from 'next/image'
import { ItemMenu } from '@/components/UI/Buttom'


export function Header() {
    return (
        <header className='fixed flex items-center justify-center w-full h-24 bg-primary-blue z-50' id="Header">
            <div className='flex items-center justify-between w-full max-w-[1246px] px-4 mx-auto'>
                <ul className='flex items-center gap-10'>
                    <li>
                        <ItemMenu name='Início' anchorId='HeroSection'/>
                    </li>
                    <li>
                        <ItemMenu name='Sobre nós' anchorId='AboutUs'/>
                    </li>
                    <li>
                        <ItemMenu name='Membros' anchorId='Members' />
                    </li>
                </ul>
                <Image
                    // className='h-16 w-16'
                    className='h-16 w-16 transition-transform duration-300 ease-in-out transform hover:scale-110 active:opacity-75 cursor-pointer'
                    src={Logo}
                    alt="Logo"
                />
                <ul className='flex items-center gap-14'>
                    <li>
                        <ItemMenu name='Pesquisa' anchorId='Research' />
                    </li>
                    <li>
                        <ItemMenu name='Artigos' anchorId='Articles' />
                    </li>
                    <li>
                        <ItemMenu name='Base de Dados' anchorId='' />
                    </li>
                </ul>
            </div>
        </header>
    )
}
