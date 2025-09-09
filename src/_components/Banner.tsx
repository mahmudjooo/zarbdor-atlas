"use client";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 h-[120px] sm:h-[160px] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 h-full flex items-center justify-between relative">
        {/* Chapdagi Text */}
        <motion.div
          className="z-10 text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-lg sm:text-2xl font-extrabold text-gray-900 dark:text-white">
            Welcome to Our Shop
          </h1>
          <p className="hidden sm:block text-gray-700 dark:text-gray-300 text-sm mt-1">
            Discover the latest trends in clothing and timeless designs!
          </p>
        </motion.div>

        {/* O'ngdagi Kontent */}
        <motion.div
          className="z-0 h-full flex items-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center">
            Wel
            <span className="text-pink-500 ml-1">come</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
