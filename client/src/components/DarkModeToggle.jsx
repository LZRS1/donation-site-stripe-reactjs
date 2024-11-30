import React, { useState, useEffect } from "react";

function DarkModeToggle() {
  const [isDarkMode, setDarkMode] = useState(false);

  // Verifica si hay un tema guardado en localStorage, si no lo hay, establece "dark" como predeterminado
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "dark");
      setDarkMode(false); // Predeterminado: modo oscuro
    }

    // Cargar el tema guardado de localStorage
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark", "bg-black", "text-[#bd0000]");  // Modo oscuro con texto rojo
      document.documentElement.classList.remove("bg-[#9a0606]", "text-black", "bg-white");  // Eliminar modo claro
      setDarkMode(false);
    } else {
      document.documentElement.classList.remove("dark", "bg-black", "text-[#bd0000]");  // Eliminar modo oscuro
      document.documentElement.classList.add("bg-white", "text-black", "border-black");  // Fondo blanco y texto negro en modo claro
      setDarkMode(true);
    }
  }, []);

  // Cambia el modo cuando se hace clic en el botón
  const darkModeToggle = () => {
    setDarkMode(!isDarkMode);

    if (isDarkMode) {
      // Cambiar a dark mode
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark", "bg-black", "text-[#bd0000]");  // Texto rojo en dark mode
      document.documentElement.classList.remove("bg-white", "text-black", "border-black");  // Eliminar modo claro
    } else {
      // Cambiar a light mode
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark", "bg-black", "text-[#bd0000]");  // Eliminar dark mode y texto rojo
      document.documentElement.classList.add("bg-white", "text-black", "border-black");  // Fondo blanco y texto negro en light mode
    }
  };

  return (
    <button className="p-3 rounded-full" onClick={darkModeToggle}>
      {isDarkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
}

export default DarkModeToggle;
