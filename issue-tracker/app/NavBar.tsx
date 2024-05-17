import React from 'react'
import Link from 'next/link'
import { VscDebugConsole } from "react-icons/vsc";
const NavBar = () => {
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' },
    ]
    return (
        <nav className='flex space-x-12 border-b mb-5 px-5 h-14 items-center'>
            <Link href={'/'}><VscDebugConsole size={26} /></Link>
            <ul className='flex space-x-4'>
                {links.map(link => <Link
                    key={link.href}
                    className='text-zinc-400 hover:text-zinc-900 transition-colors'
                    href={link.href}>{link.label}</Link>)}

            </ul>
        </nav>
    )
}

export default NavBar