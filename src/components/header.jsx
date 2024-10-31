import { Calendar, Search, BugIcon } from "lucide-react"; // Cambia ShoppingCart por Calendar
import Menu from "./ButtonMedia";
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HeaderExx() {
  const router = useRouter();
  const Iconokhepri = require('@/../public/img/logo.png')
  
  return (
    <header className="bg-gradient-to-r from-black via-yellow-900 to-black shadow-lg border-b border-yellow-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image 
            src={Iconokhepri}
            alt="Logo Khepri Holístico" 
            width={32} 
            height={32} 
            className="h-8 w-8" 
          />
          <span className="text-yellow-500 text-xl font-serif font-bold leading-tight">
            Khepri Holístico
          </span>
        </div>

        <nav className="hidden md:flex space-x-6">
          {[
            ['Inicio', '/'],
            ['Quiénes Somos', '/Apartados/QuienesSomos'],
            ['Cursos', '/Apartados/Cursos'],
            ['Blog', '/Apartados/Blog'],
            ['Contacto', '/Apartados/Contactos'],
            ['Login', '/Apartados/Login'],
          ].map(([title, url]) => (
            <Link
              key={url}
              href={url}
              className="text-yellow-100 hover:text-yellow-500 transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
              onClick={(e) => {
                e.preventDefault();
                router.push(url);
              }}
            >
              {title}
            </Link>
          ))}
        </nav>

        <div className="text-yellow-500 flex items-center space-x-4">
          <button
            aria-label="Agendar Cita"
            className="hover:text-yellow-300 transition-colors duration-200"
            onClick={() => router.push('/Apartados/AgendarCitas')}
          >
            <Calendar className="h-6 w-6" />
          </button>
          <button aria-label="Search" className="hover:text-yellow-300 transition-colors duration-200">
            <Search className="h-6 w-6" />
          </button>
          <Menu />
        </div>
      </div>
    </header>
  );
}
