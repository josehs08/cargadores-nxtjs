"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Zap, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useScrollToSection } from "@/hooks/use-scroll-to-section"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const scrollToSection = useScrollToSection()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Zap className="h-8 w-8 text-blue-500" />
          </motion.div>
          <span className="text-xl font-bold">Renta Cargadores</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("beneficios")} className="hover:text-blue-400 transition-colors">
            Beneficios
          </button>
          <button onClick={() => scrollToSection("como-funciona")} className="hover:text-blue-400 transition-colors">
            Cómo Funciona
          </button>
          <button onClick={() => scrollToSection("testimonios")} className="hover:text-blue-400 transition-colors">
            Testimonios
          </button>
          <button onClick={() => scrollToSection("blog")} className="hover:text-blue-400 transition-colors">
            Blog
          </button>
          <button onClick={() => scrollToSection("contacto")} className="hover:text-blue-400 transition-colors">
            Contacto
          </button>
          <Button className="bg-blue-600 hover:bg-blue-700">Iniciar Sesión</Button>
        </nav>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => {
                scrollToSection("beneficios")
                setMobileMenuOpen(false)
              }}
              className="py-2 hover:text-blue-400 transition-colors text-left"
            >
              Beneficios
            </button>
            <button
              onClick={() => {
                scrollToSection("soluciones")
                setMobileMenuOpen(false)
              }}
              className="py-2 hover:text-blue-400 transition-colors text-left"
            >
              Soluciones
            </button>
            <button
              onClick={() => {
                scrollToSection("como-funciona")
                setMobileMenuOpen(false)
              }}
              className="py-2 hover:text-blue-400 transition-colors text-left"
            >
              Cómo Funciona
            </button>
            <button
              onClick={() => {
                scrollToSection("testimonios")
                setMobileMenuOpen(false)
              }}
              className="py-2 hover:text-blue-400 transition-colors text-left"
            >
              Testimonios
            </button>
            <button
              onClick={() => {
                scrollToSection("blog")
                setMobileMenuOpen(false)
              }}
              className="py-2 hover:text-blue-400 transition-colors text-left"
            >
              Blog
            </button>
            <button
              onClick={() => {
                scrollToSection("contacto")
                setMobileMenuOpen(false)
              }}
              className="py-2 hover:text-blue-400 transition-colors text-left"
            >
              Contacto
            </button>
            <Button className="bg-blue-600 hover:bg-blue-700 w-full">Iniciar Sesión</Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
