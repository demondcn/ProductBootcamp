import { ShoppingCart, Search } from "lucide-react";
import Menu from "./ButtonMedia";
import Image from "next/image";
const LogoPage = require('@/../public/img/logo.png');
import { useRouter } from 'next/navigation'; // Importa useRouter

export default function HeaderExx() {
  const router = useRouter(); // Inicializa el router

  return (
    <header className="bg-black w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* <Image
            src="../public/img/logo.png"  // Ruta desde la carpeta public
            alt="Logo"
            width={40}  // Especifica el ancho
            height={40} // Especifica el alto
          /> */}
          <span className="text-white text-sm font-semibold leading-tight">
            KHEPRY
          </span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-white hover:text-gray-300"
            onClick={() => router.push('')}
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
            href="/Apartados/Cursos"
            className="text-white hover:text-gray-300"
            onClick={() => router.push('/Apartados/Cursos')}
          >Cursos</a>
          <a href="/Apartados/Campus"
            className="text-white hover:text-gray-300"
            onClick={() => router.push('/Apartados/Campus')}
          >Campus</a>
          <a href="/Apartados/Blog"
            className="text-white hover:text-gray-300"
            onClick={() => router.push('/Apartados/Blog')}
          >Blog</a>
          <a href="/Apartados/Contactos"
            className="text-white hover:text-gray-300"
            onClick={() => router.push('/Apartados/Blog')}>Contacto</a>
          <a href="/Apartados/Login"
            className="text-white hover:text-gray-300"
            onClick={() => router.push('/Apartados/Login')}>Login</a>
        </nav>
        <div className="text-white flex items-center space-x-4">
          <button aria-label="Shopping cart">
            <ShoppingCart className="h-6 w-6" />
          </button>
          <button aria-label="Search">
            <Search className="h-6 w-6" />
          </button>
          <Menu />
        </div>
      </div>
    </header>
  );
}