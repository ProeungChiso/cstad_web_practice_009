import LoginComponent from "@/components/Forms/LoginFormComponent";
import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title:"Login",
    description:"NextJs with Validate & Auth | Login",
    keywords:["NextJs", "NextTs", "Validate", "Auth", "Project"],
    openGraph:{
        title:"Login",
        description: "NextJs with Validate & Auth | Login",
        images: "https://images.ctfassets.net/9ynx8gh7pmzk/3zywxqIxpGCcsZl5QTUxA5/5d22d2fe2a393f46eb9d424a32749ddb/AdobeStock_485795755_Editorial_Use_Only_thumb_resized.jpg?w=800&h=536&fl=progressive&q=100&fm=jpg"
    }
};

export default function LoginPage() {
    return (
        <div className="container mx-auto flex flex-col justify-center items-center pt-5">
            <LoginComponent/>
        </div>
    )
}