"use client";
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRouter } from 'next/navigation';

export default function ini() {
  const router = useRouter();
  const NavegarEntreInterfaces = () => {
    router.push(`/InicioSeccion/usuario/diagnostico`);
  };
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Bienvenido a Nuestra Plataforma
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Descubre un mundo de posibilidades. Nuestra plataforma te ofrece las herramientas que necesitas para alcanzar tus metas.
            </p>
          </div>
          <div className="space-x-4">
            <Button onClick= {NavegarEntreInterfaces}>
              Comenzar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">Saber más</Button>
          </div>
        </div>
      </div>
    </section>
  )
}