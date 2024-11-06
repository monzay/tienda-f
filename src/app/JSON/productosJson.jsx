const productosData = [
    {
      id: 1,
      nombre: "Smartphone XYZ",
      categoria: 1,
      precio: 301.500,
      descripcion: "",
      caracteristicas: ["Pantalla OLED", "Cámara 108MP", "Batería 5000mAh", "5G"],
      imagen: "https://http2.mlstatic.com/D_NQ_NP_958027-MLU74181419815_012024-O.webp",
      calificacion: 4.5,
      destacado: true,
      purchases: 150
    },
    {
      id: 234234,
      nombre: "pc gamer",
      categoria: 1,
      precio: 999.99,
      descripcion: "Marca: AMD, Modelo: RYZEN 7 5700G, Tipo de procesador: RYZEN 7 5700G, Tamaño del disco duro: 1 TB, Marca del procesador: AMD, Línea del procesador: Ryzen 7, Modelo del procesador: 5700G",
      caracteristicas: ["Procesador i7", "16GB RAM", "512GB SSD", "Pantalla 4K"],
      imagen: "https://http2.mlstatic.com/D_NQ_NP_643509-MLA75371068291_032024-O.webp",
      calificacion: 4.8,
      destacado: true,
      purchases: 120
    },
    {
      id: 3,
      nombre: "Notebook Asus",
      categoria: 1,
      precio: 718.799,
      descripcion: "Notebook Asus X515ea-ej3968 Fhd I3 8gb/256gb Ssd Anti Glare Color Gris",
      caracteristicas: ["Con pantalla táctil: No", "Resolución de la pantalla: FHD 1920 x 1080", "Procesador: Intel Core i3 1115G4", "Sistema operativo: FreeDOS", "Capacidad de disco SSD: 256 GB", "Memoria RAM: 8 GB", "Conexión wifi y bluetooth.", "Cuenta con 4 puertos USB y puerto HDMI.", "Modo de sonido Mono."],
      imagen: "https://http2.mlstatic.com/D_NQ_NP_695271-MLU75875689417_042024-O.webp",
      calificacion: 4.2,
      destacado: false,
      purchases: 200
    },
    {
      id: 50,
      nombre: "PC gamer",
      categoria: 1,
      precio: 794.970,
      descripcion: "Pc Gamer Amd Ryzen 7 5700g 32gb Ssd 1tb",
      caracteristicas: ["Monitor cardíaco", "GPS integrado", "Resistente al agua", "Batería de larga duración"],
      imagen: "https://http2.mlstatic.com/D_NQ_NP_989280-MLA79345152351_092024-O.webp",
      calificacion: 4.6,
      destacado: true,
      purchases: 180
    },
    {
      id: 501,
      nombre: "Reloj Inteligente Pro",
      categoria: 1,
      precio: 314.999,
      descripcion: "Reloj inteligente con múltiples funciones de salud y fitness.",
      caracteristicas: ["Monitor cardíaco", "GPS integrado", "Resistente al agua", "Batería de larga duración"],
      imagen: "https://http2.mlstatic.com/D_NQ_NP_770416-MLA74084789641_012024-O.webp",
      calificacion: 4.6,
      destacado: true,
      purchases: 180
    },
    {
      id: 502,
      nombre: "ZTE V50",
      categoria: 1,
      precio: 259.999,
      descripcion: "ZTE V50 Design 256 GB negro 6 GB RAM.",
      caracteristicas: ["Pantalla IPS de 6.6", " 3 cámaras traseras de 50Mpx/2Mpx/2Mpx", "Batería de 5000mAh.", "Cámara delantera de 8Mp","Memoria interna de 256GB."],
      imagen: "https://http2.mlstatic.com/D_NQ_NP_858914-MLA76441935671_052024-O.webp",
      calificacion: 4.6,
      destacado: true,
      purchases: 180
    },
    {
      id: 503,
      nombre: "Pc Gamer ",
      categoria: 1,
      precio: 
      407.205,
      descripcion: "Pc Gamer Amd Ryzen 5 5600g 16gb A520m Ssd 240gb",
      caracteristicas: [
        "AMD",
        "Ryzen 5",
        "Ryzen 5 5600GT",
        "240 GB",
        "16 GB",
        ],
      imagen: "https://http2.mlstatic.com/D_NQ_NP_879438-MLA75890710977_042024-O.webp",
      calificacion: 4.6,
      destacado: true,
      purchases: 180
    },
    {
      id: 504,
      nombre: "Zapatillas",
      categoria: 2,
      precio: 299.99,
      descripcion: "zapatillas blancas adidas  GH324 ",
      caracteristicas: ["Monitor cardíaco", "GPS integrado", "Resistente al agua", "Batería de larga duración"],
      imagen: "https://http2.mlstatic.com/D_NQ_NP_919538-MLA69552280767_052023-O.webp",
      calificacion: 4.6,
      destacado: true,
      purchases: 180
    },
   
    {
      id: 590,
      nombre: "Pantalon Cargo Azul",
      categoria: 2,
      precio: 
      50.500,
      descripcion: "CPantalon Cargo Azul Mom Jean Matizado Premium Hombre",
      caracteristicas: ["azul",
        "talla: 42"
      ],
      imagen: "https://http2.mlstatic.com/D_NQ_NP_623447-MLA77788802121_072024-O.webp",
      calificacion: 4.5,
      destacado: true,
      purchases: 80
    },
    {
      id: 599,
      nombre: "Motorola Moto",
      categoria: 1,
      precio: 799.999,
      descripcion: "Motorola Moto G85 5g 256Gb + 8GB Ram Urban Grey",
      caracteristicas: ["Peso: 200g", "Ideal para perros", "Sabor: pollo"],
      imagen: "https://http2.mlstatic.com/D_NQ_NP_846793-MLU78368590992_082024-O.webp",
      calificacion: 4.6,
      destacado: true,
      purchases: 70
    },
    {
      id: 600,
      nombre: "Tarjeta De Video",
      categoria: 1,
      precio: 421.999,
      descripcion: "Tarjeta De Video Msi Geforce Rtx 3050 Gaming X 6g",
      caracteristicas: [
        "Tamaño de la memoria: 6 GB",
        "Interfaz PCI-Express 4.0.",
        "Bus de memoria: 128bit.",
      ],
      imagen: "https://http2.mlstatic.com/D_NQ_NP_988926-MLU75482979777_032024-O.webp",
      calificacion: 4.5,
      destacado: true,
      purchases: 80
    },
    {
      id: 601,
      nombre: "Tarjeta gráfica",
      categoria: 1,
      precio: 383.999,
      descripcion: "Tarjeta gráfica Msi Geforce Rtx 3050 Gaming X 6gb Gddr6 96bit",
      caracteristicas: [
        "Tamaño de la memoria: 6 GB",
        "Interfaz PCI-Express 4.0.",
        "Interfaz de memoria: 92 bits.",
        "Dispone de una conexión: HDMI",
      ],
      imagen: "https://http2.mlstatic.com/D_NQ_NP_842879-MLU77148112435_062024-O.webp",
      calificacion: 4.6,
      destacado: true,
      purchases: 70
    },
    {
      id: 602,
      nombre: "Pc Diseño Grafico",
      categoria: 1,
      precio: 99.349,
      descripcion: "Pc Diseño Grafico I5 12th Ram 32gb Ssd 1tb Rtx 3050 6gb Wifi",
      caracteristicas: [],
      imagen: "https://http2.mlstatic.com/D_NQ_NP_603178-MLA80197665713_102024-O.webp",
      calificacion: 4.5,
      destacado: true,
      purchases: 80
    },
    {
      id: 603,
      nombre: "Pc Gamer ",
      categoria: 1,
      precio: 692.999,
      descripcion: "Pc Gamer Armada Ryzen 7 5700g Ram 32b Disco Ssd 1tb Wifi W10",
      caracteristicas: [],
      imagen: "https://http2.mlstatic.com/D_NQ_NP_653794-MLA79440145658_102024-O.webp",
      calificacion: 3,
            destacado: true,
      purchases: 70
    },
    {
      id: 6023,
      nombre: "Pc Gamer Ryzen",
      categoria: 1,
      precio: 9.99,
      descripcion: "Pc Gamer Ryzen 7 5700g Ram 32gb Vega 8 960gb Wifi",
      caracteristicas: [],
      imagen: "https://http2.mlstatic.com/D_NQ_NP_649332-MLA76740809050_062024-O.webp",
      calificacion: 4.5,
      destacado: true,
      purchases: 80
    },
    {
      id: 604,
      nombre: "Pc Armada Gamer Ryzen 7", 
      categoria: 1, 
      precio:712.500,
      descripcion: "Pc Armada Gamer Ryzen 7 5700g 32gb Vega 8 960gb Wifi",
      caracteristicas: ["RYZEN 7 5700G",
        "1 TB",
        "AMD",
        "Ryzen 7",
        "5700G",
        "32 GB",
      ],
      imagen: "https://http2.mlstatic.com/D_NQ_NP_839757-MLA78694238162_092024-O.webp" ,
      calificacion: 4.5,
      destacado: true,
      purchases: 80,
      mercado: "Producto muy popular entre los dueños de gatos. La mayoría de los juguetes de peluche para gatos incluyen sonidos o texturas que estimulan el juego. Este producto se destaca por su diseño colorido y duradero."
  }
  ];


export default productosData

