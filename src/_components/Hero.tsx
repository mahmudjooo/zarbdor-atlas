"use client";

import { motion } from "framer-motion";

// === CONSTANTS ===
const HERO_CONTENT = {
  title: "Trendy Fashion for Everyone",
  subtitle:
    "Discover the latest clothing collections, from casual wear to premium outfits. Refresh your wardrobe and show your unique style.",
  cta: "Visit Us Today",
  images: [
    "https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/image-7.svg",
  ],
};

export default function Hero() {
  return (
    <header id="home" className="dark:bg-gray-900  px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto grid max-w-screen-xl min-h-[70vh] w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Chap tarafdagi matn */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left row-start-2 lg:row-auto"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            {HERO_CONTENT.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 md:pr-8 lg:pr-16 xl:pr-28">
            {HERO_CONTENT.subtitle}
          </p>

          <motion.a
            href="#shop"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="inline-block px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-md shadow-md transition"
          >
            {HERO_CONTENT.cta}
          </motion.a>
        </motion.div>

        {/* O‘ng tarafdagi rasm */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <img
            src={HERO_CONTENT.images[0]}
            alt="fashion shopping"
            className="h-64 sm:h-80 md:h-[28rem] lg:h-[36rem] w-full max-w-lg lg:max-w-xl rounded-xl object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </header>
  );
}
