import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Compass, List } from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function QuienesSomos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900/10 to-black/10 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-4">
            Quiénes Somos
          </h1>
          <p className="text-lg text-yellow-800 max-w-2xl mx-auto">
            En Khepri Holístico, nos dedicamos a guiar a las personas en su viaje hacia el bienestar integral, 
            combinando la sabiduría antigua con prácticas modernas de sanación.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid gap-8 md:grid-cols-2"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Card  className="bg-white/80 backdrop-blur-sm border-yellow-200 h-full">
              <CardHeader className="flex flex-row items-center space-x-4">
                <Target className="w-8 h-8 text-yellow-600" />
                <CardTitle className="text-2xl text-yellow-900">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-800">
                  Nuestro centro se compromete a brindar un espacio sagrado para la restauración y crecimiento 
                  espiritual, emocional y mental, mediante la integración de prácticas holísticas y terapias 
                  innovadoras, apoyando a individuos y comunidades en su búsqueda de bienestar, paz y propósito.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="bg-white/80 backdrop-blur-sm border-yellow-200 h-full">
              <CardHeader className="flex flex-row items-center space-x-4">
                <Eye className="w-8 h-8 text-yellow-600" />
                <CardTitle className="text-2xl text-yellow-900">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-800">
                  Ser un referente en restauración espiritual y psicología holística, reconocido por su 
                  excelencia y compromiso con la transformación personal y colectiva, contribuyendo a una 
                  sociedad más consciente, compasiva y conectada.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="bg-white/80 backdrop-blur-sm border-yellow-200 h-full">
              <CardHeader className="flex flex-row items-center space-x-4">
                <Compass className="w-8 h-8 text-yellow-600" />
                <CardTitle className="text-2xl text-yellow-900">Objetivo General</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-800">
                  Ofrecer programas y servicios integrados de restauración espiritual y psicología holística 
                  que promuevan la sanación, el crecimiento y el bienestar integral de las personas.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="bg-white/80 backdrop-blur-sm border-yellow-200 h-full">
              <CardHeader className="flex flex-row items-center space-x-4">
                <List className="w-8 h-8 text-yellow-600" />
                <CardTitle className="text-2xl text-yellow-900">Objetivos Específicos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-yellow-800">
                  <li className="flex items-start">
                    <span className="block w-2 h-2 mt-2 mr-2 rounded-full bg-yellow-600" />
                    Proporcionar un entorno seguro y acogedor para la exploración espiritual y emocional.
                  </li>
                  <li className="flex items-start">
                    <span className="block w-2 h-2 mt-2 mr-2 rounded-full bg-yellow-600" />
                    Desarrollar y ofrecer programas de terapia individual y grupal en psicología holística.
                  </li>
                  <li className="flex items-start">
                    <span className="block w-2 h-2 mt-2 mr-2 rounded-full bg-yellow-600" />
                    Fomentar la conexión con la naturaleza y la espiritualidad a través de diversas prácticas.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}