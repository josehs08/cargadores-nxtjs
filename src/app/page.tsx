"use client"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Beneficios from "@/components/beneficios"
import Soluciones from "@/components/soluciones"
import Funcionamiento from "@/components/funcionamiento"
import CTA from "@/components/cta"
import Contacto from "@/components/contacto"
import Footer from "@/components/footer"
import Testimonios from "@/components/testimonios"
import Blog from "@/components/blog"
import Registro from "@/components/registro"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Beneficios />
      <Funcionamiento />
      <Testimonios />
      <Blog />
      <CTA />
      <Registro />
      <Contacto />
      <Footer />
    </div>
  )
}
