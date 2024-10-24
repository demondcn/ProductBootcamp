import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import db from '@/libs/db';

export async function POST(request) {
    try {
        const data = await request.json();

        const hashedPassword = await bcrypt.hash(data.password, 10);

        // Crear el nuevo usuario
        const newUser = await db.usuario.create({
            data: {
                nombre: data.name, // Cambiado a 'nombre'
                contrasena: hashedPassword // Cambiado a 'contrasena'
            }
        });

        const { contrasena: _, ...user } = newUser;

        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500,
        });
    }
}
