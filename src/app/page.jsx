"use client"
import React, { useState, useEffect, useContext } from 'react';
import { X } from 'lucide-react';
import Button from './componentes/ui/button';
import obtenerFiltrosCategoria from './func/obtenerFiltrosCategoria';
import CarouselProductosMasComprados from './componentes/CaruselProductosMasComprados';
import SeccionCategorias from './componentes/SeccionCategorias';
import ProductosDestacados from './componentes/ProductosDestacados';
import ListaProductos from './componentes/ListaProducto';
import DetalleProducto from './componentes/DetalleProductos';
import { HeaderContext } from './Providers/HeaderContexto';



export default function CatalogoProductos() {

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [precioMinimo, setPrecioMinimo] = useState(0);
  const [calificacionesSeleccionadas, setCalificacionesSeleccionadas] = useState([]);
  const [caracteristicasSeleccionadas, setCaracteristicasSeleccionadas] = useState({});
  const [isActiveAgregarAlCarrito,setIsActiveAgregarAlCarrito] = useState(false)
  const {mostrarCarrito,setMostrarCarrito,menuAbierto,carrito,setCarrito } = useContext(HeaderContext)

  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);


  useEffect(() => {
    if (categoriaSeleccionada) {
      const filtrosCategoria = obtenerFiltrosCategoria(categoriaSeleccionada);
      setPrecioMinimo(filtrosCategoria.precioMinimo);
      setCaracteristicasSeleccionadas({});
    }
  }, [categoriaSeleccionada]);

  useEffect(() => {
    if (menuAbierto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [menuAbierto]);

  const eliminarDelCarrito = (productoId) => {
    setCarrito(carrito.filter(item => item.id !== productoId));
  };

  const actualizarCantidad = (productoId, nuevaCantidad) => {
    if (nuevaCantidad === 0) {
      eliminarDelCarrito(productoId);
    } else {
      setCarrito(carrito.map(item =>
        item.id === productoId ? { ...item, cantidad: nuevaCantidad } : item
      ));
    }
  };

  const Carrito = () => {
    if (!mostrarCarrito) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
        <div className="bg-background w-full max-w-md h-full overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Carrito de Compras</h2>
            <Button variant="ghost" onClick={() => setMostrarCarrito(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          {carrito.length === 0 ? (
            <p className="text-center text-muted-foreground">Tu carrito está vacío.</p>
          ) : (
            <>
              {carrito.map(item => (
                <div key={item.id} className="flex items-center justify-between py-4 border-b">
                  <div>
                    <h3 className="font-semibold">{item.nombre}</h3>
                    <p className="text-sm text-muted-foreground">${item.precio} x {item.cantidad}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}>-</Button>
                    <span>{item.cantidad}</span>
                    <Button variant="outline" size="sm" onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}>+</Button>
                    <Button variant="destructive" size="sm" onClick={() => eliminarDelCarrito(item.id)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <div className="mt-6">
                <p className="text-xl font-bold mb-4">Total: ${carrito.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2)}</p>
                <Button className="w-full">
                  Proceder al Pago
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
  
      <main className="flex-grow">
        <CarouselProductosMasComprados />
        <SeccionCategorias 
        setCategoriaSeleccionada={setCategoriaSeleccionada}
        />
        
        {!categoriaSeleccionada && !productoSeleccionado && <ProductosDestacados setProductoSeleccionado={setProductoSeleccionado} />}
        
        {categoriaSeleccionada && !productoSeleccionado && <ListaProductos 
        categoriaSeleccionada={categoriaSeleccionada}
        caracteristicasSeleccionadas={caracteristicasSeleccionadas}
        setCaracteristicasSeleccionadas={setCaracteristicasSeleccionadas}
        setCategoriaSeleccionada={setCategoriaSeleccionada}
        setPrecioMinimo={setPrecioMinimo}
        precioMinimo={precioMinimo}
        calificacionesSeleccionadas={calificacionesSeleccionadas}
        setProductoSeleccionado={setProductoSeleccionado}
        setCalificacionesSeleccionadas={setCalificacionesSeleccionadas}
        setIsActiveAgregarAlCarrito={setIsActiveAgregarAlCarrito}
        />}
        
        {productoSeleccionado && <DetalleProducto 
        carrito={carrito}
        setCarrito={setCarrito}
        productoSeleccionado={productoSeleccionado}
        setProductoSeleccionado={setProductoSeleccionado}
        setIsActiveAgregarAlCarrito={setIsActiveAgregarAlCarrito}
        isActiveAgregarAlCarrito={isActiveAgregarAlCarrito}
        />}
      </main>
      <Carrito />
    </div>
  );
}