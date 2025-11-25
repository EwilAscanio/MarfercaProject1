import { Product } from '../lib/supabase';

export const mockProducts: Product[] = [
  {
    id: '1',
    sku: 'TOR-001',
    name: 'Tornillos M8 Acero Inoxidable',
    category: 'Fijación',
    price: 45.99,
    description: 'Tornillos de cabeza hexagonal calidad industrial',
    full_description: 'Tornillos M8 de acero inoxidable 304 con cabeza hexagonal. Ideales para aplicaciones que requieren resistencia a la corrosión. Caja de 50 unidades.',
    specifications: {
      'Diámetro': 'M8',
      'Longitud': '25mm',
      'Material': 'Acero Inoxidable 304',
      'Norma': 'DIN 933',
      'Cantidad': '50 piezas',
      'Peso': '250g'
    },
    image_url: 'https://plus.unsplash.com/premium_photo-1677612031058-e90a2a6c03ed?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery_images: [
      'https://plus.unsplash.com/premium_photo-1677612031058-e90a2a6c03ed?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    stock: 150,
  },
  {
    id: '2',
    sku: 'TUR-002',
    name: 'Tuercas M8 Acero Zincado',
    category: 'Fijación',
    price: 32.50,
    description: 'Tuercas hexagonales de acero zincado',
    full_description: 'Tuercas M8 de acero zincado para uso general. Acabado zincado brillante para protección contra la corrosión. Compatible con tornillos M8. Caja de 100 unidades.',
    specifications: {
      'Diámetro': 'M8',
      'Material': 'Acero Zincado',
      'Norma': 'DIN 934',
      'Cantidad': '100 piezas',
      'Peso': '500g'
    },
    image_url: 'https://images.unsplash.com/photo-1614424428282-b2b1e72c6a4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery_images: [
      'https://images.unsplash.com/photo-1614424428282-b2b1e72c6a4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1614424428282-b2b1e72c6a4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    stock: 320,
  },
  {
    id: '3',
    sku: 'PER-003',
    name: 'Pernos de Anclaje M10',
    category: 'Fijación',
    price: 78.99,
    description: 'Pernos de anclaje de alta resistencia',
    full_description: 'Pernos de anclaje M10 fabricados en acero al carbono de alta resistencia. Incluyen tuerca, arandela y anillo de seguridad. Ideal para estructuras pesadas.',
    specifications: {
      'Diámetro': 'M10',
      'Longitud': '80mm',
      'Material': 'Acero al Carbono',
      'Grado': '8.8',
      'Carga Rotura': '85 kN',
      'Cantidad': '10 piezas'
    },
    image_url: 'https://images.unsplash.com/photo-1618090673835-5f7a59837bfe?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery_images: [
      'https://images.unsplash.com/photo-1618090673835-5f7a59837bfe?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    stock: 85,
  },
  {
    id: '4',
    sku: 'HER-004',
    name: 'Juego de Destornilladores 12 Piezas',
    category: 'Herramientas',
    price: 125.00,
    description: 'Conjunto profesional de destornilladores',
    full_description: 'Juego completo de 12 destornilladores con mangos ergodómicos anti-deslizantes. Incluye puntas Phillips y planas de varios tamaños. Estuche de almacenamiento incluido.',
    specifications: {
      'Cantidad': '12 piezas',
      'Tipos': 'Phillips y Planos',
      'Tamaños': 'Múltiples',
      'Material del Mango': 'Plástico Ergónak',
      'Incluye Estuche': 'Sí',
      'Peso': '1.2 kg'
    },
    image_url: 'https://images.unsplash.com/photo-1696685704322-bd3eda6338bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery_images: [
      'https://images.unsplash.com/photo-1696685704322-bd3eda6338bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    stock: 45,
  },
  {
    id: '5',
    sku: 'HER-005',
    name: 'Llave Inglesa Profesional 250mm',
    category: 'Herramientas',
    price: 89.50,
    description: 'Llave ajustable de alta precisión',
    full_description: 'Llave inglesa de 250mm con mandíbula móvil de precisión. Fabricada en acero endurecido para mayor durabilidad. Ideal para fontanería y trabajo general.',
    specifications: {
      'Longitud': '250mm',
      'Capacidad Máxima': '35mm',
      'Material': 'Acero Endurecido',
      'Peso': '450g',
      'Marca de Graduación': 'Grabada'
    },
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery_images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    stock: 62,
  },
  {
    id: '6',
    sku: 'ACC-006',
    name: 'Arandelas Acero Inoxidable M8',
    category: 'Accesorios',
    price: 18.99,
    description: 'Arandelas de distribución de carga',
    full_description: 'Arandelas de acero inoxidable M8 para distribución uniforme de carga. Acabado pulido. Caja de 200 unidades.',
    specifications: {
      'Diámetro Interior': 'M8 (8.4mm)',
      'Diámetro Exterior': '20mm',
      'Material': 'Acero Inoxidable 304',
      'Cantidad': '200 piezas',
      'Peso': '300g'
    },
    image_url: 'https://plus.unsplash.com/premium_photo-1677612031010-5424f4ea90ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery_images: [
      'https://plus.unsplash.com/premium_photo-1677612031010-5424f4ea90ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    stock: 500,
  },
  {
    id: '7',
    sku: 'ACC-007',
    name: 'Anillos de Seguridad M8',
    category: 'Accesorios',
    price: 22.75,
    description: 'Anillos de retención para ejes',
    full_description: 'Anillos de seguridad tipo E para M8. Fabricados en acero al carbono endurecido. Protegen contra la desconexión accidental.',
    specifications: {
      'Diámetro': 'M8',
      'Tipo': 'E (Exteriores)',
      'Material': 'Acero Endurecido',
      'Cantidad': '50 piezas',
      'Peso': '150g'
    },
    image_url: 'https://images.unsplash.com/photo-1704732061018-3ac738176c20?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery_images: [
      'https://images.unsplash.com/photo-1704732061018-3ac738176c20?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    stock: 200,
  },
  {
    id: '8',
    sku: 'HER-008',
    name: 'Taladro Percutor 20V Inalámbrico',
    category: 'Herramientas',
    price: 249.99,
    description: 'Taladro profesional con batería recargable',
    full_description: 'Taladro percutor profesional de 20V con batería de litio y cargador rápido. Motor de alto rendimiento, variable speed. Incluye maletín y accesorios.',
    specifications: {
      'Voltaje': '20V',
      'Capacidad de Batería': '2.0Ah',
      'Velocidad Máxima': '3000 RPM',
      'Par Máximo': '60 Nm',
      'Peso': '1.8 kg',
      'Accesorios Incluidos': 'Maletín, 2 baterías, cargador'
    },
    image_url: 'https://images.unsplash.com/photo-1606676539940-12768ce0e762?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery_images: [
      'https://images.unsplash.com/photo-1606676539940-12768ce0e762?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    stock: 28,
  },
];
