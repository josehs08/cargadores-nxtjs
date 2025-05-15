"use client"

import { useCallback } from "react"

export function useScrollToSection() {
  const scrollToSection = useCallback((elementId: string) => {
    // Prevenir el comportamiento predeterminado del navegador
    const element = document.getElementById(elementId)
    if (!element) return

    // Obtener la altura del navbar (asumiendo que tiene una clase o ID específico)
    const navbar = document.querySelector("header")
    const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0

    // Calcular la posición de desplazamiento con un offset para el navbar
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - navbarHeight - 20 // 20px de espacio adicional

    // Realizar el desplazamiento suave
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }, [])

  return scrollToSection
}
