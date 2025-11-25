import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wrench, Hammer, Bolt, Settings, Package, ArrowRight } from 'lucide-react';

const products = [
  {
    icon: Bolt,
    title: 'Tornillería Industrial',
    category: 'Fijación',
    description: 'Tornillos de alta resistencia para aplicaciones industriales.',
  },
  {
    icon: Wrench,
    title: 'Herramientas Profesionales',
    category: 'Herramientas',
    description: 'Equipamiento profesional para todo tipo de trabajo.',
  },
  {
    icon: Settings,
    title: 'Pernos y Tuercas',
    category: 'Fijación',
    description: 'Sistemas de fijación seguros y duraderos.',
  },
  {
    icon: Hammer,
    title: 'Herramientas Manuales',
    category: 'Herramientas',
    description: 'Calidad y precisión en cada herramienta.',
  },
  {
    icon: Package,
    title: 'Accesorios Industriales',
    category: 'Accesorios',
    description: 'Complementos esenciales para tu taller.',
  },
  {
    icon: Wrench,
    title: 'Soluciones Personalizadas',
    category: 'Servicio',
    description: 'Asesoría especializada para tu proyecto.',
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = product.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-zinc-800 rounded-xl p-6 border-2 border-zinc-700 hover:border-green-500 transition-all duration-300 shadow-lg"
    >
      <div className="mb-4">
        <div className="inline-flex p-3 bg-zinc-900 rounded-lg group-hover:bg-green-500/10 transition-colors duration-300">
          <Icon className="w-8 h-8 text-green-500" />
        </div>
      </div>

      <span className="text-xs font-semibold text-green-500 uppercase tracking-wider">
        {product.category}
      </span>

      <h3 className="text-xl font-bold text-white mt-2 mb-3">
        {product.title}
      </h3>

      <p className="text-gray-400 mb-6 leading-relaxed">
        {product.description}
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 text-green-500 font-semibold group-hover:gap-3 transition-all duration-200"
      >
        Consultar
        <ArrowRight size={16} />
      </motion.button>
    </motion.div>
  );
}

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="productos" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Productos <span className="text-green-500">Destacados</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubre nuestra amplia gama de productos de calidad industrial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
