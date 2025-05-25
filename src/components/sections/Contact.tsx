import { motion } from 'framer-motion';
import { Instagram, MessageSquare } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = '556492213731';
  const instaUser       = 'eliz_banhoetosa';
  const preMessage      = 'Olá, quero saber mais sobre seus serviços!';

  const whatsappHref  = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(preMessage)}`;
  const instagramHref = `https://www.instagram.com/${instaUser}`;

  return (
    <section id="contact" className="py-20 bg-aqua-lightest">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">
            <span className="text-gradient">Agende</span> Aqui
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-charcoal/80">
            Entre em contato conosco e agende um horário para o seu pet
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden h-full"
              whileHover={{ y: -5 }}
            >
              <a 
                href={whatsappHref} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="p-8 flex flex-col items-center justify-center h-full">
                  <div className="mb-6 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <MessageSquare className="text-white" size={32} />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold mb-2 text-center">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    Clique para iniciar uma conversa
                  </p>
                  <span className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full">
                    Agendar pelo WhatsApp
                  </span>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden h-full"
              whileHover={{ y: -5 }}
            >
              <a 
                href={instagramHref} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="p-8 flex flex-col items-center justify-center h-full">
                  <div className="mb-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Instagram className="text-white" size={32} />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold mb-2 text-center">
                    Instagram
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    Visite nosso perfil e envie uma DM
                  </p>
                  <span className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                    Abrir Instagram
                  </span>
                </div>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-lg">Horários de funcionamento</p>
            <p className="text-xl font-medium">Segunda à Sexta: 08h–18h</p>
            <p className="text-xl font-medium">Sábado: 08h–12h</p>
            <p className="text-xl font-medium">Domingo: Fechado</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
