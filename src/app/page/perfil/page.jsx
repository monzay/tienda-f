'use client'
import Image from 'next/image'
import {  Settings, Package, MapPin, X } from 'lucide-react'
import { useState } from 'react'

// Componente para el perfil del usuario
function PerfilUsuario({ usuario, onEditClick }) {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-8">
      <div className="px-6 py-8">
        <div className="flex items-center space-x-6">
         {
          /*
           <img
            src={false}
            alt={false}
            width={80}
            height={80}
            className="rounded-full"
          />
          */
         }
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{usuario.nombre}</h2>
            <p className="text-gray-600 text-sm">{usuario.email}</p>
            <p className="text-gray-500 text-xs mt-1">Miembro desde {usuario.fechaRegistro}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 px-6 py-4 bg-gray-50 flex justify-end">
        <button 
          onClick={onEditClick}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <Settings className="h-4 w-4 mr-2" />
          Editar Perfil
        </button>
      </div>
    </div>
  )
}

// Componente para las compras recientes
function ComprasRecientes({ compras }) {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-8">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-xl font-medium text-gray-800 flex items-center">
          <Package className="h-5 w-5 mr-2" />
          Mis Compras Recientes
        </h3>
      </div>
      <div className="divide-y divide-gray-200">
        {compras.map((compra) => (
          <div key={compra.id} className="px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
              {
          /*
           <img
            src={false}
            alt={false}
            width={80}
            height={80}
            className="rounded-full"
          />
          */
         }
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800">{compra.producto}</h4>
                <p className="text-sm text-gray-600">Fecha: {compra.fecha}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-medium text-gray-800">{compra.precio.toFixed(2)} €</p>
              <p className="text-sm text-gray-600">{compra.estado}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Componente para las direcciones
function Direcciones({ direcciones, onAddClick }) {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-xl font-medium text-gray-800 flex items-center">
          <MapPin className="h-5 w-5 mr-2" />
          Mis Direcciones
        </h3>
      </div>
      <div className="divide-y divide-gray-200">
        {direcciones.map((direccion) => (
          <div key={direccion.id} className="px-6 py-4">
            <h4 className="text-lg font-medium text-gray-800">{direccion.tipo}</h4>
            <p className="text-gray-600">{direccion.direccion}</p>
            <p className="text-gray-600">CP: {direccion.codigoPostal}</p>
          </div>
        ))}
      </div>
      <div className="px-6 py-4 bg-gray-50">
        <button 
          onClick={onAddClick}
          className="w-full px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Agregar Nueva Dirección
        </button>
      </div>
    </div>
  )
}

function ModalDireccion({ isOpen, onClose, nuevaDireccion, errores, onChange, onSubmit }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Agregar Nueva Direc ción</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">Tipo de Dirección</label>
            <input
              type="text"
              id="tipo"
              name="tipo"
              value={nuevaDireccion.tipo}
              onChange={onChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
              required
            />
            {errores.tipo && <p className="mt-1 text-sm text-red-600">{errores.tipo}</p>}
          </div>
          <div>
            <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">Dirección</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={nuevaDireccion.direccion}
              onChange={onChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
              required
            />
            {errores.direccion && <p className="mt-1 text-sm text-red-600">{errores.direccion}</p>}
          </div>
          <div>
            <label htmlFor="codigoPostal" className="block text-sm font-medium text-gray-700">Código Postal</label>
            <input
              type="text"
              id="codigoPostal"
              name="codigoPostal"
              value={nuevaDireccion.codigoPostal}
              onChange={onChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
              required
            />
            {errores.codigoPostal && <p className="mt-1 text-sm text-red-600">{errores.codigoPostal}</p>}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm"
            >
              Guardar Dirección
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
// Componente para el modal de edición de perfil
function ModalEditarPerfil({ isOpen, onClose, usuario, errores, onChange, onSubmit }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Editar Perfil</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={usuario.nombre}
              onChange={onChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
              required
            />
            {errores.nombre && <p className="mt-1 text-sm text-red-600">{errores.nombre}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={usuario.email}
              onChange={onChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
              required
            />
            {errores.email && <p className="mt-1 text-sm text-red-600">{errores.email}</p>}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Componente principal
const  Page  =() =>  {
  const [direcciones, setDirecciones] = useState([
    { id: 2, tipo: 'Trabajo', direccion: 'Avenida Comercial 456, Ciudad', codigoPostal: '28002' },
  ])
  const [modalDireccionAbierto, setModalDireccionAbierto] = useState(false)
  const [modalPerfilAbierto, setModalPerfilAbierto] = useState(false)
  const [nuevaDireccion, setNuevaDireccion] = useState({ tipo: '', direccion: '', codigoPostal: '' })
  const [erroresDireccion, setErroresDireccion] = useState({ tipo: '', direccion: '', codigoPostal: '' })
  const [erroresPerfil, setErroresPerfil] = useState({ nombre: '', email: '' })

  const [usuario, setUsuario] = useState({
    nombre: 'María García',
    email: 'maria.garcia@ejemplo.com',
    fechaRegistro: '15 de Marzo, 2023',
    avatar: '/placeholder.svg?height=128&width=128',
    comprasRealizadas: 12,
    valoracionesHechas: 8,
    ultimaCompra: '2 de Junio, 2023'
  })

  const compras = [
    { id: 1, producto: 'Camiseta Azul', fecha: '15/06/2023', precio: 29.99, estado: 'Entregado' },
  ]

  const manejarCambioInputDireccion = (e) => {
    const { name, value } = e.target
    setNuevaDireccion(prev => ({ ...prev, [name]: value }))
    setErroresDireccion(prev => ({ ...prev, [name]: '' }))
  }

  const  manejarCambioInputPerfil = (e) => {
    const { name, value } = e.target
    setUsuario(prev => ({ ...prev, [name]: value }))
    setErroresPerfil(prev => ({ ...prev, [name]: '' }))
  }

  const validarFormularioDireccion = () => {
    let esValido = true
    const nuevosErrores = { tipo: '', direccion: '', codigoPostal: '' }

    if (!nuevaDireccion.tipo.trim()) {
      nuevosErrores.tipo = 'El tipo de dirección es requerido'
      esValido = false
    }

    if (!nuevaDireccion.direccion.trim()) {
      nuevosErrores.direccion = 'La dirección es requerida'
      esValido = false
    }

    if (!nuevaDireccion.codigoPostal.trim()) {
      nuevosErrores.codigoPostal = 'El código postal es requerido'
      esValido = false
    } else if (!/^\d{5}$/.test(nuevaDireccion.codigoPostal)) {
      nuevosErrores.codigoPostal = 'El código postal debe tener 5 dígitos'
      esValido = false
    }

    setErroresDireccion(nuevosErrores)
    return esValido
  }

  const validarFormularioPerfil = () => {
    let esValido = true
    const nuevosErrores = { nombre: '', email: '' }

    if (!usuario.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es requerido'
      esValido = false
    }

    if (!usuario.email.trim()) {
      nuevosErrores.email = 'El email es requerido'
      esValido = false
    } else if (!/\S+@\S+\.\S+/.test(usuario.email)) {
      nuevosErrores.email = 'El email no es válido'
      esValido = false
    }

    setErroresPerfil(nuevosErrores)
    return esValido
  }

  const manejarEnvioDireccion = (e) => {
    e.preventDefault()
    if (validarFormularioDireccion()) {
      setDirecciones(prev => [...prev, { id: prev.length + 1, ...nuevaDireccion }])
      setNuevaDireccion({ tipo: '', direccion: '', codigoPostal: '' })
      setModalDireccionAbierto(false)
    }
  }

  const manejarEnvioPerfil = (e) => {
    e.preventDefault()
    if (validarFormularioPerfil()) {
      setUsuario(prev => ({ ...prev, nombre: usuario.nombre, email: usuario.email }))
      setModalPerfilAbierto(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Mi Cuenta</h1>
      
      <PerfilUsuario 
        usuario={usuario} 
        onEditClick={() => setModalPerfilAbierto(true)} 
      />
      
      <ComprasRecientes compras={compras} />
      
      <Direcciones 
        direcciones={direcciones} 
        onAddClick={() => setModalDireccionAbierto(true)} 
      />

      <ModalDireccion 
        isOpen={modalDireccionAbierto}
        onClose={() => setModalDireccionAbierto(false)}
        nuevaDireccion={nuevaDireccion}
        errores={erroresDireccion}
        onChange={manejarCambioInputDireccion}
        onSubmit={manejarEnvioDireccion}
      />

      <ModalEditarPerfil 
        isOpen={modalPerfilAbierto}
        onClose={() => setModalPerfilAbierto(false)}
        usuario={usuario}
        errores={erroresPerfil}
        onChange={manejarCambioInputPerfil}
        onSubmit={manejarEnvioPerfil}
      />
    </div>
  )
}


export default Page