"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonios() {
  const testimonios = [
    {
      nombre: "Carlos Rodríguez",
      cargo: "Propietario de Tesla Model 3",
      texto:
        "Desde que instalé el cargador residencial de ElectroCharge, cargar mi vehículo es mucho más conveniente. La aplicación me permite programar las cargas durante las horas de menor tarifa eléctrica.",
      avatar: "/public.png?height=100&width=100",
      estrellas: 5,
    },
    {
      nombre: "María González",
      cargo: "Gerente de Flota, Empresa de Logística",
      texto:
        "Implementamos las estaciones de carga comerciales en nuestro centro de distribución y hemos reducido significativamente nuestros costos operativos y huella de carbono.",
      avatar: "/public.png?height=100&width=100",
      estrellas: 5,
    },
    {
      nombre: "Javier Méndez",
      cargo: "Viajero Frecuente",
      texto:
        "Los supercargadores ubicados en las principales rutas me han permitido realizar viajes largos sin preocupaciones. La carga es rápida y la aplicación me muestra siempre la ruta óptima.",
      avatar: "/public.png?height=100&width=100",
      estrellas: 4,
    },
  ]

  return (
    <section id="testimonios" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experiencias reales de usuarios que han transformado su movilidad con nuestras soluciones de carga.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonio.avatar || "/public.png"}
                    alt={testimonio.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonio.nombre}</h3>
                  <p className="text-gray-400 text-sm">{testimonio.cargo}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonio.estrellas ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}`}
                  />
                ))}
              </div>
              <p className="text-gray-300">{testimonio.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
