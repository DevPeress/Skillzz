'use client'

import { Paginas } from '@/types/types'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function NavBar() {
    const pathname = usePathname()
    const paginas: Paginas[] = [
        { nome: "Início", pagina: "/" },
        { nome: "Serviços", pagina: "/servicos" },
        { nome: "Agendamentos", pagina: "/Agendamentos" },
    ]
    const navigate = useRouter()
    const [pesquisa,setPesquisa] = useState<string>("")

    return ( // 252836
        <div className="flex absolute w-full h-[10vh] bg-[#252836] items-center justify-center border-b-[#FFFFFF] border-b-[.1vw] select-none">
            <div className='flex absolute w-[5vw] h-[10vh] left-[1vw]'>
                <Image
                    src="Logo.svg"
                    alt="Logo"
                    fill
                />
            </div>

            <nav className='flex absolute w-[15vw] h-full left-[7.5vw] items-center justify-between'>
                {paginas.map((item, index) => {
                    const pagina: boolean = pathname.includes(item.pagina)
                    console.log(pagina)

                    return (
                        <div key={index} className='text-[.85vw] font-bold hover:scale-110' style={{ color: pagina ? "#EA7C69" : "#FFFFFF" }} onClick={() => navigate.push(item.pagina)}>{item.nome}</div>
                    )
                })}
            </nav>

            <div className='flex absolute w-[30vw] h-[5vh] items-center justify-center rounded-[.5vw] bg-[#1F1D2B] '>
                <div className='flex absolute w-[1vw] h-[2vh] left-[1vw]'>
                    <Image
                        src="Lupa.svg"
                        alt="Lupa para a barra de pesquisa"
                        fill
                    />
                </div>
                <input type="text" placeholder='Pesquise aqui' className='w-full h-full p-[2.5vw] left-[2vw] outline-none text-[.75vw] font-semibold' value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} />
            </div>

            <div className='flex absolute w-[5vw] h-[10vh] right-[1vw] items-center justify-center'>
                <div className='flex absolute w-[4vw] h-[8vh] left-[1vw]'>
                    <Image
                        src="User.svg"
                        alt="Foto de usuário sem login"
                        className='rounded-[1vw]'
                        fill
                    />
                </div>
            </div>
        </div>
    )
}