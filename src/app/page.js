import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, User, Menu, X, Star } from 'lucide-react';
import { motion } from "framer-motion";

const Button = React.forwardRef(({ className, variant, size, children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "underline-offset-4 hover:underline text-primary",
  };
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
  };
  
  const variantStyles = variants[variant] || variants.default;
  const sizeStyles = sizes[size] || sizes.default;

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

// Cloned Card and CardContent components
const Card = ({ className, ...props }) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  />
);

const CardContent = ({ className, ...props }) => (
  <div className={`p-6 ${className}`} {...props} />
);

// Cloned Separator component
const Separator = ({ className, ...props }) => (
  <div
    className={`shrink-0 bg-border h-[1px] w-full ${className}`}
    {...props}
  />
);

// Cloned Badge component
const Badge = ({ variant = "default", className, ...props }) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}
      {...props}
    />
  );
};

const productosData = [
  {
    id: 1,
    nombre: "Smartphone XYZ",
    categoria: 1,
    precio: 599.99,
    descripcion: "Un smartphone potente con cámara de alta resolución y batería de larga duración.",
    caracteristicas: ["Pantalla OLED", "Cámara 108MP", "Batería 5000mAh", "5G"],
    imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ninja-kamui-con-oni-mascarilla_3840x2160_xtrafondos.com-6FV5y150Eky0156rvmcBPp9ePs83g4.jpg",
    calificacion: 4.5,
    destacado: true,
    purchases: 150
  },
  {
    id: 2,
    nombre: "Laptop UltraBook",
    categoria: 1,
    precio: 1299.99,
    descripcion: "Laptop ultradelgada y potente para profesionales y creativos.",
    caracteristicas: ["Procesador i7", "16GB RAM", "512GB SSD", "Pantalla 4K"],
    imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ninja-kamui-con-oni-mascarilla_3840x2160_xtrafondos.com-6FV5y150Eky0156rvmcBPp9ePs83g4.jpg",
    calificacion: 4.8,
    destacado: true,
    purchases: 120
  },
  {
    id: 3,
    nombre: "Camiseta Clásica",
    categoria: 2,
    precio: 24.99,
    descripcion: "Camiseta de algodón suave y cómoda, perfecta para el uso diario.",
    caracteristicas: ["100% Algodón", "Varios colores", "Tallas XS-XXL"],
    imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ninja-kamui-con-oni-mascarilla_3840x2160_xtrafondos.com-6FV5y150Eky0156rvmcBPp9ePs83g4.jpg",
    calificacion: 4.2,
    destacado: false,
    purchases: 200
  },
  {
    id: 50,
    nombre: "Reloj Inteligente Pro",
    categoria: 1,
    precio: 299.99,
    descripcion: "Reloj inteligente con múltiples funciones de salud y fitness.",
    caracteristicas: ["Monitor cardíaco", "GPS integrado", "Resistente al agua", "Batería de larga duración"],
    imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ninja-kamui-con-oni-mascarilla_3840x2160_xtrafondos.com-6FV5y150Eky0156rvmcBPp9ePs83g4.jpg",
    calificacion: 4.6,
    destacado: true,
    purchases: 180
  }
];

const productosMasCompradosData = [
  {
    id: 101,
    nombre: "Auriculares Inalámbricos Pro",
    precio: 129.99,
    descripcion: "Auriculares con cancelación de ruido y calidad de sonido premium.",
    imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ninja-kamui-con-oni-mascarilla_3840x2160_xtrafondos.com-6FV5y150Eky0156rvmcBPp9ePs83g4.jpg",
    purchases: 500
  },
  {
    id: 102,
    nombre: "Smartwatch Fitness",
    precio: 199.99,
    descripcion: "Reloj inteligente con seguimiento de actividad y notificaciones.",
    imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ninja-kamui-con-oni-mascarilla_3840x2160_xtrafondos.com-6FV5y150Eky0156rvmcBPp9ePs83g4.jpg",
    purchases: 450
  },
  {
    id: 103,
    nombre: "Cámara de Acción 4K",
    precio: 249.99,
    descripcion: "Cámara resistente al agua para capturar tus aventuras en alta definición.",
    imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ninja-kamui-con-oni-mascarilla_3840x2160_xtrafondos.com-6FV5y150Eky0156rvmcBPp9ePs83g4.jpg",
    purchases: 400
  },
  {
    id: 104,
    nombre: "Altavoz Bluetooth Portátil",
    precio: 79.99,
    descripcion: "Altavoz resistente al agua con 20 horas de duración de batería.",
    imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ninja-kamui-con-oni-mascarilla_3840x2160_xtrafondos.com-6FV5y150Eky0156rvmcBPp9ePs83g4.jpg",
    purchases: 350
  }
];

const categorias = [
  { id: 1, nombre: "Electrónica" },
  { id: 2, nombre: "Ropa" },
  { id: 3, nombre: "Hogar" },
  { id: 4, nombre: "Deportes" },
  { id: 5, nombre: "Libros" },
  { id: 6, nombre: "Juguetes" },
  { id: 7, nombre: "Belleza" },
  { id: 8, nombre: "Jardín" },
];

export default function CatalogoProductos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [precioMinimo, setPrecioMinimo] = useState(0);
  const [calificacionesSeleccionadas, setCalificacionesSeleccionadas] = useState([]);
  const [caracteristicasSeleccionadas, setCaracteristicasSeleccionadas] = useState({});
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

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

  const agregarAlCarrito = (producto) => {
    const itemExistente = carrito.find(item => item.id === producto.id);
    if (itemExistente) {
      setCarrito(carrito.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

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

  const Encabezado = () => (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mi Tienda Online</h1>
          <div className="flex items-center space-x-4">
            <button className="md:hidden z-50 relative" onClick={() => setMenuAbierto(!menuAbierto)} aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}>
              {menuAbierto ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav className={`${menuAbierto ? 'flex' : 'hidden'} md:flex fixed md:relative inset-0 bg-primary md:bg-transparent flex-col md:flex-row items-center justify-center md:justify-start space-y-8 md:space-y-0 md:space-x-4 text-lg md:text-base`}>
              <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-4">
                <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">Inicio</a></li>
                <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">Categorías</a></li>
                <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">Contacto</a></li>
              </ul>
            </nav>
            <button onClick={() => setMostrarCarrito(true)} className="relative z-50" aria-label="Ver carrito">
              <ShoppingCart size={24} />
              {carrito.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground  rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {carrito.reduce((total, item) => total + item.cantidad, 0)}
                </span>
              )}
            </button>
            <User size={24} className="z-50" aria-label="Perfil de usuario" />
          </div>
        </div>
      </div>
    </header>
  );

  const CarouselProductosMasComprados = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % productosMasCompradosData.length);
      }, 3000);

      return () => clearInterval(interval);
    }, []);

    return (
      <section className="mb-12 bg-secondary py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Productos Más Comprados</h2>
          <div className="relative">
            <div 
              ref={carouselRef}
              className="flex overflow-x-hidden"
            >
              <motion.div
                className="flex"
                animate={{
                  x: `-${currentIndex * 100}%`
                }}
                transition={{
                  ease: "linear",
                  duration: 20,
                  repeat: Infinity,
                }}
              >
                {[...productosMasCompradosData, ...productosMasCompradosData].map((producto, index) => (
                  <div key={`${producto.id}-${index}`} className="w-full flex-shrink-0 px-4">
                    <div className="bg-background rounded-lg shadow-lg overflow-hidden group">
                      <div className="relative aspect-[16/9]">
                        <img
                          src={producto.imagen}
                          alt={producto.nombre}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-50"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <h3 className="font-bold text-xl mb-2 text-white">{producto.nombre}</h3>
                          <p className="text-lg mb-2 text-white">${producto.precio.toFixed(2)}</p>
                          <p className="text-sm text-white line-clamp-2">{producto.descripcion}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="flex justify-center mt-4">
              {productosMasCompradosData.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    index === currentIndex % productosMasCompradosData.length ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Ir al producto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  const SeccionCategorias = () => (
    <section className="mb-12 py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Explora nuestras categorías</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categorias.map((categoria) => (
            <Button
              key={categoria.id}
              onClick={() => setCategoriaSeleccionada(categoria.id)}
              variant="outline"
              className="h-24 flex flex-col items-center justify-center text-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <span className="text-lg font-medium">{categoria.nombre}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );

  const TarjetaProducto = ({ producto }) => (
    <Card 
      className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col h-[400px]"
      onClick={() => setProductoSeleccionado(producto)}
    >
      <div className="relative pb-[60%]">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{producto.nombre}</h3>
          <p className="text-sm text-muted-foreground mb-2 line-clamp-3">{producto.descripcion}</p>
        </div>
        <div>
          <p className="text-2xl font-bold mb-2 text-primary">${producto.precio.toFixed(2)}</p>
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

  const ProductosDestacados = () => {
    const productosDestacados = productosData.filter(producto => producto.destacado);
    return (
      <section className="mb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
            {productosDestacados.map((producto) => (
              <TarjetaProducto key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ListaProductos = () => {
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
              <TarjetaProducto key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const DetalleProducto = () => {
    if (!productoSeleccionado) return null;
    return (
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">{productoSeleccionado.nombre}</h2>
              <Button 
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
                  <Badge variant="secondary">
                    {categorias.find(c => c.id === productoSeleccionado.categoria)?.nombre}
                  </Badge>
                  <Button 
                    onClick={() => agregarAlCarrito(productoSeleccionado)}
                    className="w-full"
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
                    <p className="text-sm text-muted-foreground">${item.precio.toFixed(2)} x {item.cantidad}</p>
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

  const Footer = () => (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Acerca de Nosotros</h3>
            <p className="text-primary-foreground/80">Somos una tienda en línea comprometida con ofrecer los mejores productos a precios competitivos.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">Categorías</a></li>
              <li><a href="#" className="hover:text-primary-foreground/80 transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <p>Email: info@mitiendaonline.com</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Dirección: 123 Calle Principal, Ciudad, País</p>
          </div>
        </div>
        <Separator className="my-8 bg-primary-foreground/20" />
        <div className="text-center">
          <p>&copy; 2024 Mi Tienda Online. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Encabezado />
      <main className="flex-grow">
        <CarouselProductosMasComprados />
        <SeccionCategorias />
        
        {!categoriaSeleccionada && !productoSeleccionado && <ProductosDestacados />}
        
        {categoriaSeleccionada && !productoSeleccionado && <ListaProductos />}
        
        {productoSeleccionado && <DetalleProducto />}
      </main>
      <Carrito />
      <Footer />
    </div>
  );
}