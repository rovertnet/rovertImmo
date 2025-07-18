import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
          alt="À propos de nous"
          className="rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Texte */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          À propos de Rovert Immo
        </h2>
        <p className="text-gray-600 mb-4">
          Depuis plus de 10 ans, <strong>Rovert Immo</strong> accompagne ses
          clients dans la recherche, la vente et la gestion de biens
          immobiliers. Notre équipe d’experts met tout en œuvre pour vous
          proposer des solutions sur mesure et garantir votre satisfaction.
        </p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition">
          En savoir plus
        </button>
      </motion.div>
    </section>
  );
}
