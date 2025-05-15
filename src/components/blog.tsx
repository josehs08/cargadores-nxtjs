"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Blog() {
  const articulos = [
    {
      titulo: "Nuevas estaciones de carga",
      resumen:
        "Conoce nuestras nuevas ubicaciones estratégicas para facilitar tu carga eléctrica.",
      imagen: "/blog-1-8b0fpQTU.webp?height=400&width=600",
      fecha: "15 de mayo, 2025",
      categoria: "Tendencias",
    },
    {
      titulo: "Tips para maximizar la carga",
      resumen:
        "Aprende cómo sacar el mayor provecho de nuestras estaciones de carga.",
      imagen: "/blog-2-CdwIwAPT.webp?height=400&width=600",
      fecha: "3 de mayo, 2025",
      categoria: "Guías",
    },
    {
      titulo: "Beneficios de un auto eléctrico",
      resumen:
        "Descubre por qué los vehículos eléctricos son el futuro de la movilidad.",
      imagen: "/blog-3-DtoDn5Uo.webp?height=400&width=600",
      fecha: "28 de abril, 2025",
      categoria: "Legislación",
    },
  ]

  return (
    <section id="blog" className="py-20 relative bg-gradient-to-b from-black to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Últimas Noticias y Artículos</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mantente informado sobre las últimas tendencias y avances en el mundo de la movilidad eléctrica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articulos.map((articulo, index) => (
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
                  src={articulo.imagen || "/placeholder.svg"}
                  alt={articulo.titulo}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {articulo.categoria}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-2">{articulo.fecha}</p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {articulo.titulo}
                </h3>
                <p className="text-gray-300 mb-4">{articulo.resumen}</p>
                <Button variant="link" className="text-blue-400 p-0 group-hover:text-blue-300">
                  Leer más →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#blog">
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-900/20">
              Ver Todos los Artículos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
