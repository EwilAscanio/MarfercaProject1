import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Instagram as InstagramIcon } from 'lucide-react';

const instagramPosts = [
  'https://www.instagram.com/p/DK-Es_3urN-/',
  'https://www.instagram.com/p/DJHy-FhS9-5/',
  'https://www.instagram.com/p/DDaPBw2SOnn/',
  'https://www.instagram.com/p/C_jVQEVPTdq/',
];

function InstagramEmbed({ url }: { url: string }) {
  return (
    <div className="flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ background: '#FFF', border: '0', borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '380px', minWidth: '326px', padding: '0', width: 'calc(100% - 2px)' }}
      />
    </div>
  );
}

export default function Instagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, [isInView]);

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
            href="https://www.instagram.com/tornillosmarferca/?hl=es-la"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200"
          >
            <InstagramIcon size={20} />
            @tornillosmarferca
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramPosts.map((url, index) => (
            <InstagramEmbed key={url} url={url} />
          ))}
        </div>
      </div>
    </section>
  );
}
