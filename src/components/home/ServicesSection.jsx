import React from "react";
import { motion } from "framer-motion";
import { Home, Key, Briefcase } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Vente de biens",
      description:
        "Nous vous accompagnons dans la vente de votre maison ou appartement avec une stratégie sur mesure.",
      icon: <Home size={40} className="text-blue-600" />,
    },
    {
      id: 2,
      title: "Location immobilière",
      description:
        "Trouvez rapidement un locataire ou un bien à louer grâce à notre large réseau.",
      icon: <Key size={40} className="text-blue-600" />,
    },
    {
      id: 3,
      title: "Gestion locative",
      description:
        "Confiez-nous la gestion de vos biens pour plus de tranquillité et de rentabilité.",
      icon: <Briefcase size={40} className="text-blue-600" />,
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-blue-600 mb-10"
      >
        Nos Services
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 text-center transition"
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: -5,
              transition: { type: "spring", stiffness: 300, damping: 15 },
            }}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
