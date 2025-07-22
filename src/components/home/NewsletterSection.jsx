import React from "react";
import { motion } from "framer-motion";

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Abonnez-vous à notre Newsletter
        </motion.h2>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 text-lg"
        >
          Recevez les dernières offres et actualités de Rovert Immo directement
          dans votre boîte mail.
        </motion.p>

        {/* Formulaire */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Merci pour votre inscription ! ✅");
          }}
        >
          <input
            type="email"
            required
            placeholder="Entrez votre e-mail"
            className="w-full bg-white sm:w-2/3 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            S’abonner
          </button>
        </motion.form>
      </div>
    </section>
  );
}
