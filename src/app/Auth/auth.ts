import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
        }),
        GithubProvider({
            clientId:process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
            clientSecret:process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
        })
    ],
});