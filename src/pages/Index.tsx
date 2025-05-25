import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "@/components/layout/Header";
import HeroCarousel from "@/components/sections/HeroCarousel";
import Gallery from "@/components/sections/Gallery";
import BeforeAfter from "@/components/sections/BeforeAfter";
import AboutMe from "@/components/sections/AboutMe";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Location from "@/components/sections/Location";
import Footer from "@/components/layout/Footer";

const Index = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1 });
    const handleHashLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      const href = target.getAttribute("href") || "";
      if (target.tagName === "A" && href.startsWith("#")) {
        event.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };
    document.addEventListener("click", handleHashLinkClick);
    return () => document.removeEventListener("click", handleHashLinkClick);
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className="overflow-x-hidden"
    >
      <Header />
      <main>
        <HeroCarousel />
        <Gallery />
        <BeforeAfter />
        <AboutMe />
        <Services />
        <Contact />
        <Location />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
