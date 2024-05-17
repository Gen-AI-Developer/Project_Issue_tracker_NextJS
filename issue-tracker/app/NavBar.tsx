import React from 'react'
import Link from 'next/link'
import { VscDebugConsole } from "react-icons/vsc";
const NavBar = () => {
    return (
        <nav className='flex space-x-12 border-b mb-5 px-5 h-14 items-center'>
            <Link href={'/'}><VscDebugConsole size={26} /></Link>
            <ul className='flex space-x-4'>
                <li><Link href={'/'}>Dashboard</Link></li>
                <li><Link href={'/issues'}>Issues</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar