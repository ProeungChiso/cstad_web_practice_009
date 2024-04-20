import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import SessionWrapper from "@/app/SessionWrapper";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: {
        template: "%s - NextJS with Validate & Auth",
        default: "Home Project"
    },
    description: "NextJs with Validate & Auth",
    keywords: ["NextJs", "NextTs", "Validate", "Auth", "Project"],
    openGraph: {
        title: {
            template: "%s - NextJS with Validate & Auth",
            default: "Home Project"
        },
        description: "NextJs with Validate & Auth",
        images: "https://images.ctfassets.net/9ynx8gh7pmzk/3zywxqIxpGCcsZl5QTUxA5/5d22d2fe2a393f46eb9d424a32749ddb/AdobeStock_485795755_Editorial_Use_Only_thumb_resized.jpg?w=800&h=536&fl=progressive&q=100&fm=jpg"
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SessionWrapper>
            <html lang="en">
            <body className={inter.className}>
            <NavbarComponent/>
            {children}
            </body>
            </html>
        </SessionWrapper>
    );
}
