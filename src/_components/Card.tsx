"use client";

import { motion } from "framer-motion";

// === CONSTANTS ===
const SECTION_TITLE = "New Arrivals";
const CTA = { label: "View All Products", href: "/collection-v1" };

const PRODUCTS = [
  {
    id: 1,
    name: "Regular Fit T-Shirt Men",
    price: "$12.99",
    oldPrice: "$19.99",
    image:
      "https://cdn.prod.website-files.com/65eee8470de5deb3075fa25e/65eee8470de5deb3075fa33c_Product%201.jpg",
    tag: "Sale",
  },
  {
    id: 2,
    name: "Regular Fit T-Shirt Women",
    price: "$19.99",
    oldPrice: "",
    image:
      "https://cdn.prod.website-files.com/65eee8470de5deb3075fa25e/65eee8470de5deb3075fa315_Product%202.jpg",
    tag: "",
  },
  {
    id: 3,
    name: "Oversized Shirt Women",
    price: "$19.99",
    oldPrice: "$29.99",
    image:
      "https://cdn.prod.website-files.com/65eee8470de5deb3075fa25e/65eee8470de5deb3075fa351_Product%203.jpg",
    tag: "Sale",
  },
  {
    id: 4,
    name: "Oversized Shirt Men",
    price: "$19.99",
    oldPrice: "",
    image:
      "https://cdn.prod.website-files.com/65eee8470de5deb3075fa25e/65eee8470de5deb3075fa32a_Product%204.jpg",
    tag: "",
  },
];

// === COMPONENT ===
export default function Products() {
  return (
    <section id="shop" className="py-20 px-6 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold uppercase mb-14 text-gray-900 dark:text-white"
        >
          {SECTION_TITLE}
        </motion.h2>

        {/* Products grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              {/* Image */}
              <div className="overflow-hidden h-[300px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-100 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-4 text-left">
                <h3 className="text-base font-bold text-gray-800 dark:text-gray-100 line-clamp-1">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-gray-900 dark:text-white font-semibold text-base">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Tag */}
              {product.tag && (
                <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {product.tag}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <a
            href={CTA.href}
            className="px-8 py-3 bg-pink-500 text-white rounded-full text-lg font-medium hover:bg-pink-600 transition"
          >
            {CTA.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
