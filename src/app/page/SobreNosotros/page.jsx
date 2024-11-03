import { Building2, Mail, Phone, ShoppingBag, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const page =() =>  {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre Nosotros</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="text-gray-600 mb-4">
            Fundada en 2010, nuestra tienda comenzó como un pequeño negocio familiar con la visión de ofrecer productos de alta calidad a precios accesibles. A lo largo de los años, hemos crecido y evolucionado, pero nuestra dedicación a la satisfacción del cliente sigue siendo nuestra prioridad número uno.
          </p>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ninja-kamui-con-oni-mascarilla_3840x2160_xtrafondos.com-6FV5y150Eky0156rvmcBPp9ePs83g4.jpg"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
          <p className="text-gray-600 mb-4">
            Nuestra misión es proporcionar a nuestros clientes una experiencia de compra excepcional, ofreciendo productos de calidad, un servicio al cliente superior y precios competitivos. Nos esforzamos por ser líderes en innovación y sostenibilidad en nuestra industria.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Nuestros Valores</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Calidad en todo lo que hacemos</li>
            <li>Integridad en nuestras relaciones</li>
            <li>Innovación constante</li>
            <li>Responsabilidad social y ambiental</li>
            <li>Satisfacción del cliente</li>
          </ul>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-6 text-center">Nuestro Equipo</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {['María López', 'Juan Pérez', 'Ana García'].map((name) => (
          <div key={name} className="bg-white shadow rounded-lg">
            <div className="flex flex-col items-center p-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm text-gray-600">Cargo en la empresa</p>
            </div>
          </div>
        ))}
      </div>
      

    </div>
  )
}

export default page