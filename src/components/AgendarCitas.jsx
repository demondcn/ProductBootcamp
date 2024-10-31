"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarDays, Home, User } from "lucide-react";

const therapies = [
  "Acupuntura",
  "Aromaterapia",
  "Meditación y Yoga",
  "Terapia de masajes",
  "Terapia nutricional",
  "Homeopatía",
  "Terapias florales de Bach"
];

const retreatVenues = [
  { name: "Casa de la Serenidad", location: "Montañas de los Pirineos", capacity: 20 },
  { name: "Oasis del Desierto", location: "Desierto de Tabernas, Almería", capacity: 15 },
  { name: "Refugio del Bosque", location: "Selva de Irati, Navarra", capacity: 25 },
  { name: "Villa Mediterránea", location: "Costa Brava, Cataluña", capacity: 30 }
];

export default function SchedulingComponent() {
  const [date, setDate] = useState(new Date());
  const [selectedTherapy, setSelectedTherapy] = useState("");
  const [selectedVenue, setSelectedVenue] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900/10 to-black/10 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-yellow-900 mb-4">Agenda tu Camino hacia el Bienestar</h1>
        <p className="text-xl text-yellow-800">
          Reserva tu sesión de terapia holística o un retiro espiritual transformador
        </p>
      </motion.div>

      <Tabs defaultValue="appointment" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="appointment">Cita Holística</TabsTrigger>
          <TabsTrigger value="retreat">Retiro Espiritual</TabsTrigger>
        </TabsList>
        <TabsContent value="appointment">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-900">Agenda tu Cita Holística</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="therapy">Selecciona una Terapia</Label>
                  <Select onValueChange={setSelectedTherapy}>
                    <SelectTrigger id="therapy">
                      <SelectValue placeholder="Elige una terapia" />
                    </SelectTrigger>
                    <SelectContent>
                      {therapies.map((therapy) => (
                        <SelectItem key={therapy} value={therapy}>
                          {therapy}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Selecciona una Fecha</Label>
                  <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                </div>
              </div>
              <Button className="w-full mt-6 bg-yellow-600 hover:bg-yellow-700 text-white">
                Reservar Cita
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="retreat">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-900">Reserva tu Retiro Espiritual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="venue">Selecciona un Lugar</Label>
                  <Select onValueChange={setSelectedVenue}>
                    <SelectTrigger id="venue">
                      <SelectValue placeholder="Elige un lugar para el retiro" />
                    </SelectTrigger>
                    <SelectContent>
                      {retreatVenues.map((venue) => (
                        <SelectItem key={venue.name} value={venue.name}>
                          {venue.name} - {venue.location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Selecciona Fechas</Label>
                  <Calendar mode="range" className="rounded-md border" />
                </div>
              </div>
              <div className="grid gap-4 mt-6">
                <div>
                  <Label htmlFor="participants">Número de Participantes</Label>
                  <Input id="participants" type="number" min="1" placeholder="Ingresa el número de participantes" />
                </div>
                <div>
                  <Label htmlFor="special-requests">Solicitudes Especiales</Label>
                  <Input id="special-requests" placeholder="Alguna solicitud especial para tu retiro" />
                </div>
              </div>
              <Button className="w-full mt-6 bg-yellow-600 hover:bg-yellow-700 text-white">
                Reservar Retiro
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="max-w-4xl mx-auto mt-12 grid gap-6 sm:grid-cols-3"
      >
        <Card>
          <CardContent className="flex flex-col items-center text-center pt-6">
            <CalendarDays className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">Flexibilidad</h3>
            <p className="text-yellow-800">Elige la fecha y hora que mejor se adapte a tu agenda</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center text-center pt-6">
            <User className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">Personalización</h3>
            <p className="text-yellow-800">Terapias y retiros adaptados a tus necesidades específicas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center text-center pt-6">
            <Home className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">Ambientes Serenos</h3>
            <p className="text-yellow-800">Espacios cuidadosamente seleccionados para tu bienestar</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
