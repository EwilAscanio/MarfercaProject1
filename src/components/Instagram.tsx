import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Instagram as InstagramIcon, Play } from 'lucide-react';

const reels = [
  {
    id: 1,
    thumbnail: 'https://images.pexels.com/photos/1023828/pexels-photo-1023828.jpeg?auto=compress&cs=tinysrgb&w=400&h=711',
    title: 'Nuevos productos en stock',
  },
  {
    id: 2,
    thumbnail: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=400&h=711',
    title: 'Herramientas profesionales',
  },
  {
    id: 3,
    thumbnail: 'https://images.pexels.com/photos/1477606/pexels-photo-1477606.jpeg?auto=compress&cs=tinysrgb&w=400&h=711',
    title: 'Calidad garantizada',
  },
  {
    id: 4,
    thumbnail: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=400&h=711',
    title: 'Soluciones industriales',
  },
];

function ReelCard({ reel, index }: { reel: typeof reels[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group"
    >
      <img
        src={reel.thumbnail}
        alt={reel.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="bg-green-500 rounded-full p-6">
          <Play size={32} className="text-white fill-white" />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white font-semibold text-lg">{reel.title}</h3>
      </div>

      <div className="absolute top-4 right-4">
        <InstagramIcon size={24} className="text-white" />
      </div>
    </motion.div>
  );
}

export default function Instagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="instagram" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <InstagramIcon size={40} className="text-green-500" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Síguenos en <span className="text-green-500">Instagram</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Mantente al día con nuestros productos y novedades
          </p>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200"
          >
            <InstagramIcon size={20} />
            @marferca.ca
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel, index) => (
            <ReelCard key={reel.id} reel={reel} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
