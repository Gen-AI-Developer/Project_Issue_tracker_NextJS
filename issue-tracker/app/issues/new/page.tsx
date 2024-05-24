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

        <div className='m-4 item flex-col  grid grid-cols-1 md:grid-cols-2'>
            <Form.Root>
                <Form.Field className="grid mb-[10px]" name="email">
                    <div className="flex items-baseline justify-between">
                        <Form.Label className="text-[15px] font-medium leading-[35px]  text-zinc-600">Email</Form.Label>
                        <Form.Message className="text-[13px] text-zinc-600 opacity-[0.8]" match="valueMissing">
                            Please enter your email
                        </Form.Message>
                        <Form.Message className="text-[13px]  text-zinc-600 opacity-[0.8]" match="typeMismatch">
                            Please provide a valid email
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input
                            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                            type="email"
                            required
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Field className="grid mb-[10px]" name="question">
                    <div className="flex items-baseline justify-between">
                        <Form.Label className="text-[15px] font-medium leading-[35px]  text-zinc-600">
                            Question
                        </Form.Label>
                        <Form.Message className="text-[13px]  text-zinc-600 opacity-[0.8]" match="valueMissing">
                            Please enter a question
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <textarea
                            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
                            required
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Submit asChild>
                    <button className="box-border w-full text-white hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-indigo-600 px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
                        Post question
                    </button>
                </Form.Submit>
            </Form.Root>
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