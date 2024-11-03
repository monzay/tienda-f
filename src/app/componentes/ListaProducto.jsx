import React from 'react'
import productosData from '../JSON/productosJson';
import Card from './ui/Card';
import CardContent from './ui/CardComtent';
import TarjetaProducto from './TarjetaProducto';
import Button from './ui/button';
import categorias from '../JSON/categoria';
import obtenerFiltrosCategoria from '../func/obtenerFiltrosCategoria';
import { useState } from 'react';


const ListaProductos = ({
    categoriaSeleccionada,
    caracteristicasSeleccionadas,
    setCaracteristicasSeleccionadas,
    setCategoriaSeleccionada,
    setPrecioMinimo,
    precioMinimo,
    calificacionesSeleccionadas,
    setProductoSeleccionado,
    setCalificacionesSeleccionadas,
    setIsActiveAgregarAlCarrito,
}) => {

    const filtrosCategoria = obtenerFiltrosCategoria(categoriaSeleccionada);
    const [mostrarFiltros, setMostrarFiltros] = useState(false);

    const productosFiltrados = productosData.filter(producto => 
      producto.categoria === categoriaSeleccionada &&
      producto.precio >= precioMinimo &&
      (calificacionesSeleccionadas.length === 0 || calificacionesSeleccionadas.includes(Math.floor(producto.calificacion))) &&
      Object.entries(caracteristicasSeleccionadas).every(([caracteristica, seleccionada]) => 
        !seleccionada || producto.caracteristicas.includes(caracteristica)
      )
    );

    const toggleCaracteristica = (caracteristica) => {
      setCaracteristicasSeleccionadas(prev => ({
        ...prev,
        [caracteristica]: !prev[caracteristica]
      }));
    };

    return (
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Productos en {categorias.find(c => c.id === categoriaSeleccionada)?.nombre}</h2>
          <Button
            onClick={() => setCategoriaSeleccionada(null)}
            variant="outline"
          >
            ← Volver
          </Button>
        </div>
        <div className="md:hidden mb-4">
          <Button
            onClick={() => setMostrarFiltros(!mostrarFiltros)}
            className="w-full"
          >
            {mostrarFiltros ? 'Ocultar Filtros' : 'Mostrar Filtros'}
          </Button>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className={`w-full md:w-1/4 ${mostrarFiltros ? 'block' : 'hidden md:block'}`}>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-4">Filtros</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Precio Mínimo</h4>
                    <input
                      type="range"
                      min={filtrosCategoria.precioMinimo}
                      max={filtrosCategoria.precioMaximo}
                      value={precioMinimo}
                      onChange={(e) => setPrecioMinimo(parseFloat(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${precioMinimo.toFixed(2)}</span>
                      <span>${filtrosCategoria.precioMaximo.toFixed(2)}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Calificación</h4>
                    {filtrosCategoria.calificaciones.map((calificacion) => (
                      <label key={calificacion} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          checked={calificacionesSeleccionadas.includes(calificacion)}
                          onChange={() => {
                            if (calificacionesSeleccionadas.includes(calificacion)) {
                              setCalificacionesSeleccionadas(calificacionesSeleccionadas.filter(r => r !== calificacion));
                            } else {
                              setCalificacionesSeleccionadas([...calificacionesSeleccionadas, calificacion]);
                            }
                          }}
                          className="mr-2"
                        />
                        {calificacion}+ estrellas
                      </label>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Características</h4>
                    {filtrosCategoria.caracteristicas.map((caracteristica) => (
                      <label key={caracteristica} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          checked={caracteristicasSeleccionadas[caracteristica] || false}
                          onChange={() => toggleCaracteristica(caracteristica)}
                          className="mr-2"
                        />
                        {caracteristica}
                      </label>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {productosFiltrados.map((producto) => (
              <TarjetaProducto setIsActiveAgregarAlCarrito={setIsActiveAgregarAlCarrito} key={producto.id} producto={producto} setProductoSeleccionado={setProductoSeleccionado}/>
            ))}
          </div>
        </div>
      </div>
    );
  };


export default ListaProductos