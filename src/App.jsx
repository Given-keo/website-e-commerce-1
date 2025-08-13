// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Simpan preferensi mode di localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Update class HTML saat mode berubah
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
    </div>
  );
};

export default App;
