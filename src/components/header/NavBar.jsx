import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-600 px-6 py-3 flex justify-between items-center">
        <h3 className="text-lg text-white font-bold">Bienvenu(e)</h3>
        <div className="text-white flex items-center">
          <img src="/vite.svg" alt="Vite logo" className="h-8 w-8" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600">Rovert Immo</h1>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6">
            <li className="text-blue-800 hover:text-blue-500">
              <a href="/">Home</a>
            </li>
            <li className="text-blue-800 hover:text-blue-500">
              <a href="/about">About</a>
            </li>
            <li className="text-blue-800 hover:text-blue-500">
              <a href="/contact">Contact</a>
            </li>
          </ul>

          {/* Buttons (desktop only) */}
          <div className="hidden md:flex space-x-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500">
              Login
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500">
              Register
            </button>
          </div>

          {/* Mobile burger button */}
          <div
            className="md:hidden flex flex-col justify-between w-8 h-6 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Top line */}
            <motion.span
              className="block h-1 bg-blue-800 rounded"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            {/* Middle line */}
            <motion.span
              className="block h-1 bg-blue-800 rounded"
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            {/* Bottom line */}
            <motion.span
              className="block h-1 bg-blue-800 rounded"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Mobile dropdown with animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden px-6 pb-4 space-y-3 bg-white shadow"
            >
              <ul className="space-y-2">
                <li className="text-blue-800 hover:text-blue-500">
                  <a href="/">Home</a>
                </li>
                <li className="text-blue-800 hover:text-blue-500">
                  <a href="/about">About</a>
                </li>
                <li className="text-blue-800 hover:text-blue-500">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
              <div className="flex flex-col space-y-2 mt-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500">
                  Login
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500">
                  Register
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
