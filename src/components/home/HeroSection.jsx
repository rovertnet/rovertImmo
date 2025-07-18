import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  // Parallax effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560185127-6ed8e5c1d2be?auto=format&fit=crop&w=1920&q=80')`,
        }}
      ></motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-bold mb-4"
        >
          Bienvenue chez <span className="text-blue-400">Rovert Immo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white text-lg md:text-xl mb-6 max-w-xl"
        >
          Trouvez le bien immobilier de vos rêves avec des offres exclusives et
          un accompagnement sur mesure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition">
            Découvrir
          </button>
        </motion.div>
      </div>
    </section>
  );
}
