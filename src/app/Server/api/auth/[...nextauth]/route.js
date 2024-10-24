import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();
const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                nombre: { label: "Nombre", type: "text", placeholder: "jsmith" },
                password: { label: "Contraseña", type: "password" }
            },
            async authorize(credentials, req) {
                // Buscar el usuario por su nombre en la base de datos
                const userFound = await prisma.usuario.findUnique({
                    where: {
                        nombre: credentials.nombre
                    }
                });

                if (!userFound) throw new Error('Usuario no encontrado');

                // Comparar la contraseña proporcionada con la almacenada en la base de datos
                const matchPassword = await bcrypt.compare(credentials.password, userFound.contraseña);
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
            // Añadir el id del usuario al token JWT
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            // Añadir el id del usuario a la sesión
            session.user.id = token.id;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
