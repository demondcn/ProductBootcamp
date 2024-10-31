import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    image: "/image1.jpg?height=400&width=600",
    date: "11",
    month: "octubre",
    category: "PSICOLOGÍA",
    title: "¿Cómo afecta el otoño a las personas y la salud mental?",
    excerpt: "Descubre cómo los cambios estacionales influyen en nuestro bienestar emocional y mental."
  },
  {
    id: 2,
    image: "/image2.jpg?height=400&width=600",
    date: "20",
    month: "septiembre",
    category: "PSICOLOGÍA",
    title: "¿Cuáles son los tipos de discapacidad sensorial?",
    excerpt: "Una guía completa sobre los diferentes tipos de discapacidad sensorial y su impacto."
  },
  {
    id: 3,
    image: "/image3.jpg?height=400&width=600",
    date: "06",
    month: "septiembre",
    category: "PSICOLOGÍA",
    title: "Técnicas para mejorar la autorregulación emocional",
    excerpt: "Aprende estrategias efectivas para gestionar tus emociones y mantener el equilibrio."
  }
]

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

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-900/10 to-black/10">
      <header className="relative h-[40vh] min-h-[400px]">
        <Image
          src="/image5.jpeg?height=800&width=1200"
          alt="Meditación y bienestar"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog de Bienestar Holístico
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-yellow-200 max-w-2xl text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Explora nuestros artículos sobre psicología, espiritualidad y desarrollo personal
          </motion.p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={item}
            >
              <div className="relative h-64">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  layout="fill" 
                  objectFit="cover" 
                />
                <div className="absolute top-4 right-4 bg-yellow-600 text-white rounded-lg p-2 shadow-md">
                  <Calendar className="w-4 h-4 mb-1 mx-auto" />
                  <span className="block text-xl font-bold leading-none text-center">{post.date}</span>
                  <span className="text-xs uppercase">{post.month}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-yellow-600 text-sm font-semibold tracking-wider">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold mt-2 mb-3 text-yellow-900">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold transition-colors"
                >
                  Leer más 
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </main>
    </div>
  )
}