import React from "react";
import { motion } from "framer-motion";

// Liste des logos partenaires (URLs publiques ou locales)
const partners = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png", // ✅ nouveau lien Tesla valide
];


export default function PartnersSection() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Nos Partenaires
      </h2>

      <div className="relative w-full">
        <motion.div
          className="flex gap-8 animate-slide"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // Vitesse du défilement
            ease: "linear",
          }}
        >
          {/* On double la liste pour un effet infini */}
          {[...partners, ...partners].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-20 flex justify-center items-center bg-white rounded-lg shadow-md p-2"
            >
              <img
                src={logo}
                alt={`Partenaire ${index + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
