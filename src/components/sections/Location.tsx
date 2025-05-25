// Arquivo: src/components/sections/Location.tsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import localImage from '@/assets/images/local/local.jpg'

const Location: React.FC = () => {
  const [flipped, setFlipped] = useState(false)

  const address = {
    street: 'Rua 32 número 56',
    neighborhood: 'Bairro Santa Inês',
    city: 'Itumbiara',
    state: 'Goiás',
  }

  const embedMapUrl =
    'https://www.google.com/maps?q=Rua+32+56+Bairro+Santa+Inês+Itumbiara+Goiás&output=embed'
  const googleMapsUrl =
    'https://www.google.com/maps?q=Rua+32+56+Bairro+Santa+Inês+Itumbiara+Goiás'
  const wazeUrl =
    'https://waze.com/ul?q=Rua+32+56+Bairro+Santa+Inês+Itumbiara+Goiás'

  return (
    <section id="location" className="py-20 bg-snow">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">
            <span className="text-gradient">Localização</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-charcoal/80">
            Venha nos visitar e conhecer nosso espaço
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Flip card */}
          <div
            className={`flip-card w-full h-[400px] ${flipped ? 'flipped' : ''}`}
          >
            <div className="flip-card-inner">
              {/* Frente */}
              <div className="flip-card-front rounded-xl shadow-lg overflow-hidden relative">
                <img
                  src={localImage}
                  alt="Fachada da Eliz Banho & Tosa"
                  className="w-full h-full object-cover"
                />
                <button
                  className="absolute bottom-4 right-4 px-4 py-2 bg-lavender text-white rounded-full shadow-md z-10"
                  onClick={() => setFlipped(true)}
                >
                  Clique para ver no mapa
                </button>
              </div>

              {/* Verso */}
              <div className="flip-card-back rounded-xl shadow-lg overflow-hidden relative">
                <iframe
                  src={embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização"
                />
                <button
                  className="absolute bottom-4 right-4 px-4 py-2 bg-white text-charcoal rounded-full shadow-md z-10"
                  onClick={() => setFlipped(false)}
                >
                  Clique para ver a imagem do local
                </button>
              </div>
            </div>
          </div>

          {/* Card de detalhes do endereço */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <div className="bg-white rounded-xl shadow-md p-6 inline-block">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="text-lavender mr-2" size={24} />
                <h3 className="font-playfair text-xl">Nosso Endereço</h3>
              </div>

              <div className="space-y-1 mb-6">
                <p>{address.street}</p>
                <p>{address.neighborhood}</p>
                <p>
                  {address.city}, {address.state}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-lavender text-white rounded-full hover:bg-lavender-dark transition-colors"
                >
                  Ver no Google Maps
                </a>
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-aqua text-white rounded-full hover:bg-aqua-dark transition-colors"
                >
                  Navegar pelo Waze
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Location