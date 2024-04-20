"use client"
import {Formik, ErrorMessage, Form, Field} from "formik";
import * as yup from "yup";
import {Button, Card, Label} from "flowbite-react";
import React from "react";

export default function RegisterFormComponent(){
    const validationSchema = yup.object({
        firstName: yup.string()
            .required("FirstName is required"),
        lastName: yup.string()
            .required("LastName is required"),
        email: yup.string()
            .required("Email is required"),
        password: yup.string()
            .required("Password is required")
            .min(8, "password must be at least 8 characters"),
        confirmPassword: yup.string()
            .required("Confirm Password is required")
            .oneOf([yup.ref("password")], "passwords must match")
    })
    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{
                firstName:"",
                lastName:"",
                email:"",
                password:"",
                confirmPassword:""
            }}
            onSubmit={values => {
                alert(values)
            }}
            >
            {({isSubmitting}) => (
                <Card className="w-[300px]">
                    <Form className="max-w-sm mx-auto">
                        {/* firstname */}
                        <div>
                            <div className="block">
                                <Label htmlFor="firstName" value="First Name"/>
                            </div>
                            <Field
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="ms/mr first name"
                                className="mb-2"
                            />
                            <ErrorMessage name="firstName">
                                {(msg) => <div className="text-red-600 text-[14px] italic">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        {/* lastname */}
                        <div>
                            <div className="block">
                                <Label htmlFor="lastName" value="Last Name"/>
                            </div>
                            <Field
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="ms/mr last name"
                                className="mb-2"
                            />
                            <ErrorMessage name="lastName">
                                {(msg) => <div className="text-red-600 text-[14px] italic">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        {/* email */}
                        <div>
                            <div className="block">
                                <Label htmlFor="email" value="Email"/>
                            </div>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                placeholder="your@example.xyz"
                                className="mb-2"
                            />
                            <ErrorMessage name="email">
                                {(msg) => <div className="text-red-600 text-[14px] italic">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        {/* password */}
                        <div>
                            <div className="block">
                                <Label htmlFor="password" value="Password"/>
                            </div>
                            <Field
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="mb-2"
                            />
                            <ErrorMessage name="password">
                                {(msg) => <div className="text-red-600 text-[14px] italic">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        {/* confirm password */}
                        <div>
                            <div className="block">
                                <Label htmlFor="confirmPassword" value="Confirm Password"/>
                            </div>
                            <Field
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                className="mb-2"
                            />
                            <ErrorMessage name="password">
                                {(msg) => <div className="text-red-600 text-[14px] italic">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        {/* check box */}
                        <div className="flex items-center gap-2 my-2">
                            <input
                                id="remember"
                                type="checkbox"
                            />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        {/* submit btn */}
                        <Button type="submit" className="bg-violet-800 w-full">Register</Button>
                    </Form>
                </Card>
            )}
        </Formik>
    );
}