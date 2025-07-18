import React, { useState } from "react";
import { motion } from "framer-motion";

// Données des propriétés
const properties = [
  {
    id: 1,
    title: "Villa Moderne",
    description: "Une villa spacieuse avec piscine et jardin.",
    price: 450000,
    priceLabel: "450 000€",
    category: "Villa",
    location: "Kinshasa, Gombe",
    image:
      "https://images.unsplash.com/photo-1560448071-72a6ad1b582d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Appartement Luxe",
    description: "Appartement avec vue sur le fleuve.",
    price: 250000,
    priceLabel: "250 000€",
    category: "Appartement",
    location: "Kinshasa, Ngaliema",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9b63949?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Maison familiale",
    description: "Maison confortable idéale pour une famille.",
    price: 180000,
    priceLabel: "180 000€",
    category: "Maison",
    location: "Kinshasa, Mont-Ngafula",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Studio étudiant",
    description: "Studio pratique pour jeunes étudiants.",
    price: 80000,
    priceLabel: "80 000€",
    category: "Appartement",
    location: "Kinshasa, Limete",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Loft design",
    description: "Loft spacieux et moderne en plein centre-ville.",
    price: 350000,
    priceLabel: "350 000€",
    category: "Loft",
    location: "Kinshasa, Bandal",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Penthouse exclusif",
    description: "Penthouse avec vue panoramique.",
    price: 600000,
    priceLabel: "600 000€",
    category: "Penthouse",
    location: "Kinshasa, Gombe",
    image:
      "https://images.unsplash.com/photo-1586105251261-72a756497a12?auto=format&fit=crop&w=800&q=80",
  },
  // Ajoute encore plus d'éléments ici...
];

const categories = [
  "Toutes",
  "Villa",
  "Appartement",
  "Maison",
  "Loft",
  "Penthouse",
];
const priceRanges = [
  { label: "Tous", min: 0, max: Infinity },
  { label: "Moins de 200 000€", min: 0, max: 200000 },
  { label: "200 000€ - 400 000€", min: 200000, max: 400000 },
  { label: "Plus de 400 000€", min: 400000, max: Infinity },
];

export default function PropertyList() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [searchQuery, setSearchQuery] = useState("");

  // Pagination
  const itemsPerPage = 3; // Nombre d'éléments par page
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  // Filtrer les propriétés
  const filteredProperties = properties.filter((property) => {
    const categoryMatch =
      selectedCategory === "Toutes" || property.category === selectedCategory;

    const priceMatch =
      property.price >= selectedPriceRange.min &&
      property.price <= selectedPriceRange.max;

    const searchMatch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && priceMatch && searchMatch;
  });

  // Propriétés visibles
  const visibleProperties = filteredProperties.slice(0, visibleCount);

  return (
    <section className="py-12 px-6 bg-gray-50">
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-8 text-blue-600"
      >
        Nos biens disponibles
      </motion.h2>

      {/* Filtres */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        {/* Catégorie */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Prix */}
        <select
          value={selectedPriceRange.label}
          onChange={(e) =>
            setSelectedPriceRange(
              priceRanges.find((range) => range.label === e.target.value)
            )
          }
          className="border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {priceRanges.map((range) => (
            <option key={range.label} value={range.label}>
              {range.label}
            </option>
          ))}
        </select>

        {/* Recherche texte */}
        <input
          type="text"
          placeholder="Rechercher par titre ou localisation..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 text-gray-700 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Liste filtrée */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleProperties.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            Aucun bien ne correspond aux critères.
          </p>
        ) : (
          visibleProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={property.image}
                alt={property.title}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-800">
                  {property.title}
                </h3>
                <p className="text-gray-600">{property.description}</p>
                <p className="text-lg font-bold text-green-600 mt-2">
                  {property.priceLabel}
                </p>
                <p className="text-sm text-gray-500">{property.location}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition">
                  Voir plus
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Bouton Charger Plus */}
      {visibleCount < filteredProperties.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount(visibleCount + itemsPerPage)}
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition"
          >
            Charger plus
          </button>
        </div>
      )}
    </section>
  );
}
