"use client";
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRouter } from 'next/navigation';
import Component from "./componente";

export default function Bienvenida() {
  const router = useRouter();
  const NavegarEntreInterfaces = () => {
    router.push(`/InicioSeccion/Sub1`);
  };

  return (
    <div>
      <header className="bg-white w-full shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Inicio</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Quiénes Somos +</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Maestrías En Línea</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Campus</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Contacto</a>
            </nav>
            <div className="text-white flex gap-5">
              <button className="bg-indigo-500 px-5 py-2 rounded-full">Search</button>
              <button className="bg-indigo-500 px-5 py-2 rounded-full">Shopping</button>
            </div>
          </div>
      </header>
      <main>
        <Component />
      </main>
    </div>
  )
}