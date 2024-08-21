import Logo from '@/assets/Logo_v2.svg'
import Image from 'next/image'

export default function Header() {
    return (
        <header className='flex items-center justify-center w-full h-24 bg-p-blue'>
            <div className='flex items-center justify-between w-full max-w-[1246px] px-4 mx-auto'>
                <ul className='flex items-center gap-10'>
                    <li>
                        'Início'
                    </li>
                    <li>
                        'Sobre nós'
                    </li>
                    <li>
                        'Membros'
                    </li>
                </ul>
                <Image
                    className='h-16 w-16'
                    src={Logo}
                    alt="Logo"
                />
                <ul className='flex items-center gap-14'>
                    <li>
                        'Pesquisa'
                    </li>
                    <li>
                        'Artigos'
                    </li>
                    <li>
                        'Base de Dados'
                    </li>
                </ul>
            </div>
        </header>
    )
}