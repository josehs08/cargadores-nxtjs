"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Zap, CheckCircle } from "lucide-react"

export default function Registro() {
  const planes = [
    {
      nombre: "Básico",
      precio: "Gratis",
      descripcion: "Ideal para usuarios particulares con un solo vehículo eléctrico.",
      caracteristicas: [
        "Acceso a la red de cargadores",
        "Localización de estaciones",
        "Historial de cargas",
        "Soporte por email",
      ],
      destacado: false,
    },
    {
      nombre: "Premium",
      precio: "9,99€/mes",
      descripcion: "Perfecto para conductores frecuentes que buscan más comodidad y ahorro.",
      caracteristicas: [
        "Todo lo del plan Básico",
        "Reserva de estaciones",
        "Tarifas reducidas",
        "Prioridad en horas pico",
        "Soporte prioritario 24/7",
      ],
      destacado: true,
    },
    {
      nombre: "Empresas",
      precio: "Personalizado",
      descripcion: "Solución completa para flotas y negocios con múltiples vehículos.",
      caracteristicas: [
        "Todo lo del plan Premium",
        "Gestión de múltiples vehículos",
        "Panel de administración",
        "Facturación centralizada",
        "Gestor de cuenta dedicado",
      ],
      destacado: false,
    },
  ]

  return (
    <section id="registro" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Elige Tu Plan</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ofrecemos diferentes opciones para adaptarnos a tus necesidades de carga y presupuesto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {planes.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-xl p-6 border transition-all ${
                plan.destacado
                  ? "bg-gradient-to-b from-blue-900/50 to-slate-900/50 border-blue-500 shadow-lg shadow-blue-500/20"
                  : "bg-slate-800/30 border-slate-700 hover:border-blue-500/50"
              }`}
            >
              {plan.destacado && (
                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Más Popular
                </div>
              )}
              <div className="flex items-center gap-2 mb-2">
                <Zap className={`h-5 w-5 ${plan.destacado ? "text-blue-400" : "text-blue-500"}`} />
                <h3 className="text-xl font-bold">{plan.nombre}</h3>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.precio}</span>
              </div>
              <p className="text-gray-400 mb-6">{plan.descripcion}</p>
              <ul className="space-y-3 mb-6">
                {plan.caracteristicas.map((caracteristica, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                    <span>{caracteristica}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.destacado ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-700 hover:bg-slate-600"
                }`}
              >
                {plan.nombre === "Empresas" ? "Contactar" : "Registrarse"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
