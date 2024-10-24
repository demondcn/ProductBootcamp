import React, { useState } from 'react';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="block md:hidden relative">
      {/* Botón que aparece solo en pantallas pequeñas */}
      <button 
        className="bg-transparent border border-white text-white hover:bg-white hover:text-black font-semibold py-2 px-4 rounded" 
        onClick={toggleMenu}
      >
        Menu
      </button>
      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="absolute top-12 right-0 bg-white z-50 shadow-lg w-48 rounded">
          <ul className="text-black py-2">
            <li>
                <a
                    href="/"
                    className="block w-full text-left py-2 px-4 rounded"
                    onClick={() => router.push('')}
                >
                    Inicio
                </a>
            </li>
            <li>
                <a
                    href="/Apartados/QuienesSomos"
                    className="block w-full text-left py-2 px-4 rounded"
                    onClick={() => router.push('/Apartados/QuienesSomos')}
                >Quiénes Somos
                </a>
            </li>
            <li>
                <a
                    href="/Apartados/Cursos"
                    className="block w-full text-left py-2 px-4 rounded"
                    onClick={() => router.push('/Apartados/Cursos')}
                >Cursos</a>
            </li>
            <li>
                <a href="/Apartados/QuienesSomos"
                    className="block w-full text-left py-2 px-4 rounded"
                    onClick={() => router.push('/Apartados/QuienesSomos')}
                >Campus</a>
            </li>
            <li>
                <a href="/Apartados/QuienesSomos"
                    className="block w-full text-left py-2 px-4 rounded"
                    onClick={() => router.push('/Apartados/QuienesSomos')}
                >Blog</a>
            </li>
            <li>
                <a href="#" className="block w-full text-left py-2 px-4 rounded">Contacto</a>                
            </li>
          </ul>
          <button 
            className="block w-full text-left bg-red-500 text-white py-2 px-4 rounded"
            onClick={toggleMenu}
          >
            Exit
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
