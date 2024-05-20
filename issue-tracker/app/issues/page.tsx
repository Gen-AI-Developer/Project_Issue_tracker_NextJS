import React from 'react'
import Link from 'next/link'
import { Button } from '@radix-ui/themes'

const IssuesPage = () => {
    return (
        <div className="flex-col grid grid-cols-2 m-3 p-4 border rounded-md shadow-md bg-white items-center">
            <div className='grid-col-1 text-xl font-bold'>ONE</div>
            <div className='flex'>
                <Button><Link href={"/issues/new/"}>Create New Issue</Link></Button>
            </div>

        </div>
    )
}

export default IssuesPage