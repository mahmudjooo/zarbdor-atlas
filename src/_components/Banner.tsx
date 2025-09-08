"use client";
import { motion } from "framer-motion";

const BannerImage =
  "https://amsterdamheritage.com/cdn/shop/files/Bags-Classic_Collection_40b969c1-c813-44a1-be65-daac10e9d1c6.png?v=1734610091&width=750";

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

        {/* O'ngdagi Rasm */}
        <motion.div
          className="absolute right-0 bottom-0 h-full"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={BannerImage}
            alt="Banner Person"
            className="h-[220px] sm:h-[260px] object-cover translate-y-[30%] translate-x-[20%] hidden sm:block"
          />
        </motion.div>
      </div>
    </section>
  );
}
