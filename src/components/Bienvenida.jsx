import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function Bienvenida() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* <div className="absolute inset-0">
        <img
          alt="Woman in yoga pose"
          className="h-full w-full object-cover"
          src="/placeholder.svg?height=1080&width=1920"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div> */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider md:text-base">
          CENTRO DE RESTAURACION PSICOLOGIA HOLISTICA
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          KHEPRI
        </h1>
        <p className="mb-8 max-w-md text-lg md:text-xl">
        Las terapias holísticas son un enfoque integral que considera la persona en su totalidad: cuerpo, mente y espíritu. Buscan identificar y abordar las causas subyacentes de los problemas de salud, en lugar de simplemente tratar los síntomas de manera aislada        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <a href="/Apartados/Cursos"
            onClick={() => router.push('/Apartados/Cursos')} 
            className="bg-[#95c11f] text-white px-5 py-2 rounded hover:bg-[#7da019]">Ver Cursos</a>
          <Button variant="outline" className="bg-[#95c11f] text-white">
            <Play className="mr-2 h-4 w-4" />
            Conócenos
          </Button>
        </div>
      </div>
    </div>
  )
}