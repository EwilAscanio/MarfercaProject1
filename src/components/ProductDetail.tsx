import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../lib/supabase';

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const images = product.gallery_images && product.gallery_images.length > 0
    ? product.gallery_images
    : [product.image_url || ''];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-zinc-800"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-zinc-900 border-b border-zinc-800">
            <h2 className="text-2xl font-bold text-white">{product.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <X className="text-gray-400" size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative mb-4 bg-zinc-800 rounded-xl overflow-hidden aspect-square group">
                <img
                  src={images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronRight size={24} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex
                              ? 'bg-green-500 w-8'
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex
                          ? 'border-green-500'
                          : 'border-zinc-700 hover:border-zinc-600'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <span className="text-sm font-semibold text-green-500 uppercase tracking-wider">
                  {product.category}
                </span>
                <p className="text-xs text-gray-500 mt-1">SKU: {product.sku}</p>
              </div>

              <div>
                <p className="text-4xl font-bold text-white mb-2">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-green-500/20 rounded-lg p-3">
                    <p className="text-sm text-green-400">
                      Stock: <span className="font-bold">{product.stock} unidades</span>
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg shadow-green-500/30"
                  >
                    <ShoppingCart size={20} />
                    Comprar
                  </motion.button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2">Descripción</h3>
                <p className="text-gray-400 leading-relaxed">
                  {product.full_description || product.description}
                </p>
              </div>

              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Info size={20} className="text-green-500" />
                    <h3 className="text-lg font-bold text-white">
                      Especificaciones Técnicas
                    </h3>
                  </div>
                  <div className="space-y-3 bg-zinc-800 rounded-lg p-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-400 font-medium">{key}</span>
                        <span className="text-white font-semibold">
                          {typeof value === 'boolean' ? (value ? 'Sí' : 'No') : String(value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
