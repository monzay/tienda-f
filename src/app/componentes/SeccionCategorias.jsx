import React from 'react'
import Button from './ui/button';
import categorias from '../JSON/categoria';

const SeccionCategorias = ({setCategoriaSeleccionada}) => (
    <section className="mb-12 py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Explora nuestras categorías</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categorias.map((categoria,index) => (
            <Button
              key={index}
              onClick={() => setCategoriaSeleccionada(categoria.id)}
              variant="outline"
              className="h-15 flex flex-col items-center justify-center text-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <span className="text-lg font-medium">{categoria.nombre}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );

export default SeccionCategorias