"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6 py-24"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Get in <span className="text-pink-500">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have a question about our
            products, pricing, or anything else, our team is ready to answer all
            your questions.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Address
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                123 Fashion Street, Tashkent, Uzbekistan
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                support@coloshop.com
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                +998 90 123 45 67
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-md space-y-8 items-center"
          >
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-3 font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-3 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-3 font-medium">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg transition">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
