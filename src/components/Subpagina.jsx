"use client";
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Nuestra Página</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Estamos encantados de tenerte aquí. Explora nuestro sitio y descubre todo lo que ofrecemos.
      </p>
      <Button>Empezar Ahora</Button>
    </div>
  )
}