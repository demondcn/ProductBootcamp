import Image from "next/image"
import Link from "next/link"
import { Play} from "lucide-react"
import PaymentButtons from "./Mediopago"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            {/* <Image
              src=""
              alt="ESCUELA EUROPEA DE TERAPIAS NATURALES Y BIENESTAR"
              width={300}
              height={100}
              className="mb-6"
            /> */}
            <h1 className="text-white text-2xl font-semibold mb-2">KHEPRI</h1>
            <h3 className="text-green-400 font-semibold mb-2">Dirección España:</h3>
            <p>C/ Amadeu Vives, 5,</p>
            <p>Bloque 1 - Bajo C</p>
            <p>43481, La Pineda, Tarragona</p>
            
            <h3 className="text-green-400 font-semibold mt-4 mb-2">Dirección Italia:</h3>
            <p>Via Isonzo, 67</p>
            <p>40033, Casalecchio di Reno,</p>
            <p>Bologna</p>
            
            <h3 className="text-green-400 font-semibold mt-4 mb-2">Email:</h3>
            <p>ejemplo@escuelaemail.com</p>
            
            <h3 className="text-green-400 font-semibold mt-4 mb-2">Teléfono:</h3>
            <p>+34 877 055 185</p>
            
            <div className="flex space-x-4 mt-6">
              <Link href="#" aria-label="WhatsApp"><Play className="h-6 w-6" /></Link>
              <Link href="#" aria-label="Twitter"><Play className="h-6 w-6" /></Link>
              <Link href="#" aria-label="Facebook"><Play className="h-6 w-6" /></Link>
              <Link href="#" aria-label="Instagram"><Play className="h-6 w-6" /></Link>
              <Link href="#" aria-label="YouTube"><Play className="h-6 w-6" /></Link>
              <Link href="#" aria-label="LinkedIn"><Play className="h-6 w-6" /></Link>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Acreditaciones</h2>
            {/* <div className="grid grid-cols-3 gap-4">
              <Image src="/placeholder.svg?height=50&width=50" alt="Acreditación 1" width={50} height={50} />
              <Image src="/placeholder.svg?height=50&width=50" alt="Acreditación 2" width={50} height={50} />
              <Image src="/placeholder.svg?height=50&width=50" alt="Acreditación 3" width={50} height={50} />
              <Image src="/placeholder.svg?height=50&width=50" alt="Acreditación 4" width={50} height={50} />
              <Image src="/placeholder.svg?height=50&width=50" alt="Acreditación 5" width={50} height={50} />
            </div> */}
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Tipos de pago:</h2>
            <PaymentButtons />
          </div>
        </div>
      </div>
    </footer>
  )
}