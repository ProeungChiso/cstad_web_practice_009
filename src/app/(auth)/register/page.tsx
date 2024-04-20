import type {Metadata} from "next";
import RegisterFormComponent from "@/components/Forms/RegisterFormComponent";

export const metadata: Metadata = {
    title:"Register",
    description:"NextJs with Validate & Auth | Register",
    keywords:["NextJs", "NextTs", "Validate", "Auth", "Project"],
    openGraph:{
        title:"Register",
        description: "NextJs with Validate & Auth | Register",
        images: "https://images.ctfassets.net/9ynx8gh7pmzk/3zywxqIxpGCcsZl5QTUxA5/5d22d2fe2a393f46eb9d424a32749ddb/AdobeStock_485795755_Editorial_Use_Only_thumb_resized.jpg?w=800&h=536&fl=progressive&q=100&fm=jpg"
    }
};

export default function RegisterPage(){
    return (
        <div className="container mx-auto flex flex-col justify-center items-center pt-5">
            <h1 className="text-center text-violet-800 text-2xl mt-20 mb-10">Welcome Our New Member!</h1>
            <RegisterFormComponent/>
        </div>
    )
}