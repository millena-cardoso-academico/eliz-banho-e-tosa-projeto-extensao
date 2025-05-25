import { useState } from 'react';
import { motion } from 'framer-motion';

const modules = import.meta.glob<{ default: string }>(
  '/src/assets/images/antes-depois/*/*.{jpg,png}',
  { eager: true }
);

type FileEntry = { path: string; src: string };
type Card = { before: string; after: string };

const cards: Card[] = Object.entries(modules)
  .map(([path, m]) => ({ path, src: m.default }))
  .reduce((acc, entry) => {
    const parts = entry.path.split('/');
    const folder = parts[parts.length - 2];
    const group = acc.find(g => g.folder === folder);
    if (group) {
      group.items.push(entry);
    } else {
      acc.push({ folder, items: [entry] });
    }
    return acc;
  }, [] as { folder: string; items: FileEntry[] }[])
  .map(({ items }) => {
    const sorted = items.sort((a, b) => a.path.localeCompare(b.path));
    return {
      before: sorted[0].src,
      after: sorted[1]?.src || sorted[0].src
    };
  });

const BeforeAfterCard = ({ beforeImage, afterImage }: { beforeImage: string; afterImage: string }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front rounded-full border-4 border-lavender overflow-hidden relative">
          <img src={beforeImage} alt="Antes" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/70 flex items-end justify-center p-2">
            <p className="text-white/90 text-sm font-medium">Antes</p>
          </div>
        </div>

        <div className="flip-card-back rounded-full border-4 border-aqua overflow-hidden relative">
          <img src={afterImage} alt="Depois" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/70 flex items-end justify-center p-2">
            <p className="text-white/90 text-sm font-medium">Depois</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  return (
    <section id="before-after" className="py-20 bg-lavender-lightest">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">
            Antes & <span className="text-gradient">Depois</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-charcoal/80">
            Transformações dos nossos clientes peludos. Clique nos cards para ver o antes e depois!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {cards.slice(0, 4).map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BeforeAfterCard
                beforeImage={card.before}
                afterImage={card.after}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
