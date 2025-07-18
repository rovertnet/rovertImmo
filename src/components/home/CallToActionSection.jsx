import React from "react";
import { motion } from "framer-motion";

export default function CallToActionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-blue-600 text-white text-center px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Prêt(e) à concrétiser votre projet immobilier ?
      </h2>
      <p className="text-lg mb-8">
        Contactez-nous dès aujourd’hui et parlons de votre futur !
      </p>
      <a
        href="/contact"
        className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full text-lg hover:bg-blue-100 transition"
      >
        Contactez-nous
      </a>
    </motion.section>
  );
}
