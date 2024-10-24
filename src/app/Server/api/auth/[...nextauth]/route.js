import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import db from '@/libs/db'
import bcrypt from 'bcrypt'

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Nombre", type: "text", placeholder: "Tu nombre" },
                password: { label: "Contraseña", type: "password" }
            },
            async authorize(credentials, req) {
                // Buscar usuario por nombre (nombre único en el modelo Prisma)
                const userFound = await db.usuario.findUnique({
                    where: {
                        nombre: credentials.email // Aquí debes usar 'nombre' en vez de 'email'
                    }
                });

                if (!userFound) throw new Error('Usuario no encontrado');

                const matchPassword = await bcrypt.compare(credentials.password, userFound.contrasena);
                if (!matchPassword) throw new Error('Contraseña incorrecta');

                return {
                    id: userFound.id,
                    name: userFound.nombre,
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
