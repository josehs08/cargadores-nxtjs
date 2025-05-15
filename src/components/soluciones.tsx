"use client"

import { motion } from "framer-motion"
import { Home, Building2, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Soluciones() {
  const soluciones = [
    {
      icon: <Home className="h-10 w-10 text-blue-500" />,
      title: "Carga Residencial",
      description:
        "Soluciones perfectas para cargar tu vehículo eléctrico en casa, con instalación sencilla y monitoreo inteligente.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: <Building2 className="h-10 w-10 text-blue-500" />,
      title: "Carga Comercial",
      description:
        "Estaciones de carga para empresas, centros comerciales y estacionamientos públicos con gestión de usuarios.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: <MapPin className="h-10 w-10 text-blue-500" />,
      title: "Supercargadores",
      description:
        "Estaciones de carga ultrarrápida para viajes de larga distancia, ubicadas estratégicamente en rutas principales.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="soluciones" className="py-20 relative bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nuestras Soluciones de Carga</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ofrecemos una gama completa de soluciones adaptadas a diferentes necesidades y entornos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {soluciones.map((solucion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-blue-500/10 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={solucion.image || "/placeholder.svg"}
                  alt={solucion.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="p-2 bg-blue-500 rounded-lg">{solucion.icon}</div>
                  <h3 className="text-xl font-bold">{solucion.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300">{solucion.description}</p>
                <Button variant="link" className="text-blue-400 p-0 mt-4 group-hover:text-blue-300">
                  Más información →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
