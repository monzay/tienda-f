import { useState,useRef ,useEffect} from "react"
import productosMasCompradosData from "../JSON/productosMasComprados";

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
          <div className="relative">
            <div 
              ref={carouselRef}
              className="flex overflow-x-hidden"
            >
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
              </div>
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


export default CarouselProductosMasComprados