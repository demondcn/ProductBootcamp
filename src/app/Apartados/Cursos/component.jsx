"use client"

import Image from 'next/image'
import { Star, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
    description: 'Una técnica que busca equilibrar el flujo de energía en el cuerpo mediante la inserción de agujas en puntos específicos.',
    image: Acupuntura,
    rating: 5,
    price: 744
  },
  {
    category: 'TERAPIA',
    title: 'Aromaterapia',
    description: 'Utiliza aceites esenciales para promover la relajación y el bienestar.',
    image: Aromaterapia,
    rating: 4,
    price: 744
  },
  {
    category: 'TERAPIA',
    title: 'Meditación y Yoga',
    description: 'Prácticas que ayudan a calmar la mente y equilibrar el cuerpo.',
    image: MeditacionYoga,
    rating: 5,
    price: 744
  },
  {
    category: 'TERAPIA',
    title: 'Terapia de masajes',
    description: 'Técnicas de masaje para aliviar el estrés y la tensión muscular.',
    image: TerapiaMasajes,
    rating: 4,
    price: 744
  },
  {
    category: 'TERAPIA',
    title: 'Terapia nutricional',
    description: 'Enfoque en la alimentación saludable para promover el bienestar físico y emocional.',
    image: TerapiaNutricional,
    rating: 4,
    price: 744
  },
  {
    category: 'TERAPIA',
    title: 'Homeopatía',
    description: 'Utiliza sustancias naturales para tratar diversas afecciones.',
    image: Homeopatia,
    rating: 4,
    price: 744
  },
  {
    category: 'TERAPIA',
    title: 'Terapias florales de Bach',
    description: 'Utiliza esencias florales para equilibrar las emociones y el espíritu.',
    image: TerapiasBach,
    rating: 4,
    price: 744
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function CursosComponent() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-yellow-900/10 to-black/10 min-h-screen">
      {/* Sección de ComponentCourses */}
      <section className="w-full text-center px-4 py-16 md:py-24">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-yellow-600 mb-4">OFERTA FORMATIVA</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-900">Maestrías En Línea</h3>
          <p className="text-lg text-yellow-800 mb-12">
            Descubre nuestras terapias holísticas diseñadas para equilibrar cuerpo, mente y espíritu. 
            Aunque beneficiosas, recuerda que estas terapias complementan, no reemplazan, la atención médica convencional. 
            Consulta siempre con un profesional de la salud calificado.
          </p>
          <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
            Explorar Cursos <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>

      {/* Sección de ComponentItems */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {programs.map((program, index) => (
          <motion.div key={index} variants={item}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={program.image}
                  alt={program.title}
                  layout="fill"
                  objectFit="cover"
                />
                <span className="absolute top-2 left-2 bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {program.category}
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-yellow-900">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-yellow-800 mb-4">{program.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < program.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-1 text-sm text-yellow-800">{program.rating}</span>
                  </div>
                  <span className="bg-yellow-600 text-white text-sm font-bold px-2 py-1 rounded">
                    {program.price}$
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}