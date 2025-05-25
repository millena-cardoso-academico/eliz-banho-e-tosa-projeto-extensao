import { motion } from 'framer-motion';
import { QUALIFICATIONS } from '@/lib/constants';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-snow">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-full h-full max-w-md mx-auto">
                <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1594839349892-8046ae45d116"
                    alt="Eliziane Vasques" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-aqua-lightest rounded-full -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-lavender-lightest rounded-full -z-10"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-6">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            
            <p className="text-lg mb-4">
              Oi, eu sou a Eliziane, e minha vida ganhou um novo sentido quando decidi transformar minha conexão com os animais em cuidado profissional. Em 2 de maio de 2024, concluí meu primeiro curso de banho e tosa em Minas Gerais — o início de uma jornada que me levou a acumular várias certificações e a montar meu próprio espaço acolhedor. Hoje, trabalho com técnicas aprimoradas e equipamentos de ponta, sempre priorizando o bem-estar, o conforto e a segurança do seu melhor amigo.
            </p>
            
            <p className="text-lg mb-6">
              Agende comigo para proporcionar uma experiência de carinho e cuidado para seu pet.
            </p>
            
            <h3 className="text-xl font-playfair mb-4 text-lavender">Qualificações</h3>
            
            <ul className="space-y-2">
              {QUALIFICATIONS.map((qualification, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-aqua rounded-full mr-3"></span>
                  <span>{qualification}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
