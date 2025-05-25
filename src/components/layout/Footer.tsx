// Arquivo: src/components/sections/Footer.tsx
import { motion } from 'framer-motion';
import { Instagram, Phone, MapPin, Copyright } from 'lucide-react';
import logoImage from '@/assets/images/logo/logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const phone = '+55 64 9221-3731';
  const instagramUsername = 'eliz_banhoetosa';

  return (
    <footer className="bg-lavender-lightest">
      <div className="h-px bg-lavender/30 mb-6" />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <img src={logoImage} alt="Eliz Banho & Tosa" className="h-12 mb-2" />
            <p className="text-charcoal/70 text-sm font-cormorant">
              Cuidando do seu pet com carinho.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center md:items-start space-y-2 text-charcoal/70"
          >
            <h3 className="font-playfair text-lg text-lavender font-semibold">Contato</h3>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin size={16} className="text-lavender" />
              <span className="text-sm">
                Rua 32, nº 56, Santa Inês — Itumbiara / GO
              </span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Phone size={16} className="text-lavender" />
              <a
                href={`tel:${phone.replace(/\D/g, '')}`}
                className="text-sm hover:text-lavender transition-colors"
              >
                {phone}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-start space-y-2 text-charcoal/70"
          >
            <h3 className="font-playfair text-lg text-lavender font-semibold">Siga-nos</h3>
            <a
              href={`https://instagram.com/${instagramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-lavender transition-colors"
            >
              <Instagram size={16} className="text-lavender" />
              @{instagramUsername}
            </a>
          </motion.div>
        </div>

        <div className="border-t border-lavender/20 mt-8 pt-4 text-center space-y-2">
          <p className="flex items-center justify-center gap-1 text-charcoal/70 text-xs">
            <Copyright size={12} className="text-lavender" />
            {currentYear} Eliz Banho & Tosa. Todos os direitos reservados.
          </p>
          <p className="text-charcoal/70 text-xs">
            Feito com ❤️ para amantes de animais
          </p>
          <p className="text-charcoal/40 text-[10px] opacity-60 mt-1">
  <a
    href="https://www.flaticon.com/br/icones-gratis/pata"
    title="pata ícones"
    className="hover:text-lavender transition-colors"
  >
    Pata ícones por Good Ware - Flaticon
  </a>
</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
