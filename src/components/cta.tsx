"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CTA() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-900 to-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-blue-500/20"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  x: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
                  y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
                }}
                transition={{
                  duration: Math.random() * 20 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  width: Math.random() * 200 + 50 + "px",
                  height: Math.random() * 200 + 50 + "px",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Únete a la Revolución de la Movilidad Eléctrica</h2>
              <p className="text-xl text-gray-300 mb-6">
                Mantente informado sobre nuestras últimas innovaciones, ubicaciones de estaciones y ofertas especiales.
              </p>
              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="flex-1 px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3">Suscribirse</Button>
                </div>
                <p className="text-sm text-gray-400">
                  Al suscribirte, aceptas nuestra política de privacidad y términos de servicio.
                </p>
              </form>
            </div>
            <div className="relative h-[300px] hidden md:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Aplicación móvil de ElectroCharge"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
