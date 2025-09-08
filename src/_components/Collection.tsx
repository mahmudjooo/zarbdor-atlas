"use client";

import { motion } from "framer-motion";

// === CONSTANTS ===
const collections = [
  {
    id: 1,
    title: "Classic Winter Collection",
    desc: "Cozy sweaters, warm jackets, and timeless designs for the cold season. Our winter edit combines comfort with elegance, offering versatile layers that work for both casual days and evening outings. Discover pieces that keep you warm without sacrificing your style.",
    image:
      "https://img.freepik.com/free-photo/lovely-couple-give-five-each-other-agreement-success-concept_231208-9387.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    title: "Summer Essentials",
    desc: "Light fabrics and fresh styles made for sunny days. From breathable shirts to everyday staples, our summer collection makes dressing effortless. Embrace the season with minimal looks, soft colors, and airy textures designed to keep you cool and confident all day long.",
    image:
      "https://img.freepik.com/free-photo/smiling-young-couple-showing-ok-sign-gesture-blue-background_23-2148056282.jpg?semt=ais_hybrid&w=740",
  },
];

export default function Collection() {
  return (
    <section id="collection" className="py-16 bg-gray-50 dark:bg-gray-900 ">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold uppercase text-center text-gray-900 dark:text-white"
        >
          Collection
        </motion.h2>

        {/* Collections List */}
        <div className="mt-12 flex flex-col gap-16">
          {collections.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-10`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-2xl w-full object-cover"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-2xl md:text-3xl font-bold uppercase text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
