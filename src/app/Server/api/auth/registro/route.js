import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import db from '@/libs/db';

export async function POST(request) {
    try {
        const data = await request.json();

        // Hasheando la contraseña
        const hashedPassword = await bcrypt.hash(data.password, 10);

        // Creando el nuevo usuario con la nueva estructura del modelo Prisma
        const newUser = await db.usuario.create({
            data: {
                nombre: data.name,
                email: data.email,
                contrasena: hashedPassword
            }
        });

        const { contrasena, ...user } = newUser;  // Evita devolver la contraseña en la respuesta

        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500,
        });
    }
}
