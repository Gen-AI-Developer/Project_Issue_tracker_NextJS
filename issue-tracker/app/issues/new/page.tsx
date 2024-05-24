"use client";
import { InputIcon } from '@radix-ui/react-icons'
import { TextArea, Text, TextField, Button, Heading, Box, Inset, Card, Strong } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'
import logo from '@/app/public/IssuePage.svg'
import Link from 'next/link'
import { useForm, SubmitHandler, Controller, Form } from "react-hook-form"
import SimpleMDE from "react-simplemde-editor";
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

        <div className='m-4 item flex-col  grid grid-cols-1 md:grid-cols-2'>
            <Form className='p-4 max-w-xl border rounded-xl shadow-sm space-y-3' onSubmit={(data) => console.log(data)}>
                <div>
                    <h1 className='text-sm font-semibold mb-2 '>
                        Fill the Form to Initiate an Issue
                    </h1>
                </div>
                <div className=''>
                    <TextField.Root variant='soft' {...register('title')} placeholder="Title of the Issue">
                        <TextField.Slot className='font-semibold' >
                            <InputIcon height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>

                </div>
                <div className='mt-5 '>
                    <Controller
                        name="description"
                        control={control}
                        render={(field) => <SimpleMDE placeholder="Add Description of the Issue"  {...field} />}
                    />

                </div>
                <div className="flex" >
                    <Button type='submit' variant='classic' radius='medium' style={{ marginTop: 10 }}>
                        Push to DevSquads
                    </Button>
                    <div className="ml-4" >
                        <Button variant='classic' radius='medium' style={{ marginTop: 10 }}>
                            <Link href={"/issues/howtoreport/"}>How to Report!</Link>
                        </Button>
                    </div>

                </div>

            </Form>
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