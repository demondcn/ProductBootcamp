import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import db from '@/libs/db';
import bcrypt from 'bcrypt';

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Busca el usuario con la nueva estructura del modelo Prisma
                const userFound = await db.usuario.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!userFound) throw new Error('No user found');

                const matchPassword = await bcrypt.compare(credentials.password, userFound.contrasena);
                if (!matchPassword) throw new Error('Wrong password');

                return {
                    id: userFound.id,
                    name: userFound.nombre,
                    email: userFound.email,
                };
            },
        }),
    ],
    pages: {
        signIn: "/"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
