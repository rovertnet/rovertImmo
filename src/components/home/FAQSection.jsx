import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Comment puis-je mettre en vente mon bien immobilier ?",
    answer:
      "Pour mettre en vente votre bien, contactez notre équipe via le formulaire ou appelez-nous directement. Nous vous guiderons dans toutes les étapes.",
  },
  {
    question: "Proposez-vous des visites virtuelles des biens ?",
    answer:
      "Oui, nous offrons des visites virtuelles pour de nombreux biens afin de faciliter votre choix avant une visite physique.",
  },
  {
    question: "Quels sont vos honoraires pour la gestion locative ?",
    answer:
      "Nos honoraires varient selon le type de bien et les services choisis. Contactez-nous pour un devis personnalisé.",
  },
  {
    question: "Puis-je réserver un bien en ligne ?",
    answer:
      "Bien sûr ! Une fois votre compte créé, vous pouvez réserver un bien directement depuis notre site.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-blue-600 mb-10"
      >
        Questions Fréquentes
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-300 pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between w-full text-left text-blue-800 font-semibold text-lg focus:outline-none"
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
