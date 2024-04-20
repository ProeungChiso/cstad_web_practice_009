"use client"
import React from "react";
import {Button, Card, Label} from "flowbite-react";
import {Formik, ErrorMessage, Form, Field} from "formik";
import * as yup from "yup";
import {useSession, signIn, signOut} from "next-auth/react";
import Image from "next/image";
import { FaGoogle, FaGithub } from "react-icons/fa6";

export default function LoginComponent() {

    const {data: session} = useSession();

    const validationSchema = yup.object({
        email: yup.string().required("email is required"),
        password: yup.string()
            .required("password is required")
            .min(8, "password must be at least 8 characters"),
    });

    if (session) {
        return (
            <div className="w-full my-10 flex flex-col justify-center items-center">
                <h1 className="text-center text-violet-800 text-2xl mt-20 mb-10">
                    Thank you for login!
                </h1>
                <div className="w-44 h-44 relative mb-4">
                    <Image src={session.user?.image as string} fill alt="" className="object-cover rounded-full"/>
                </div>
                <p className="text-2xl mb-2">Welcome <span className="font-bold text-violet-800">{session.user?.name}</span>. Signed In
                    As
                </p>
                <p className="font-bold mb-4 text-violet-800">{session.user?.email}</p>
                <button className="bg-violet-800 text-gray-100 py-2 px-6 rounded-md" onClick={() => signOut()}>Sign out</button>
            </div>
        )
    }
    return (
        <>
            <Formik
                validationSchema={validationSchema}
                initialValues={{email: "", password: ""}}
                onSubmit={values => {
                    alert(values)
                }}
            >
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-center text-violet-800 text-2xl mt-20 mb-10">Welcome back Ms & Mr! Please
                        Login
                    </h1>
                    <Card className="w-[300px]">
                        <Form className="flex flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Your email"/>
                                </div>
                                <Field
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="name@exaple.xyz"
                                    className="w-full"
                                />
                                <ErrorMessage name="email">
                                    {(msg) => <div className="text-red-600 text-[14px] italic">{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password1" value="Your password"/>
                                </div>
                                <Field
                                    id="password1"
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    className="w-full"
                                />
                                <ErrorMessage name="password">
                                    {(msg) => <div className="text-red-600 text-[14px] italic">{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    id="remember"
                                    type="checkbox"
                                />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>
                            <Button type="submit" className="bg-violet-800">Login</Button>
                        </Form>
                    </Card>
                </div>
            </Formik>
            <div className="w-full flex flex-col justify-center items-center">
                <button className="bg-blue-600 py-2 px-6 rounded-md text-white mt-5 mb-2"
                        onClick={() => signIn('google')}>
                    <span className="flex justify-between items-center gap-2"><FaGoogle/>Sign in with Google</span>
                </button>
                <button className="bg-gray-900 py-2 px-6 rounded-md text-white mb-2"
                        onClick={() => signIn('github')}>
                    <span className="flex justify-between items-center gap-2"><FaGithub/>Sign in with GitHub</span>
                </button>
            </div>
        </>
    );
}
