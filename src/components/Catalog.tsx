import { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import { Product } from '../lib/supabase';
import { mockProducts } from '../data/mockProducts';
import ProductDetail from './ProductDetail';

const CATEGORIES = ['Todas', ...Array.from(new Set(mockProducts.map((p) => p.category)))];

function CatalogCard({ product, index, onClick }: { product: Product; index: number; onClick: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onClick={onClick}
      whileHover={{ y: -8 }}
      className="bg-zinc-800 rounded-xl overflow-hidden border-2 border-zinc-700 hover:border-green-500 transition-all duration-300 cursor-pointer group"
    >
      <div className="relative aspect-square overflow-hidden bg-zinc-900">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
          >
            Ver Detalles
          </motion.button>
        </div>
      </div>

      <div className="p-4">
        <span className="text-xs font-semibold text-green-500 uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-white mt-2 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-zinc-700">
          <div>
            <p className="text-2xl font-bold text-green-500">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {product.stock > 0 ? `${product.stock} en stock` : 'Agotado'}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Catalog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const matchesCategory = selectedCategory === 'Todas' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <>
      <section id="catalogo" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Catálogo <span className="text-green-500">Completo</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explora nuestro amplio inventario de productos industriales de calidad superior
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 mb-12"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Buscar productos, SKU..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zinc-800 border-2 border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full sm:w-auto flex items-center gap-2 px-6 py-3 bg-zinc-800 border-2 border-zinc-700 rounded-lg text-white font-medium hover:border-green-500 transition-colors"
              >
                {selectedCategory}
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-zinc-800 border-2 border-zinc-700 rounded-lg overflow-hidden z-20 sm:right-auto sm:w-56 shadow-lg"
                >
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-6 py-3 transition-colors ${
                        selectedCategory === category
                          ? 'bg-green-500/20 text-green-400 font-semibold'
                          : 'text-gray-300 hover:bg-zinc-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            <p className="text-sm text-gray-500 text-center sm:text-left">
              Mostrando {filteredProducts.length} de {mockProducts.length} productos
            </p>
          </motion.div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <CatalogCard
                  key={product.id}
                  product={product}
                  index={index}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-gray-400 mb-2">No se encontraron productos</p>
              <p className="text-gray-500">
                Intenta con otros términos de búsqueda o categorías
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
