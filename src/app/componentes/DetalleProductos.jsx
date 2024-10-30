import React from 'react'

import Card from './ui/Card';
import CardContent from './ui/CardComtent';
import Button from './ui/button';
import agregarAlCarrito from '../func/agregarAlCarrito';
import {Star ,Badge} from "lucide-react"
import categorias from '../JSON/categoria';



const DetalleProducto = ({
    productoSeleccionado,
    setProductoSeleccionado,
    carrito,
    setCarrito,
    setIsActiveAgregarAlCarrito,
    isActiveAgregarAlCarrito,

}) => {
    if (!productoSeleccionado) return null;
    return (
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">{productoSeleccionado.nombre}</h2>
              <Button 
                className="bg-black text-white"
                onClick={() => setProductoSeleccionado(null)}
                variant="outline"
              >
                ← Volver
              </Button>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <img
                  src={productoSeleccionado.imagen}
                  alt={productoSeleccionado.nombre}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <p className="text-4xl font-bold text-primary">${productoSeleccionado.precio.toFixed(2)}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className={`w-5 h-5 ${index < Math.floor(productoSeleccionado.calificacion) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">{productoSeleccionado.calificacion.toFixed(1)}</span>
                </div>
                <p className="text-muted-foreground">{productoSeleccionado.descripcion}</p>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Características:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {productoSeleccionado.caracteristicas.map((caracteristica, index) => (
                      <li key={index}>{caracteristica}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center space-x-4">
                  <Button 
                    onClick={() =>{
                       setIsActiveAgregarAlCarrito(true)
                       agregarAlCarrito(productoSeleccionado,carrito,setCarrito)
                    }}
                    className={`w-full ${isActiveAgregarAlCarrito ? "" : "bg-black text-white"}`}
                  >
                    Agregar al Carrito
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };


export default DetalleProducto