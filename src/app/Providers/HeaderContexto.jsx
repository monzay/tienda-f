"use client"
import { createContext, useState } from 'react';

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [carrito, setCarrito] = useState([]);
  return (
    <HeaderContext.Provider value={{ mostrarCarrito, setMostrarCarrito, menuAbierto, setMenuAbierto , carrito,setCarrito}}>
      {children}
    </HeaderContext.Provider>
  );
};

