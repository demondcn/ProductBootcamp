import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Phone, Mail, MapPin } from "lucide-react"
import PaymentButtons from "./Mediopago"

export default function Footer() {
  const Iconokhepri = require('@/../public/img/logo.png')
  return (
    <footer className="bg-gradient-to-b from-black to-yellow-900 text-yellow-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src={Iconokhepri}
                alt="Khepri Logo"
                width={50}
                height={50}
              />
              <h1 className="text-yellow-500 text-3xl font-bold">KHEPRI</h1>
            </div>
            <p className="text-sm italic">Centro de Restauración Psicología Holística</p>
            
            <div className="space-y-2">
              <h3 className="text-yellow-400 font-semibold">Dirección España:</h3>
              <p className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> C/ Amadeu Vives, 5, Bloque 1 - Bajo C, 43481, La Pineda, Tarragona</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-yellow-400 font-semibold">Dirección Italia:</h3>
              <p className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Via Isonzo, 67, 40033, Casalecchio di Reno, Bologna</p>
            </div>
            
            <p className="flex items-center"><Mail className="h-4 w-4 mr-2" /> ejemplo@escuelaemail.com</p>
            <p className="flex items-center"><Phone className="h-4 w-4 mr-2" /> +34 877 055 185</p>
            
            <div className="flex space-x-4 mt-6">
              <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 text-yellow-500 hover:text-yellow-300 transition-colors" /></Link>
              <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-yellow-500 hover:text-yellow-300 transition-colors" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 text-yellow-500 hover:text-yellow-300 transition-colors" /></Link>
              <Link href="#" aria-label="YouTube"><Youtube className="h-6 w-6 text-yellow-500 hover:text-yellow-300 transition-colors" /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-yellow-500 hover:text-yellow-300 transition-colors" /></Link>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 text-yellow-500">Acreditaciones</h2>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-yellow-800 p-2 rounded-lg shadow-md hover:bg-yellow-700 transition-colors">
                  <Image src={`/accreditation-${i}.png`} alt={`Acreditación ${i}`} width={50} height={50} className="mx-auto" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 text-yellow-500">Tipos de pago:</h2>
            <PaymentButtons />
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-yellow-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Khepri Holístico. Todos los derechos reservados.</p>
          <div className="mt-2 space-x-4">
            <Link href="/politica-privacidad" className="text-yellow-400 hover:text-yellow-300 transition-colors">Política de Privacidad</Link>
            <Link href="/terminos-condiciones" className="text-yellow-400 hover:text-yellow-300 transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}