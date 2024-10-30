import productosData from "../JSON/productosJson";

const obtenerFiltrosCategoria = (idCategoria) => {
    const productosCategoría = productosData.filter(producto => producto.categoria === idCategoria);
    const filtros = {
      precioMinimo: Math.min(...productosCategoría.map(p => p.precio)),
      precioMaximo: Math.max(...productosCategoría.map(p => p.precio)),
      calificaciones: [...new Set(productosCategoría.map(p => Math.floor(p.calificacion)))].sort(),
      caracteristicas: [...new Set(productosCategoría.flatMap(p => p.caracteristicas))],
    };
    return filtros;
  };

export default obtenerFiltrosCategoria