import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 9;
const modules = import.meta.glob<{ default: string }>(
  "/src/assets/images/main-gallery/*.{jpg,png}",
  { eager: true }
);
const images = Object.values(modules).map((m) => m.default);

export default function Gallery() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const start = page * ITEMS_PER_PAGE;
  const pageImages = images.slice(start, start + ITEMS_PER_PAGE);

  const prevPage = () => setPage((p) => Math.max(p - 1, 0));
  const nextPage = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  return (
    <section id="gallery" className="py-6 bg-snow">
      <div className="container mx-auto px-4 text-center mb-6">
        <h2 className="text-4xl font-playfair mb-2">
          Nossa{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender to-aqua">
            Galeria
          </span>
        </h2>
        <p className="text-lg text-charcoal/70">
          Conheça um pouco do nosso trabalho e dos nossos amiguinhos de quatro patas
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {pageImages.map((src, idx) => (
            <div
              key={start + idx}
              className="overflow-hidden rounded-xl shadow-lg bg-white aspect-square group"
            >
              <img
                src={src}
                alt={`Foto ${start + idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={prevPage}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextPage}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
