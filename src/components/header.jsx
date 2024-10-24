import React from "react";

export default function headerExx() {
    return (
        <div>
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-700 hover:text-gray-900">Inicio</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Quiénes Somos +</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Maestrías En Línea</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Campus</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Contacto</a>
                    </nav>
                </div>
            </header>
        </div>
    )
}