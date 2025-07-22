import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Jean Dupont",
    role: "Agent Immobilier",
    photo:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop",
    socials: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Marie Curie",
    role: "Chargée de clientèle",
    photo:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
    socials: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Paul Martin",
    role: "Expert en gestion locative",
    photo:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
    socials: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-blue-600 mb-10"
      >
        Notre Équipe
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl p-6 text-center transition group"
          >
            {/* Photo */}
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Nom et rôle */}
            <h3 className="text-xl font-semibold text-blue-800 mb-1">
              {member.name}
            </h3>
            <p className="text-gray-600 mb-4">{member.role}</p>

            {/* Réseaux sociaux */}
            <div className="flex justify-center space-x-4">
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 hover:text-blue-500 transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={member.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 hover:text-blue-500 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href={member.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-pink-500 hover:text-pink-400 transition"
              >
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
