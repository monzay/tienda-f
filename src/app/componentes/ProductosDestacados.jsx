import React from 'react'
import TarjetaProducto from './TarjetaProducto';
import productosData from '../JSON/productosJson';


const ProductosDestacados = ({setProductoSeleccionado}) => {
    const productosDestacados = productosData.filter(producto => producto.destacado);
    return (
      <section className="mb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
            {productosDestacados.map((producto) => (
              <TarjetaProducto key={producto.id} producto={producto} setProductoSeleccionado={setProductoSeleccionado} />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default ProductosDestacados