'use client'

import { Button } from "@/components/ui/button"
import { Play, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Bienvenida() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const imgBack = require('@/../public/img/egipto.jpg')
  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        {isVideoLoaded && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/egypt-pyramid-sunset.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {/* Fallback Image */}
        <Image
          alt="Pirámides de Egipto al atardecer"
          className="h-full w-full object-cover"
          src={imgBack}
          priority
          quality={100}
          style={{ position: 'absolute', inset: 0, zIndex: -1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-yellow-100">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest md:text-base text-yellow-300">
          Centro de Restauración Psicología Holística
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-yellow-500">
          KHEPRI
        </h1>
        <p className="mb-8 max-w-md text-lg md:text-xl">
          Las terapias holísticas son un enfoque integral que considera la persona en su totalidad: cuerpo, mente y espíritu. Buscamos identificar y abordar las causas subyacentes de los problemas de salud, en lugar de simplemente tratar los síntomas de manera aislada.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button 
            variant="default"
            className="bg-yellow-600 text-yellow-100 hover:bg-yellow-700 transition-colors"
          >
            <a href="/Apartados/Cursos" className="flex items-center">
              Ver Cursos
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent text-yellow-500 border-yellow-500 hover:bg-yellow-500/20 transition-colors"
          >
            <Play className="mr-2 h-4 w-4" />
            Conócenos
          </Button>
        </div>
      </div>
    </div>
  )
}
