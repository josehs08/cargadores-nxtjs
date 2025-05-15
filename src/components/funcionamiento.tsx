"use client"

import { motion } from "framer-motion"

export default function Funcionamiento() {
  const pasos = [
    {
      step: "01",
      title: "Selecciona tu Ubicación",
      description: "Elige el lugar y la fecha para cargar tu vehículo.",
    },
    {
      step: "02",
      title: "Encuentra un Cargador",
      description: "Selecciona el cargador más cercano de nuestro catálogo.",
    },
    {
      step: "03",
      title: "Reserva tu Sesión",
      description: "Ingresa tus datos y confirma tu reserva fácilmente.",
    },
    {
      step: "04",
      title: "Disfruta de la Carga",
      description: "Carga tu vehículo y sigue tu camino con energía renovada.",
    },
  ]

  return (
    <section id="como-funciona" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Cómo Funciona</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Un proceso simple para mantener tu vehículo eléctrico siempre cargado y listo para usar.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {pasos.map((paso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center mb-4 border-4 border-black">
                  <span className="text-xl font-bold">{paso.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{paso.title}</h3>
                <p className="text-gray-400">{paso.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
