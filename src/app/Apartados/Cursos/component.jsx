import Image from 'next/image'
import { Star } from 'lucide-react'

// Importa las imágenes necesarias
const Acupuntura = require('@/../public/img/img-1.jpg')
const Aromaterapia = require('@/../public/img/img-2.jpg')
const MeditacionYoga = require('@/../public/img/img-3.jpg')
const TerapiaMasajes = require('@/../public/img/img-4.jpg')
const TerapiaNutricional = require('@/../public/img/img-5.jpg')
const Homeopatia = require('@/../public/img/img-6.jpg')
const TerapiasBach = require('@/../public/img/img-7.webp')

// Datos del programa
const programs = [
  {
    category: 'TERAPIA',
    title: 'Acupuntura',
    description: 'una técnica que busca equilibrar el flujo de energía en el cuerpo mediante la inserción de agujas en puntos específicos.',
    image: Acupuntura,
    rating: 0,
    price: 744
  },
  {
    category: 'TERAPIA',
    title: 'Aromaterapia',
    description: 'utiliza aceites esenciales para promover la relajación y el bienestar.',
    image: Aromaterapia,
    rating: 0,
    price: 744
  },
  {
    category: 'TERAPIA',
    title: 'Meditacion y Yoga',
    description: 'prácticas que ayudan a calmar la mente y equilibrar el cuerpo.',
    image: MeditacionYoga,
    rating: 0,
    price: 744
  },
  {
    category: 'TERAPIA',
    title: 'Terapia de masajes',
    description: 'técnicas de masaje para aliviar el estrés y la tensión muscular',
    image: TerapiaMasajes,
    rating: 4,
    price: 744
  },
  {
    category: 'TERAPIA',
    title: 'Terapia nutricional',
    description: 'enfoque en la alimentación saludable para promover el bienestar físico y emocional ',
    image: TerapiaNutricional,
    rating: 4,
    price: 744
  },
  {
    category: 'TERAPIA',
    title: 'Homeopatia',
    description: 'utiliza sustancias naturales para tratar diversas afecciones.',
    image: Homeopatia,
    rating: 4,
    price: 744
  },
  {
    category: 'TERAPIA',
    title: 'Terapias florales de Bach',
    description: 'utiliza esencias florales para equilibrar las emociones y el espíritu.',
    image: TerapiasBach,
    rating: 4,
    price: 744
  }
]

export default function CombinedComponent() {
  return (
    <div className="flex flex-col items-center">
      {/* Sección de ComponentCourses - Removidos los paddings excesivos */}
      <main className="w-full text-center bg-white px-4 py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-yellow-600 mb-4">OFERTA FORMATIVA</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-10 text-gray-800">Maestrías En Línea</h3>
          <p className="text-lg font-semibold text-gray-800">
            Es importante recordar que, aunque estas terapias pueden ser beneficiosas, no reemplazan la atención médica convencional. Si estás considerando probar alguna terapia holística, asegúrate de consultar con un profesional de la salud calificado.
          </p>
        </div>
      </main>

      {/* Sección de ComponentItems */}
      <div className="grid grid-cols-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {programs.map((program, index) => (
          <div key={index} className="bg-white rounded-lg flex flex-col overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image
                src={program.image}
                alt={program.title}
                layout="fill"
                objectFit="cover"
              />
              <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                {program.category}
              </span>
            </div>
            <div className="p-4 flex justify-between grow flex-col">
              <div>
                <h3 className="font-bold text-lg mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{program.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < program.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-1 text-sm text-gray-600">{program.rating}</span>
                </div>
                <span className="bg-green-500 text-white text-sm font-bold px-2 py-1 rounded">
                  {program.price}$
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}