import React from "react";
import { motion } from "framer-motion";

const articles = [
  {
    id: 1,
    title: "5 conseils pour vendre votre maison rapidement",
    summary:
      "Découvrez comment mettre en valeur votre bien immobilier pour séduire les acheteurs potentiels.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop",
    link: "/blog/vendre-votre-maison-rapidement",
  },
  {
    id: 2,
    title: "Les erreurs à éviter lors d’un achat immobilier",
    summary:
      "Évitez ces pièges courants pour réussir votre investissement immobilier sans stress.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop",
    link: "/blog/erreurs-achat-immobilier",
  },
  {
    id: 3,
    title: "Pourquoi confier votre bien à une agence ?",
    summary:
      "Découvrez les avantages de passer par une agence pour louer ou vendre votre bien.",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?w=600&h=400&fit=crop",
    link: "/blog/confier-bien-agence",
  },
];


export default function BlogSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-blue-600 mb-10"
      >
        Nos Articles Récents
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-3">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden group transition"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Contenu */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4">{article.summary}</p>
              <a
                href={article.link}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition"
              >
                Lire plus
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
