import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function POST(request) {
    try {
        const data = await request.json();

        // Hash the provided password
        const hashedPassword = await bcrypt.hash(data.contraseña, 10)

        // Create a new user using the Usuario model in Prisma
        const newUser = await prisma.usuario.create({
            data: {
                nombre: data.nombre,
                contraseña: hashedPassword
            }
        })

        // Exclude the password from the response
        const { contraseña: _, ...user } = newUser

        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({
            message: error.message
        },
        {
            status: 500,
        });
    }
}
