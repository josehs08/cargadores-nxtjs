"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useScrollToSection } from "@/hooks/use-scroll-to-section"

export default function Hero() {
  const scrollToSection = useScrollToSection()

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-black/80 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/imagen-fondo-cvW1uoM6.webp?height=1080&width=1920')] bg-cover bg-center opacity-30"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.1,
                scale: Math.random() * 0.5 + 0.1,
              }}
              animate={{
                y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
                x: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                width: Math.random() * 10 + 2 + "px",
                height: Math.random() * 10 + 2 + "px",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-20 pt-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              El Futuro de la <span className="text-blue-500">Movilidad Eléctrica</span> Está Aquí
            </h1>
            <p className="text-xl text-gray-300">
              Soluciones de carga inteligentes y eficientes para vehículos eléctricos. Conectando el presente con un
              futuro sostenible.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-6 py-6">Descubrir Soluciones</Button>
              <Button
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-900/20 text-lg px-6 py-6"
                onClick={() => scrollToSection("como-funciona")}
              >
                Cómo Funciona
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full">
              <Image
                src="/pexels-photo-9800009.webp?height=800&width=800"
                alt="Estación de carga de vehículo eléctrico"
                fill
                className="object-contain rounded shadow-lg"
                priority
              />

              {/* Animated charging indicator */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-blue-500/20"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-500/30"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.3, 0.6] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.3 }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500/50"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.4, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.6 }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-gray-400 mb-2">Descubre más</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-blue-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
