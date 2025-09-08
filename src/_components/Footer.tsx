"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="dark:bg-gray-900 pt-16 pb-8 border-t border-gray-300 dark:border-gray-700">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + About */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              colo<span className="text-pink-500">shop</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Discover the latest trends in clothing, shoes and accessories.
              Stylish collections, affordable prices.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#shop" className="hover:text-pink-500 transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="#promotion" className="hover:text-pink-500 transition">
                  Promotions
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-pink-500 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-pink-500 hover:text-white transition"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-pink-500 hover:text-white transition"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-pink-500 hover:text-white transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-pink-500 hover:text-white transition"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-600 dark:text-gray-400"
        >
          © {new Date().getFullYear()} coloshop. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
