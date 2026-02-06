import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeController = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label 
      className={`swap swap-rotate btn btn-circle shadow-xl z-50 hover:scale-110 transition-transform border-none
        ${theme === 'dark' 
          ? 'bg-white text-black hover:bg-gray-200' // En Dark: Botón Blanco, Icono Negro
          : 'bg-gray-900 text-white hover:bg-gray-700' // En Light: Botón Negro, Icono Blanco
        }
      `}
    >
      
      {/* Input para controlar el estado del swap */}
      <input 
        type="checkbox" 
        onChange={toggleTheme} 
        checked={theme === "light"} 
      />
      
      {/* ICONO LUNA (Se muestra cuando el tema es LIGHT) */}
      {/* Al ser el tema Light, el botón es negro y el texto blanco, así que la luna será blanca */}
      <Moon size={24} className="swap-on fill-current" />
      
      {/* ICONO SOL (Se muestra cuando el tema es DARK) */}
      {/* Al ser el tema Dark, el botón es blanco y el texto negro, así que el sol será negro */}
      <Sun size={24} className="swap-off fill-current" />
      
    </label>
  );
};

export default ThemeController;