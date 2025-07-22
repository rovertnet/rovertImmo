import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Jean Dupont",
    role: "Client satisfait",
    photo:
      "https://images.unsplash.com/photo-1603415526960-f7e0328b6f97?w=200&h=200&fit=crop",
    text: "Rovert Immo m’a accompagné avec professionnalisme du début à la fin. Je recommande à 100% !",
  },
  {
    id: 2,
    name: "Marie Curie",
    role: "Acheteuse",
    photo:
      "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=200&h=200&fit=crop",
    text: "Grâce à Rovert Immo, j’ai trouvé la maison parfaite rapidement et sans stress.",
  },
  {
    id: 3,
    name: "Paul Martin",
    role: "Locataire",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    text: "Service impeccable et réactif, je suis très content de leur gestion locative.",
  },
];


export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-white py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Ce que disent nos clients
      </h2>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[current].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 rounded-xl p-8 shadow-md text-center"
          >
            <img
              src={testimonials[current].photo}
              alt={testimonials[current].name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-700 italic mb-4">
              “{testimonials[current].text}”
            </p>
            <h3 className="font-semibold text-blue-800">
              {testimonials[current].name}
            </h3>
            <p className="text-sm text-gray-500">
              {testimonials[current].role}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Boutons */}
        <button
          onClick={prevTestimonial}
          aria-label="Précédent"
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 shadow hover:bg-blue-500 transition"
        >
          ‹
        </button>
        <button
          onClick={nextTestimonial}
          aria-label="Suivant"
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 shadow hover:bg-blue-500 transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}
