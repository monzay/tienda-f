"use client"

import { useState } from 'react'
import {  Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'


const page = () => {
  const [activeTab, setActiveTab] = useState('madrid')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000) // Oculta el mensaje después de 5 segundos
  }

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-black">
            Contacta con TecnoVanguardia
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mt-4">Estamos aquí para ayudarte</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <div className="p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Formulario de Contacto</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input id="nombre" type="text" placeholder="Tu nombre" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input id="email" type="email" placeholder="tu@email.com" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200" required />
                </div>
                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                  <input id="asunto" type="text" placeholder="Asunto de tu mensaje" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200" required />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea id="mensaje" placeholder="Tu mensaje" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200" required></textarea>
                </div>
                <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150 ease-in-out flex items-center justify-center">
                  <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
                </button>
              </form>
              {formSubmitted && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Información de Contacto</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-600" />
                    <span>900 123 456 (Gratuito)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-600" />
                    <span>soporte@tecnovanguardia.es</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-600" />
                    <span>Lun-Vie: 9AM-8PM, Sáb: 10AM-6PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default page