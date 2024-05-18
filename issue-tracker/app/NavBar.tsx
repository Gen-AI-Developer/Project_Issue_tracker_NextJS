'use client';
import React from 'react'
import Link from 'next/link'
import { MdFitbit } from "react-icons/md";
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname();
    console.log(currentPath)
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' },
    ]
    return (
        <nav className='flex bg-white m-3 drop-shadow-lx space-x-12 border rounded-md mb-5 px-5 h-14 items-center'>

            <Link className='animate-ping' href={'/'}><MdFitbit size={24} color='#242659' /></Link>
            <ul className='flex space-x-4'>
                {links.map(link => <Link
                    key={link.href}
                    className={classnames({
                        'text-zinc-900': currentPath === link.href,
                        'text-zinc-500': currentPath !== link.href,
                    })}
                    href={link.href}>{link.label}</Link>)}

            </ul>
        </nav>
    )
}

export default NavBar