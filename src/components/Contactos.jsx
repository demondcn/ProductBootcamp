"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"

export default function Contactos() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900/10 to-black/10">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-yellow-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contáctanos
        </motion.h1>
        <motion.p 
          className="text-center text-yellow-800 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Estamos aquí para guiarte en tu camino hacia el bienestar holístico. 
          No dudes en contactarnos para cualquier consulta.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-900">Formulario de Contacto</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-yellow-900 mb-1">
                      Nombre
                    </label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="border-yellow-200 focus:border-yellow-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-yellow-900 mb-1">
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-yellow-200 focus:border-yellow-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-yellow-900 mb-1">
                      Mensaje
                    </label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="border-yellow-200 focus:border-yellow-500 min-h-[150px]"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-yellow-600 to-yellow-800 text-white border-none h-full">
              <CardHeader>
                <CardTitle className="text-white">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-yellow-200 mt-1" />
                    <div>
                      <h3 className="font-semibold text-yellow-200">Email</h3>
                      <p>info@khepriholistico.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="text-yellow-200 mt-1" />
                    <div>
                      <h3 className="font-semibold text-yellow-200">Teléfono</h3>
                      <p>+34 877 055 185</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-yellow-200 mt-1" />
                    <div>
                      <h3 className="font-semibold text-yellow-200">Ubicaciones</h3>
                      <div className="space-y-2">
                        <div>
                          <p className="font-medium">España:</p>
                          <p>C/ Amadeu Vives, 5, Bloque 1 - Bajo C</p>
                          <p>43481, La Pineda, Tarragona</p>
                        </div>
                        <div>
                          <p className="font-medium">Italia:</p>
                          <p>Via Isonzo, 67</p>
                          <p>40033, Casalecchio di Reno, Bologna</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-yellow-700/50 rounded-lg">
                  <h3 className="font-semibold text-yellow-200 mb-2">Horario de Atención</h3>
                  <p className="text-sm">Lunes a Viernes: 9:00 - 20:00</p>
                  <p className="text-sm">Sábados: 10:00 - 14:00</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}