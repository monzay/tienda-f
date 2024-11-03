'use client'

import { useState, useEffect } from 'react'
import {  Layout, ShoppingCart, Users, BarChart, Package, Menu, Plus, Pencil, Trash2, DollarSign, ShoppingBag, TrendingUp, Search, X } from 'lucide-react'
import React from 'react'

// Componentes personalizados
const Boton = ({ children, onClick, variante = 'primario', tamanio = 'normal', className = '', ...props }) => {
  const estiloBase = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background'
  const estiloVariante = variante === 'primario' 
    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
    : 'border border-input hover:bg-accent hover:text-accent-foreground'
  const estiloTamanio = tamanio === 'pequenio' ? 'h-9 px-3 text-xs' : 'h-10 py-2 px-4'
  
  return (
    <button 
      className={`${estiloBase} ${estiloVariante} ${estiloTamanio} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

const Tarjeta = ({ children, className = '', ...props }) => {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
      {children}
    </div>
  )
}

const ContenidoTarjeta = ({ children, className = '', ...props }) => {
  return <div className={`p-6 ${className}`} {...props}>{children}</div>
}

const TituloTarjeta = ({ children, className = '', ...props }) => {
  return <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props}>{children}</h3>
}

const Entrada = ({ id, label, ...props }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      {label && <label htmlFor={id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{label}</label>}
      <input 
        id={id}
        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      />
    </div>
  )
}

const AreaTexto = ({ id, label, ...props }) => {
  return (
    <div className="grid w-full gap-1.5">
      {label && <label htmlFor={id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{label}</label>}
      <textarea
        id={id}
        className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      />
    </div>
  )
}

const Tabla = ({ children, ...props }) => {
  return (
    <div className="relative w-full overflow-auto">
      <table className="w-full caption-bottom text-sm" {...props}>
        {children}
      </table>
    </div>
  )
}

const CabeceraTabla = ({ children, ...props }) => {
  return <thead className="[&_tr]:border-b" {...props}>{children}</thead>
}

const FilaTabla = ({ children, ...props }) => {
  return <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" {...props}>{children}</tr>
}

const CeldaTabla = ({ children, ...props }) => {
  return <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0" {...props}>{children}</td>
}

const CeldaCabeceraTabla = ({ children, ...props }) => {
  return <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0" {...props}>{children}</th>
}

const CuerpoTabla = ({ children, ...props }) => {
  return <tbody className="[&_tr:last-child]:border-0" {...props}>{children}</tbody>
}

const Dialogo = ({ abierto, onOpenChange, children }) => {
  if (!abierto) return null

  return (
    <div className="fixed  inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={() => onOpenChange(false)}>
      <div className="   fixed left-[50%] top-[50%] z-50 grid w-full max-w-xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

const ContenidoDialogo = ({ children }) => {
  return <div className="grid gap-4 py-4">{children}</div>
}

const TituloDialogo = ({ children }) => {
  return <h2 className="text-lg font-semibold leading-none tracking-tight">{children}</h2>
}

const DescripcionDialogo = ({ children }) => {
  return <p className="text-sm text-muted-foreground">{children}</p>
}

const PieDialogo = ({ children }) => {
  return <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">{children}</div>
}

const DialogoAlerta = ({ abierto, onOpenChange, children }) => {
  if (!abierto) return null

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={() => onOpenChange(false)}>
      <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

const Seleccionar = ({ children, onValueChange, ...props }) => {
  return (
    <div className="relative">
      <select 
        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        onChange={(e) => onValueChange(e.target.value)}
        {...props}
      >
        {children}
      </select>
    </div>
  )
}

const OpcionSeleccionar = ({ children, ...props }) => {
  return <option {...props}>{children}</option>
}

const Pestanias = ({ children, valor, onValorCambio }) => {
  return (
    <div className="space-y-4">
      <div className="flex space-x-4 border-b">
        {React.Children.map(children, (child) => {
          if (child.type === ContenidoPestania) return null
          return React.cloneElement(child, { activo: child.props.valor === valor, onClick: () => onValorCambio(child.props.valor) })
        })}
      </div>
      {React.Children.map(children, (child) => {
        if (child.type !== ContenidoPestania) return null
        return child.props.valor === valor ? child : null
      })}
    </div>
  )
}

const ActivadorPestania = ({ children, activo, onClick }) => {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium transition-all ${
        activo
          ? 'border-b-2 border-primary text-primary'
          : 'text-muted-foreground hover:text-foreground'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

const ContenidoPestania = ({ children }) => {
  return <div>{children}</div>
}

export default function AdminTienda() {
  const [menuLateralAbierto, setMenuLateralAbierto] = useState(false)
  const [pestaniaActiva, setPestaniaActiva] = useState("dashboard")
  const [pestaniaUsuarioActiva, setPestaniaUsuarioActiva] = useState("todos")
  const [productos, setProductos] = useState([])
  const [usuarios, setUsuarios] = useState([])
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [productoEditando, setProductoEditando] = useState(null)
  const [agregandoProducto, setAgregandoProducto] = useState(false)
  const [datosDashboard, setDatosDashboard] = useState({
    totalVentas: 0,
    totalUsuarios: 0,
    productoMasVendido: '',
    ingresosMensuales: 0
  })
  const [terminoBusqueda, setTerminoBusqueda] = useState("")
  const [terminoBusquedaUsuario, setTerminoBusquedaUsuario] = useState("")

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        // Simulamos una llamada a la API
        await new Promise(resolve => setTimeout(resolve, 1000))
        const productosMock = [
          {
            id: 585,
            nombre: "Lámpara de Mesa",
            categoria: 3,
            precio: 29.99,
            descripcion: "Lámpara de mesa con luz LED regulable.",
            caracteristicas: ["Material: plástico", "Colores: blanco, negro", "Altura: 30 cm"],
            imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ninja-kamui-con-oni-mascarilla_3840x2160_xtrafondos.com-6FV5y150Eky0156rvmcBPp9ePs83g4.jpg",
            compras: 80
          },
          {
            id: 586,
            nombre: "Silla de Oficina",
            categoria: 2,
            precio: 149.99,
            descripcion: "Silla ergonómica para oficina con soporte lumbar.",
            caracteristicas: ["Material: malla y plástico", "Colores: negro, gris", "Ajuste de altura"],
            imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ninja-kamui-con-oni-mascarilla_3840x2160_xtrafondos.com-6FV5y150Eky0156rvmcBPp9ePs83g4.jpg",
            compras: 120
          },
          {
            id: 587,
            nombre: "Teclado Mecánico",
            categoria: 1,
            precio: 89.99,
            descripcion: "Teclado mecánico para gaming con retroiluminación RGB.",
            caracteristicas: ["Switches: Cherry MX Red", "Layout: QWERTY español", "Cable USB desmontable"],
            imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ninja-kamui-con-oni-mascarilla_3840x2160_xtrafondos.com-6FV5y150Eky0156rvmcBPp9ePs83g4.jpg",
            compras: 200
          }
        ]
        const usuariosMock = [
          {
            id: 1,
            nombre: "Juan Pérez",
            email: "juan@example.com",
            totalGastado: 279.97,
            productosComprados: [
              { ...productosMock[0], estado: 'Entregado', fechaCompra: '2023-05-15' },
              { ...productosMock[1], estado: 'Enviado', fechaCompra: '2023-06-02' }
            ]
          },
          {
            id: 2,
            nombre: "María García",
            email: "maria@example.com",
            totalGastado: 89.99,
            productosComprados: [
              { ...productosMock[2], estado: 'Pendiente', fechaCompra: '2023-06-10' }
            ]
          },
          {
            id: 3,
            nombre: "Carlos Rodríguez",
            email: "carlos@example.com",
            totalGastado: 179.98,
            productosComprados: [
              { ...productosMock[0], estado: 'Entregado', fechaCompra: '2023-05-20' },
              { ...productosMock[2], estado: 'Pendiente', fechaCompra: '2023-06-05' }
            ]
          }
        ]
        setProductos(productosMock)
        
        setUsuarios(usuariosMock)
        setDatosDashboard({
          totalVentas: productosMock.reduce((sum, product) => sum + product.compras, 0),
          totalUsuarios: usuariosMock.length,
          productoMasVendido: productosMock.reduce((a, b) => a.compras > b.compras ? a : b).nombre,
          ingresosMensuales: usuariosMock.reduce((sum, user) => sum + user.totalGastado, 0)
        })
        setCargando(false)
      } catch (error) {
        setError('Error al cargar los datos. Por favor, intente de nuevo más tarde.')
        setCargando(false)
      }
    }

    obtenerDatos()
  }, [])

  const manejarEditarProducto = (producto) => {
    setProductoEditando(producto)
  }

  const manejarGuardarProducto = async (productoActualizado) => {
    try {
      // Simulamos una llamada a la API para actualizar el producto
      await new Promise(resolve => setTimeout(resolve, 1000))
      const productosActualizados = productos.map(p => 
        p.id === productoActualizado.id ? productoActualizado : p
      )
      setProductos(productosActualizados)
      setProductoEditando(null)
      console.log('Producto actualizado:', productoActualizado)
    } catch (error) {
      console.error('Error al actualizar el producto:', error)
      setError('Error al actualizar el producto. Por favor, intente de nuevo más tarde.')
    }
  }

  const manejarEliminarProducto = async (productoId) => {
    try {
      // Simulamos una llamada a la API para eliminar el producto
      await new Promise(resolve => setTimeout(resolve, 1000))
      const productosActualizados = productos.filter(p => p.id !== productoId)
      setProductos(productosActualizados)
      console.log('Producto eliminado:', productoId)
    } catch (error) {
      console.error('Error al eliminar el producto:', error)
      setError('Error al eliminar el producto. Por favor, intente de nuevo más tarde.')
    }
  }

  const manejarAgregarProducto = () => {
    const nuevoProducto = {
      id: Date.now(),
      nombre: "",
      categoria: 0,
      precio: 0,
      descripcion: "",
      caracteristicas: [],
      imagen: "",
      compras: 0
    }
    setProductoEditando(nuevoProducto)
    setAgregandoProducto(true)
  }

  const manejarGuardarNuevoProducto = async (nuevoProducto) => {
    try {
      // Simulamos una llamada a la API para añadir el producto
      await new Promise(resolve => setTimeout(resolve, 1000))
      setProductos([...productos, nuevoProducto])
      setProductoEditando(null)
      setAgregandoProducto(false)
      console.log('Nuevo producto añadido:', nuevoProducto)
    } catch (error) {
      console.error('Error al añadir el producto:', error)
      setError('Error al añadir el producto. Por favor, intente de nuevo más tarde.')
    }
  }

  const manejarSeleccionarUsuario = (usuario) => {
    setUsuarioSeleccionado(usuario)
  }

  const manejarCambiarEstadoProducto = async (usuarioId, productoId, nuevoEstado) => {
    try {
      // Simulamos una llamada a la API para actualizar el estado del producto
      await new Promise(resolve => setTimeout(resolve, 1000))
      const usuariosActualizados = usuarios.map(usuario => {
        if (usuario.id === usuarioId) {
          const productosActualizados = usuario.productosComprados.map(producto => 
            producto.id === productoId ? { ...producto, estado: nuevoEstado } : producto
          )
          return { ...usuario, productosComprados: productosActualizados }
        }
        return usuario
      })
      setUsuarios(usuariosActualizados)
      if (usuarioSeleccionado) {
        const usuarioSeleccionadoActualizado = usuariosActualizados.find(u => u.id === usuarioSeleccionado.id)
        if (usuarioSeleccionadoActualizado) {
          setUsuarioSeleccionado(usuarioSeleccionadoActualizado)
        }
      }
      console.log(`Estado del producto ${productoId} actualizado a ${nuevoEstado} para el usuario ${usuarioId}`)
    } catch (error) {
      console.error('Error al actualizar el estado del producto:', error)
      setError('Error al actualizar el estado del producto. Por favor, intente de nuevo más tarde.')
    }
  }

  const manejarEliminarUsuario = async (usuarioId) => {
    try {
      // Simulamos una llamada a la API para eliminar el usuario
      await new Promise(resolve => setTimeout(resolve, 1000))
      const usuariosActualizados = usuarios.filter(u => u.id !== usuarioId)
      setUsuarios(usuariosActualizados)
      console.log('Usuario eliminado:', usuarioId)
    } catch (error) {
      console.error('Error al eliminar el usuario:', error)
      setError('Error al eliminar el usuario. Por favor, intente de nuevo más tarde.')
    }
  }

  const obtenerUsuariosConPedidosPendientes = () => {
    return usuarios.filter(usuario => 
      usuario.productosComprados.some(producto => 
        producto.estado === 'Pendiente' || producto.estado === 'Enviado'
      )
    )
  }

  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
    producto.id.toString().includes(terminoBusqueda)
  )

  const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.nombre.toLowerCase().includes(terminoBusquedaUsuario.toLowerCase()) ||
    usuario.email.toLowerCase().includes(terminoBusquedaUsuario.toLowerCase()) ||
    usuario.id.toString().includes(terminoBusquedaUsuario)
  )

  const usuariosPendientesFiltrados = obtenerUsuariosConPedidosPendientes().filter(usuario =>
    usuario.nombre.toLowerCase().includes(terminoBusquedaUsuario.toLowerCase()) ||
    usuario.email.toLowerCase().includes(terminoBusquedaUsuario.toLowerCase()) ||
    usuario.id.toString().includes(terminoBusquedaUsuario)
  )

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Menú lateral */}
      <div className={`bg-white w-full md:w-64 md:min-h-screen flex flex-col transition-all duration-300 ease-in-out ${menuLateralAbierto ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static absolute z-30`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold">Admin Tienda</h1>
          <Boton variante="fantasma" tamanio="pequenio" className="md:hidden" onClick={() => setMenuLateralAbierto(false)}>
            <Menu className="h-6 w-6" />
          </Boton>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Boton variante="fantasma" className="w-full justify-start" onClick={() => setPestaniaActiva("dashboard")}>
                <Layout className="mr-2 h-4 w-4" />
                Dashboard
              </Boton>
            </li>
            <li>
              <Boton variante="fantasma" className="w-full justify-start" onClick={() => setPestaniaActiva("productos")}>
                <Package className="mr-2 h-4 w-4" />
                Productos
              </Boton>
            </li>
            <li>
              <Boton variante="fantasma" className="w-full justify-start" onClick={() => setPestaniaActiva("pedidos")}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Pedidos
              </Boton>
            </li>
            <li>
              <Boton variante="fantasma" className="w-full justify-start" onClick={() => setPestaniaActiva("usuarios")}>
                <Users className="mr-2 h-4 w-4" />
                Usuarios
              </Boton>
            </li>
          </ul>
        </nav>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Área de contenido */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <Pestanias valor={pestaniaActiva} onValorCambio={setPestaniaActiva}>
            <ActivadorPestania valor="dashboard">Dashboard</ActivadorPestania>
            <ActivadorPestania valor="productos">Productos</ActivadorPestania>
            <ActivadorPestania valor="usuarios">Usuarios</ActivadorPestania>
            <ContenidoPestania valor="dashboard">
              <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Tarjeta>
                  <ContenidoTarjeta>
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <TituloTarjeta className="text-sm font-medium">
                        Total Ventas
                      </TituloTarjeta>
                      <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold">{datosDashboard.totalVentas}</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% desde el último mes
                    </p>
                  </ContenidoTarjeta>
                </Tarjeta>
                <Tarjeta>
                  <ContenidoTarjeta>
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <TituloTarjeta className="text-sm font-medium">
                        Usuarios Registrados
                      </TituloTarjeta>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold">{datosDashboard.totalUsuarios}</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% desde el último mes
                    </p>
                  </ContenidoTarjeta>
                </Tarjeta>
                <Tarjeta>
                  <ContenidoTarjeta>
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <TituloTarjeta className="text-sm font-medium">Producto Más Vendido</TituloTarjeta>
                      <Package className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold">{datosDashboard.productoMasVendido}</div>
                    <p className="text-xs text-muted-foreground">
                      +19% desde el último mes
                    </p>
                  </ContenidoTarjeta>
                </Tarjeta>
                <Tarjeta>
                  <ContenidoTarjeta>
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <TituloTarjeta className="text-sm font-medium">
                        Ingresos Mensuales
                      </TituloTarjeta>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold">${datosDashboard.ingresosMensuales.toFixed(2)}</div>
                    <p className="text-xs text-muted-foreground">
                      +25.5% desde el último mes
                    </p>
                  </ContenidoTarjeta>
                </Tarjeta>
              </div>
            </ContenidoPestania>
            <ContenidoPestania valor="productos">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Productos</h2>
                <Boton onClick={manejarAgregarProducto}>
                  <Plus className="mr-2 h-4 w-4" /> Añadir Producto
                </Boton>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <Entrada
                  placeholder="Buscar productos..."
                  value={terminoBusqueda}
                  onChange={(e) => setTerminoBusqueda(e.target.value)}
                  className="max-w-sm"
                />
                <Boton variante="outline" tamanio="pequenio">
                  <Search className="h-4 w-4" />
                </Boton>
              </div>
              <Tarjeta>
                <ContenidoTarjeta>
                  <TituloTarjeta>Lista de Productos</TituloTarjeta>
                  {cargando ? (
                    <p>Cargando productos...</p>
                  ) : error ? (
                    <p className="text-red-500">{error}</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <Tabla>
                        <CabeceraTabla>
                          <FilaTabla>
                            <CeldaCabeceraTabla>ID</CeldaCabeceraTabla>
                            <CeldaCabeceraTabla>Nombre</CeldaCabeceraTabla>
                            <CeldaCabeceraTabla>Precio</CeldaCabeceraTabla>
                            <CeldaCabeceraTabla>Compras</CeldaCabeceraTabla>
                            <CeldaCabeceraTabla>Acciones</CeldaCabeceraTabla>
                          </FilaTabla>
                        </CabeceraTabla>
                        <CuerpoTabla>
                          {productosFiltrados.map((producto) => (
                            <FilaTabla key={producto.id}>
                              <CeldaTabla>{producto.id}</CeldaTabla>
                              <CeldaTabla>{producto.nombre}</CeldaTabla>
                              <CeldaTabla>${producto.precio.toFixed(2)}</CeldaTabla>
                              <CeldaTabla>{producto.compras}</CeldaTabla>
                              <CeldaTabla>
                                <div className="flex space-x-2">
                                  <Boton variante="outline" tamanio="pequenio" onClick={() => manejarEditarProducto(producto)}>
                                    <Pencil className="h-4 w-4" />
                                  </Boton>
                                  <Boton variante="outline" tamanio="pequenio" onClick={() => manejarEliminarProducto(producto.id)}>
                                    <Trash2 className="h-4 w-4" />
                                  </Boton>
                                </div>
                              </CeldaTabla>
                            </FilaTabla>
                          ))}
                        </CuerpoTabla>
                      </Tabla>
                    </div>
                  )}
                </ContenidoTarjeta>
              </Tarjeta>
            </ContenidoPestania>
            <ContenidoPestania valor="usuarios">
              <h2 className="text-2xl font-semibold mb-4">Usuarios</h2>
              <div className="flex items-center space-x-2 mb-4">
                <Entrada
                  placeholder="Buscar usuarios..."
                  value={terminoBusquedaUsuario}
                  onChange={(e) => setTerminoBusquedaUsuario(e.target.value)}
                  className="max-w-sm"
                />
                <Boton variante="outline" tamanio="pequenio">
                  <Search className="h-4 w-4" />
                </Boton>
              </div>
              <Pestanias valor={pestaniaUsuarioActiva} onValorCambio={setPestaniaUsuarioActiva}>
                <ActivadorPestania valor="todos">Todos los Usuarios</ActivadorPestania>
                <ActivadorPestania valor="pendientes">Usuarios con Pedidos Pendientes</ActivadorPestania>
                <ContenidoPestania valor="todos">
                  <Tarjeta>
                    <ContenidoTarjeta>
                      <TituloTarjeta>Lista de Todos los Usuarios</TituloTarjeta>
                      {cargando ? (
                        <p>Cargando usuarios...</p>
                      ) : error ? (
                        <p className="text-red-500">{error}</p>
                      ) : (
                        <div className="overflow-x-auto">
                          <Tabla>
                            <CabeceraTabla>
                              <FilaTabla>
                                <CeldaCabeceraTabla>ID</CeldaCabeceraTabla>
                                <CeldaCabeceraTabla>Nombre</CeldaCabeceraTabla>
                                <CeldaCabeceraTabla>Email</CeldaCabeceraTabla>
                                <CeldaCabeceraTabla>Total Gastado</CeldaCabeceraTabla>
                                <CeldaCabeceraTabla>Acciones</CeldaCabeceraTabla>
                              </FilaTabla>
                            </CabeceraTabla>
                            <CuerpoTabla>
                              {usuariosFiltrados.map((usuario) => (
                                <FilaTabla key={usuario.id}>
                                  <CeldaTabla>{usuario.id}</CeldaTabla>
                                  <CeldaTabla>{usuario.nombre}</CeldaTabla>
                                  <CeldaTabla>{usuario.email}</CeldaTabla>
                                  <CeldaTabla>${usuario.totalGastado.toFixed(2)}</CeldaTabla>
                                  <CeldaTabla>
                                    <div className="flex space-x-2">
                                      <Boton variante="outline" tamanio="pequenio" onClick={() => manejarSeleccionarUsuario(usuario)}>
                                        Ver Detalles
                                      </Boton>
                                      <Boton variante="outline" tamanio="pequenio" onClick={() => manejarEliminarUsuario(usuario.id)}>
                                        <Trash2 className="h-4 w-4" />
                                      </Boton>
                                    </div>
                                  </CeldaTabla>
                                </FilaTabla>
                              ))}
                            </CuerpoTabla>
                          </Tabla>
                        </div>
                      )}
                    </ContenidoTarjeta>
                  </Tarjeta>
                </ContenidoPestania>
                <ContenidoPestania valor="pendientes">
                  <Tarjeta>
                    <ContenidoTarjeta>
                      <TituloTarjeta>Usuarios con Pedidos Pendientes</TituloTarjeta>
                      {cargando ? (
                        <p>Cargando usuarios...</p>
                      ) : error ? (
                        <p className="text-red-500">{error}</p>
                      ) : (
                        <div className="overflow-x-auto">
                          <Tabla>
                            <CabeceraTabla>
                              <FilaTabla>
                                <CeldaCabeceraTabla>ID</CeldaCabeceraTabla>
                                <CeldaCabeceraTabla>Nombre</CeldaCabeceraTabla>
                                <CeldaCabeceraTabla>Email</CeldaCabeceraTabla>
                                <CeldaCabeceraTabla>Pedidos Pendientes</CeldaCabeceraTabla>
                                <CeldaCabeceraTabla>Acciones</CeldaCabeceraTabla>
                              </FilaTabla>
                            </CabeceraTabla>
                            <CuerpoTabla>
                              {usuariosPendientesFiltrados.map((usuario) => (
                                <FilaTabla key={usuario.id}>
                                  <CeldaTabla>{usuario.id}</CeldaTabla>
                                  <CeldaTabla>{usuario.nombre}</CeldaTabla>
                                  <CeldaTabla>{usuario.email}</CeldaTabla>
                                  <CeldaTabla>{usuario.productosComprados.filter(p => p.estado === 'Pendiente' || p.estado === 'Enviado').length}</CeldaTabla>
                                  <CeldaTabla>
                                    <Boton variante="outline" tamanio="pequenio" onClick={() => manejarSeleccionarUsuario(usuario)}>
                                      Ver Detalles
                                    </Boton>
                                  </CeldaTabla>
                                </FilaTabla>
                              ))}
                            </CuerpoTabla>
                          </Tabla>
                        </div>
                      )}
                    </ContenidoTarjeta>
                  </Tarjeta>
                </ContenidoPestania>
              </Pestanias>
            </ContenidoPestania>
          </Pestanias>
        </main>
      </div>

      {/* Diálogo para editar/añadir producto */}
      <Dialogo abierto={!!productoEditando} onOpenChange={() => setProductoEditando(null)}>
        <TituloDialogo>{agregandoProducto ? 'Añadir Nuevo Producto' : 'Editar Producto'}</TituloDialogo>
        <DescripcionDialogo>
          {agregandoProducto ? 'Ingresa los detalles del nuevo producto aquí.' : 'Modifica los detalles del producto aquí.'} Haz clic en guardar cuando hayas terminado.
        </DescripcionDialogo>
        <ContenidoDialogo>
          {productoEditando && (
            <form onSubmit={(e) => {
              e.preventDefault()
              if (agregandoProducto) {
                manejarGuardarNuevoProducto(productoEditando)
              } else {
                manejarGuardarProducto(productoEditando)
              }
            }}>
              <div className="grid gap-4 py-4">
                <Entrada
                  id="nombre"
                  label="Nombre"
                  value={productoEditando.nombre}
                  onChange={(e) => setProductoEditando({...productoEditando, nombre: e.target.value})}
                />
                <Entrada
                  id="precio"
                  label="Precio"
                  type="number"
                  value={productoEditando.precio}
                  onChange={(e) => setProductoEditando({...productoEditando, precio: parseFloat(e.target.value)})}
                />
                <AreaTexto
                  id="descripcion"
                  label="Descripción"
                  value={productoEditando.descripcion}
                  onChange={(e) => setProductoEditando({...productoEditando, descripcion: e.target.value})}
                />
                <AreaTexto
                  id="caracteristicas"
                  label="Características"
                  value={productoEditando.caracteristicas.join('\n')}
                  onChange={(e) => setProductoEditando({...productoEditando, caracteristicas: e.target.value.split('\n')})}
                />
              </div>
              <PieDialogo>
                <Boton type="submit">Guardar cambios</Boton>
              </PieDialogo>
            </form>
          )}
        </ContenidoDialogo>
      </Dialogo>

      {/* Diálogo para ver detalles del usuario */}
      <Dialogo abierto={!!usuarioSeleccionado} onOpenChange={() => setUsuarioSeleccionado(null)}>
        <TituloDialogo>Detalles del Usuario</TituloDialogo>
        <ContenidoDialogo>
          {usuarioSeleccionado && (
            <div className="grid gap-4 py-4">
              <div>
                <h3 className="text-lg font-semibold">Información Personal</h3>
                <p><strong>Nombre:</strong> {usuarioSeleccionado.nombre}</p>
                <p><strong>Email:</strong> {usuarioSeleccionado.email}</p>
                <p><strong>Total Gastado:</strong> ${usuarioSeleccionado.totalGastado.toFixed(2)}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Productos Comprados</h3>
                <Tabla>
                  <CabeceraTabla>
                    <FilaTabla>
                      <CeldaCabeceraTabla>Nombre</CeldaCabeceraTabla>
                      <CeldaCabeceraTabla>Precio</CeldaCabeceraTabla>
                      <CeldaCabeceraTabla>Estado</CeldaCabeceraTabla>
                      <CeldaCabeceraTabla>Fecha de Compra</CeldaCabeceraTabla>
                      <CeldaCabeceraTabla>Acciones</CeldaCabeceraTabla>
                    </FilaTabla>
                  </CabeceraTabla>
                  <CuerpoTabla>
                    {usuarioSeleccionado.productosComprados.map((producto) => (
                      <FilaTabla key={producto.id}>
                        <CeldaTabla>{producto.nombre}</CeldaTabla>
                        <CeldaTabla>${producto.precio.toFixed(2)}</CeldaTabla>
                        <CeldaTabla>{producto.estado}</CeldaTabla>
                        <CeldaTabla>{producto.fechaCompra}</CeldaTabla>
                        <CeldaTabla>
                          <Seleccionar
                            value={producto.estado}
                            onValueChange={(valor) => manejarCambiarEstadoProducto(usuarioSeleccionado.id, producto.id, valor)}
                          >
                            <OpcionSeleccionar value="Pendiente">Pendiente</OpcionSeleccionar>
                            <OpcionSeleccionar value="Enviado">Enviado</OpcionSeleccionar>
                            <OpcionSeleccionar value="Entregado">Entregado</OpcionSeleccionar>
                            <OpcionSeleccionar value="Cancelado">Cancelado</OpcionSeleccionar>
                          </Seleccionar>
                        </CeldaTabla>
                      </FilaTabla>
                    ))}
                  </CuerpoTabla>
                </Tabla>
              </div>
            </div>
          )}
        </ContenidoDialogo>
      </Dialogo>
    </div>
  )
}