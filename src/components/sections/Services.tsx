import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bath, Scissors, Dog } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  isPopular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  isPopular
}) => {
  const IconComponent = () => {
    switch (icon) {
      case 'Bath':
        return <Bath className="text-aqua" size={32} />;
      case 'Scissors':
        return <Scissors className="text-aqua" size={32} />;
      case 'Dog':
        return <Dog className="text-aqua" size={32} />;
      default:
        return <Bath className="text-aqua" size={32} />;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-xl shadow-lg p-6 relative ${isPopular ? 'border-2 border-lavender' : ''}`}
    >
      {isPopular && (
        <span className="absolute -top-4 right-4 bg-gradient-to-r from-lavender to-aqua text-white text-sm py-1 px-4 rounded-full">
          Mais Popular
        </span>
      )}
      
      <div className="w-16 h-16 bg-aqua-lightest rounded-full flex items-center justify-center mb-6 mx-auto">
        <IconComponent />
      </div>
      
      <h3 className="text-xl font-playfair font-semibold text-center mb-2">{title}</h3>
      <p className="text-center text-gray-600 mb-4">{description}</p>

      {/* Preço removido conforme solicitado */}
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-charcoal/80">
            Oferecemos uma variedade de serviços para deixar seu pet limpo, bonito e feliz
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service, index) => {
            const description =
              service.title === 'Pet Sitter'
                ? 'Atualizações constantes do seu pet e cuidados personalizados.'
                : service.description;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={description}
                  isPopular={service.isPopular}
                />
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-lg mb-4">Temos outros serviços especiais:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-lavender-lightest text-lavender-dark px-4 py-2 rounded-full">Hidratação</span>
            <span className="bg-lavender-lightest text-lavender-dark px-4 py-2 rounded-full">Perfumaria</span>
            <span className="bg-lavender-lightest text-lavender-dark px-4 py-2 rounded-full">Corte de Unhas</span>
            <span className="bg-lavender-lightest text-lavender-dark px-4 py-2 rounded-full">Limpeza de Ouvidos</span>
            <span className="bg-lavender-lightest text-lavender-dark px-4 py-2 rounded-full">Escovação de Dentes</span>
            <span className="bg-lavender-lightest text-lavender-dark px-4 py-2 rounded-full">Tosa Higiênica</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
