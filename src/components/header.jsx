import { ShoppingCart, Search } from "lucide-react"

export default function HeaderExx() {
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
            KHEPRY 
          </span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-300">Inicio</a>
          <a href="#" className="text-white hover:text-gray-300">Quiénes Somos </a>
          <a href="#" className="text-white hover:text-gray-300">Cursos</a>
          <a href="#" className="text-white hover:text-gray-300">Campus</a>
          <a href="#" className="text-white hover:text-gray-300">Blog</a>
          <a href="#" className="text-white hover:text-gray-300">Contacto</a>
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
  )
}