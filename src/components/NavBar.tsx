"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-black/50 backdrop-blur-md border-b border-gray-700/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Singularity Voices
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
          <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
          <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
        </div>

        {/* Right Button */}
        <div className="hidden md:block">
          <Button
            size="sm"
            className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  )
}