// Arquivo: src/components/sections/HeroCarousel.tsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import petSitter from "@/assets/images/videos/pet-sitter.mp4";
import petShop from "@/assets/images/videos/pet-shop.mp4";

export default function HeroCarousel() {
  const slides = [petSitter, petShop];
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);

  const openModal = (src: string) => {
    setCurrentSrc(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentSrc(null);
  };

  return (
    <section id="hero" className="relative w-full h-full overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <video
                src={src}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => openModal(src)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {modalOpen && currentSrc && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeModal}
          >
            &times;
          </button>
          <video
            src={currentSrc}
            controls
            autoPlay
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </section>
  );
}
