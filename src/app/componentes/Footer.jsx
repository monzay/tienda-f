import React from 'react'
import Separator from './ui/Separator';



const Footer = () => (
    <footer style={{borderTop:"black 1px solid" }} className="bg-primary text-primary-foreground py-12">
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

export default Footer