"use client";
import React, { useContext } from "react";
import { User, ShoppingCart, X, Menu } from "lucide-react";
import { HeaderContext } from "../Providers/HeaderContexto";
import Link from "next/link";


const links = [
  {
    link:"/",
    nombre:"Inicio"
  },
  {
    link:"/page/SobreNosotros",
    nombre:"Sobre nosotros"
  },
  {
    link:"/page/Contacto",
    nombre:"Contacto",
  },

]
const Header = () => {
  const { setMenuAbierto, menuAbierto, carrito, setMostrarCarrito } =
    useContext(HeaderContext);

  return (
    <header className="backdrop-blur-md bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
          <h1 className="text-2xl font-bold">Mi Tienda Online</h1></Link>
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden z-50 relative"
              onClick={() => setMenuAbierto(!menuAbierto)}
              aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            >
              {menuAbierto ? (
                <X size={24} className={menuAbierto ? "text-white" : ""} />
              ) : (
                <Menu size={24} />
              )}
            </button>
            <nav
              className={`${
                menuAbierto
                  ? "flex h-screen bg-black bg-opacity-70 backdrop-blur-md text-white absolute left-[-20px]"
                  : "hidden"
              } md:flex fixed md:relative inset-0 bg-primary md:bg-transparent flex-col md:flex-row items-center justify-center md:justify-start space-y-8 md:space-y-0 md:space-x-4 text-lg md:text-base`}
            >
              <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-4">
                 {
                  links.map((link, i) => (
                    <Link key={i} href={link.link}>
                      <li>{link.nombre}</li>
                    </Link>
                  ))
                 }
              </ul>
            </nav>
            <button
              onClick={() => setMostrarCarrito(true)}
              className="relative z-50"
              aria-label="Ver carrito"
            >
              <ShoppingCart
                className={menuAbierto ? "text-white" : ""}
                size={24}
              />
              {carrito.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {carrito.reduce((total, item) => total + item.cantidad, 0)}
                </span>
              )}
            </button>
            <Link href="/page/Perfil">
            <User className={menuAbierto ? "text-white" : ""} size={24} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
  
};

export default Header;
