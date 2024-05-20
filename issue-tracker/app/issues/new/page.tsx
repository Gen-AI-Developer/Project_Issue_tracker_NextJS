import { InputIcon } from '@radix-ui/react-icons'
import { TextArea, TextField, Button, Heading } from '@radix-ui/themes'
import React from 'react'
// import Image from 'next/image';
// import image from '../app/public/logo.svg'


const NewIssue = () => {
    return (

        <div className='m-4 p-4 item flex-col border shadow-sm grid grid-cols-2 '>
            <div>
                <div>
                    <h1 className='text-sm font-semibold mb-2 '>
                        Fill the Form to Initiate an Issue
                    </h1>
                </div>
                <div className=''>
                    <TextField.Root variant="soft" placeholder="Title of the Issue">
                        <TextField.Slot className='font-semibold' >
                            <InputIcon height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>

                </div>
                <div className='mt-5'>
                    <TextArea variant="soft" placeholder="Add Description of the Issue" />
                </div>
                <div className="flex" >
                    <Button variant='outline' radius='medium' style={{ marginTop: 10 }}>
                        Push to DevSquads
                    </Button>
                </div>
            </div>
            <div className='border ml-4 rounded-md shadow-lg'>
                {/* <Image src={image} alt={''} height={50} width={50}></Image> */}
                <Heading>Keep it Simple, so our aliens can Understand</Heading>
            </div>
        </div>
    )
}

export default NewIssue