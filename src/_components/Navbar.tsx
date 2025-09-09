"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/shared/mode-toggle";

// === CONSTANTS ===
const LOGO = {
  name: "colo",
  highlight: "shop",
};

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "New-Collection", href: "#new-collection" },
  { label: "Collection", href: "#collection" },
  { label: "Contact", href: "#contact" },
];

// === NAVBAR COMPONENT ===
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="shadow-md backdrop-blur-2xl"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.a
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              href="#home"
              className="text-3xl font-extrabold tracking-wide text-gray-900 dark:text-gray-100"
            >
              {LOGO.name}
              <span className="text-pink-500">{LOGO.highlight}</span>
            </motion.a>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-10">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
                  },
                }}
                className="flex gap-6 text-gray-800 dark:text-gray-200 text-lg font-medium"
              >
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { y: -10, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                  >
                    <a
                      href={item.href}
                      className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-pink-500 after:transition-all hover:after:w-full hover:text-pink-500"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* User Icons */}

              <ModeToggle />
            </nav>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-800 dark:text-gray-200"
                onClick={() => setIsOpen(true)}
              >
                <Menu />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/50 dark:bg-white/10"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 w-full bg-white dark:bg-gray-900 text-black dark:text-white p-6 shadow-xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold">Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <X />
                </Button>
              </div>

              <ul className="flex flex-col gap-4">
                {NAV_ITEMS.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
export default Navbar;
