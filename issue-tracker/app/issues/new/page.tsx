"use client";
import { TextArea, Text, TextField, Button, Heading, Box, Inset, Card, Strong } from '@radix-ui/themes'
import React from 'react'
import logo from '@/app/public/IssuePage.svg'
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import SimpleMDE from "react-simplemde-editor";
import * as Form from '@radix-ui/react-form'
import "easymde/dist/easymde.min.css";

interface IssueForm {
    title: string;
    description: string;
    pirority: string;
}

const NewIssue = () => {
    const { register, control } = useForm<IssueForm>();
    // console.log(register('title'))
    return (

        <div className='m-4 p-3 item flex-col rounded border grid grid-cols-1 md:grid-cols-2'>
            
            <div className='ml-4'>
                <div className='mt-6 md:mt-0'>
                    <Box maxWidth="540px">
                        <Card size="3" variant='surface'>
                            <Inset clip="padding-box" side="top" pb="current">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Bold typography"
                                    style={{
                                        display: 'block',
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: 140,
                                        backgroundColor: 'var(--gray-5)',
                                    }}
                                />
                            </Inset>

                            <Text>
                                <Strong>- DevSquads -</Strong>
                                <div className='text-justify font-thin'>
                                    Welcome to DevSquads, the ultimate platform where professional developers systematically resolve your coding issues, ensuring that you never encounter the same errors again. Leveraging the power of Generative AI, our team offers precise and efficient solutions tailored to your specific problems. Whether you're dealing with a minor bug or a critical system failure, DevSquads is here to help you debug, optimize, and enhance your code, making your development process smoother and more productive.

                                </div>
                            </Text>
                        </Card>
                    </Box>
                    {/* <Image src={logo} height={350} width={350} alt='logo'></Image> */}
                </div>
                {/* <Heading>Keep it Simple, so our aliens can Understand</Heading> */}
            </div>
        </div>
    )
}

export default NewIssue