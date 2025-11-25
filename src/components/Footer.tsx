import { Instagram, Facebook, Twitter, Wrench } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Productos', href: '#productos' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="text-green-500" size={32} />
              <span className="text-2xl font-bold text-white">
                Marferca <span className="text-green-500">C.A.</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Soluciones industriales de calidad superior. Construyendo el
              futuro con productos que resisten el tiempo.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-green-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Síguenos
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="bg-zinc-800 p-3 rounded-lg hover:bg-green-500 transition-all duration-200 group"
                  >
                    <Icon
                      size={20}
                      className="text-gray-400 group-hover:text-white transition-colors"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 text-center">
          <p className="text-sm">
            &copy; {currentYear} Tornillería Marferca C.A. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
