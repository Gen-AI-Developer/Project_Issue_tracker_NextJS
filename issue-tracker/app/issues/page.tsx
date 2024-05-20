import React from 'react'
import { Button } from '@radix-ui/themes'

const IssuesPage = () => {
    return (
        <div className="flex flex-col m-3 p-4 border rounded-md shadow-md bg-white items-center">
            <div className='grid-col-1 text-xl font-bold'>ONE</div>
            <Button>New Issue</Button>
            <div className='grid-col-2 text-xl font-bold'>TWO</div>
        </div>
    )
}

export default IssuesPage