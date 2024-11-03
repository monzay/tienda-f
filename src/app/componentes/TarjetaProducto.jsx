import React from 'react'
import Card from './ui/Card'
import CardContent from './ui/CardComtent'
import {Star} from "lucide-react"
import Image from 'next/image';

const TarjetaProducto = ({ producto ,setProductoSeleccionado,setIsActiveAgregarAlCarrito}) => (
    <Card 
      className=" overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col h-[420px]"
      onClick={() => {
        if (typeof setIsActiveAgregarAlCarrito === 'function') {
          setIsActiveAgregarAlCarrito(false);
        } 
        setProductoSeleccionado(producto)
      }}
    >
      <div className="relative pb-[60%] ">
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          className="absolute top-0 left-0 w-full h-full object-contain "
        />
      </div>
      <CardContent className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{producto.nombre}</h3>
          <p className="text-sm text-muted-foreground mb-2 line-clamp-3">{producto.descripcion}</p>
        </div>
        <div>
          <p className="text-2xl font-bold mb-2 text-primary">${producto.precio}</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className={`w-4 h-4 ${index < Math.floor(producto.calificacion) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">{producto.calificacion.toFixed(1)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
    

export default TarjetaProducto