"use client";

import { collections } from "@/constants";

export default function CollectionCards() {
  return (
    <section id="new-collection" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-center text-gray-900 dark:text-white">
          New Collections
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mt-4 mb-10">
          Discover our latest clothing collections with timeless designs and
          perfect fits for every season.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 text-sm font-semibold text-gray-900 dark:text-white uppercase hover:underline"
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
