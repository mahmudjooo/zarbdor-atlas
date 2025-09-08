"use client";

import { HatGlasses, Shirt } from "lucide-react"; // kiyimga oid iconlar
import { Button } from "@/components/ui/button";
import { useTheme } from "./provider/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Tema toggle qilish
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative rounded-full bg-pink-500/10 hover:bg-pink-500/20 transition shadow-md"
    >
      {/* Light Mode Icon */}
      <Shirt
        className={`h-5 w-5 text-pink-500 transition-all ${
          theme === "dark"
            ? "scale-0 rotate-90 opacity-0"
            : "scale-100 rotate-0 opacity-100"
        }`}
      />

      {/* Dark Mode Icon */}
      <HatGlasses
        className={`absolute h-5 w-5 text-yellow-400 transition-all ${
          theme === "dark"
            ? "scale-100 rotate-0 opacity-100"
            : "scale-0 -rotate-90 opacity-0"
        }`}
      />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
