import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function QuienesSomos() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Quiénes Somos</h2>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Nuestro centro se compromete a brindar un espacio sagrado para la restauración y crecimiento espiritual, emocional y mental, mediante la integración de prácticas holísticas y terapias innovadoras, apoyando a individuos y comunidades en su búsqueda de bienestar, paz y propósito.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Ser un referente en restauración espiritual y psicología holística, reconocido por su excelencia y compromiso con la transformación personal y colectiva, contribuyendo a una sociedad más consciente, compasiva y conectada.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Objetivo General</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Ofrecer programas y servicios integrados de restauración espiritual y psicología holística que promuevan la sanación, el crecimiento y el bienestar integral de las personas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Objetivos Específicos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Proporcionar un entorno seguro y acogedor para la exploración espiritual y emocional.</li>
                <li>Desarrollar y ofrecer programas de terapia individual y grupal en psicología holística.</li>
                <li>Fomentar la conexión con la naturaleza y la espiritualidad a través de diversas prácticas y actividades.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}