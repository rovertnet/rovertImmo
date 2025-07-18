import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react"; // Icônes modernes

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800 text-white py-8 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Nom */}
        <h3 className="text-2xl font-bold">Rovert Immo</h3>

        {/* Liens rapides */}
        <ul className="flex space-x-6 text-gray-300">
          <li className="hover:text-white transition">
            <a href="/">Accueil</a>
          </li>
          <li className="hover:text-white transition">
            <a href="/about">À propos</a>
          </li>
          <li className="hover:text-white transition">
            <a href="/contact">Contact</a>
          </li>
        </ul>

        {/* Réseaux sociaux */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="hover:text-blue-400 transition"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="#"
            className="hover:text-pink-400 transition"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="#"
            className="hover:text-sky-400 transition"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Rovert Immo. Tous droits réservés.
      </div>
    </motion.footer>
  );
}
