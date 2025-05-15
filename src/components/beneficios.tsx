"use client"

import { motion } from "framer-motion"
import { Zap, Clock, Globe, Shield } from "lucide-react"

export default function Beneficios() {
  const beneficios = [
    {
      icon: <Zap className="h-10 w-10 text-blue-500" />,
      title: "Eficiencia Energética",
      description: "Aprovecha al máximo cada kWh con nuestras estaciones de carga optimizadas.",
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-500" />,
      title: "Carga Rápida",
      description: "Minimiza el tiempo de espera con nuestra tecnología de carga ultrarrápida.",
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-500" />,
      title: "Sostenibilidad",
      description: "Reduce tu huella de carbono y contribuye a un futuro más limpio.",
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      title: "Seguridad Garantizada",
      description: "Sistemas de protección avanzados para tu vehículo y la red eléctrica.",
    },
  ]

  return (
    <section id="beneficios" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Beneficios de la Carga Eléctrica</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Descubre por qué cada vez más personas están cambiando a vehículos eléctricos y nuestras soluciones de
            carga.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="mb-4 p-3 bg-blue-900/20 rounded-lg inline-block group-hover:bg-blue-900/40 transition-colors">
                {beneficio.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{beneficio.title}</h3>
              <p className="text-gray-400">{beneficio.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">¿Sabías que?</h3>
            <p className="text-lg">
              Los vehículos eléctricos pueden reducir las emisiones de CO2 hasta en un 70% en comparación con los
              vehículos de combustión interna.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
