import Image from 'next/image'
import Link from 'next/link'

export default function ComponentCourses() {
  return (
    <div className="flex">
      <main className="flex-grow bg-white p-8">
        <section className="justify-center items-center text-center md:px-16 md:py-32 py-28 lg:py-44 w-full flex">
          <div className='max-w-2xl'>
            <h2 className="text-xl font-semibold text-yellow-600 mb-4">OFERTA FORMATIVA</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-10 text-gray-800">Maestrías En Línea</h3>
            <p className="text-lg font-semibold text-gray-800 mb-4">Es importante recordar que, aunque estas terapias pueden ser beneficiosas, no reemplazan la atención médica convencional. Si estás considerando probar alguna terapia holística, asegúrate de consultar con un profesional de la salud calificado.</p>
          </div>
        </section>
      </main>
    </div>
  )
}