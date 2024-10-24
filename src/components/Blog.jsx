import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    image: "/placeholder.svg?height=300&width=400",
    date: "11",
    month: "octubre",
    category: "PSICOLOGÍA",
    title: "¿Cómo afecta el otoño a las personas y la salud mental?"
  },
  {
    id: 2,
    image: "/placeholder.svg?height=300&width=400",
    date: "20",
    month: "septiembre",
    category: "PSICOLOGÍA",
    title: "¿Cuáles son los tipos de discapacidad sensorial?"
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=400",
    date: "06",
    month: "septiembre",
    category: "PSICOLOGÍA",
    title: "Técnicas para mejorar la autorregulación emocional"
  },
  // Add more blog posts as needed
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative h-64 md:h-96">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Man using laptop"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Blog</h1>
          <nav className="text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>{" "}
            &gt; Blog
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
                <div className="absolute top-0 right-0 bg-green-500 text-white rounded-bl-lg p-2">
                  <span className="block text-2xl font-bold leading-none">{post.date}</span>
                  <span className="text-xs">{post.month}</span>
                </div>
              </div>
              <div className="p-4">
                <span className="text-green-500 text-sm font-semibold">{post.category}</span>
                <h2 className="text-xl font-bold mt-2 mb-4">{post.title}</h2>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-green-500 hover:underline font-semibold"
                >
                  Ver más +
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
