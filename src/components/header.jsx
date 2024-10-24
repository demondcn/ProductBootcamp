import { ShoppingCart, Search } from "lucide-react";
import { useRouter } from 'next/navigation'; // Importa useRouter

export default function HeaderExx() {
  const router = useRouter(); // Inicializa el router

  return (
    <header className="bg-gray-800 w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* <img
            src="/placeholder.svg?height=40&width=40"
            alt="Logo"
            className="h-10 w-10"
          /> */}
          <span className="text-white text-sm font-semibold leading-tight">
            KEPRY
          </span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-white hover:text-gray-300"
            onClick={() => router.push('/Apartados/QuienesSomos')}
          >
            Inicio
          </a>
          <a
            href="/Apartados/QuienesSomos"
            className="text-white hover:text-gray-300"
            onClick={() => router.push('/Apartados/QuienesSomos')}
          >Quiénes Somos
          </a>
          <a
            href="/Apartados/QuienesSomos"
            className="text-white hover:text-gray-300"
            onClick={() => router.push('/Apartados/QuienesSomos')}
          >Cursos</a>
          <a href="/Apartados/QuienesSomos"
            className="text-white hover:text-gray-300"
            onClick={() => router.push('/Apartados/QuienesSomos')}
          >Campus</a>
          <a href="/Apartados/Blog"
            className="text-white hover:text-gray-300"
            onClick={() => router.push('/Apartados/Blog')}
          >Blog</a>
          <a href="#" className="text-white hover:text-gray-300">Contacto</a>
          <a href="/Apartados/Login"
            className="text-white hover:text-gray-300"
            onClick={() => router.push('/Apartados/Login')}
          >Login</a>
        </nav>
        <div className="text-white flex items-center space-x-4">
          <button aria-label="Shopping cart">
            <ShoppingCart className="h-6 w-6" />
          </button>
          <button aria-label="Search">
            <Search className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
