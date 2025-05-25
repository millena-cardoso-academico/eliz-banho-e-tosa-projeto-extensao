import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/images/logo/logo.png';
import { NAV_ITEMS } from '@/lib/constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="relative w-full">
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5"
          alt="Banner de um pet shop elegante"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 to-transparent">
          <div className="container mx-auto h-full flex items-center justify-center px-4">
            <div className="text-center">
              <motion.img 
                src={logo}
                alt="Eliz Banho e Tosa"
                className="w-48 sm:w-56 md:w-64 lg:w-80 mx-auto mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              />
              <motion.h2 
                className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl font-playfair mb-3 sm:mb-4 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Carinho e cuidado que seu pet merece
              </motion.h2>
              <motion.a 
                href="#contact" 
                className="inline-block bg-gradient from-aqua to-lavender hover:from-lavender hover:to-aqua text-white font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300 shadow-lg text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Agende Agora
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <nav 
        className={`w-full py-3 sm:py-4 px-4 sm:px-6 ${
          isScrolled 
            ? 'fixed top-0 left-0 right-0 bg-white shadow-md z-40 transition-all duration-300' 
            : 'absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {isScrolled && (
            <Link to="/" className="flex items-center">
              <img 
                src={logo}
                alt="Eliz Banho e Tosa"
                className="h-8 sm:h-10 lg:h-12"
              />
            </Link>
          )}

          <div className={`hidden md:flex justify-${isScrolled ? 'end' : 'center'} w-full`}>
            <ul className="flex space-x-6 lg:space-x-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="font-cormorant text-base lg:text-lg hover:text-aqua transition-colors text-charcoal"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-charcoal/70 hover:text-charcoal p-1"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            <motion.div 
              className="absolute top-0 right-0 h-full w-64 bg-white shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-100">
                <img 
                  src={logo}
                  alt="Eliz Banho e Tosa"
                  className="h-8"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-charcoal/70 hover:text-charcoal p-1"
                  aria-label="Fechar menu"
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="py-4">
                {NAV_ITEMS.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a 
                      href={item.href}
                      className="block font-cormorant text-lg py-3 px-6 text-charcoal hover:bg-lavender-lightest hover:text-aqua"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
