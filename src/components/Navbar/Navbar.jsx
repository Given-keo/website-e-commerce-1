import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDark(true);
  }, []);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Shop", link: "#shop" },
    { name: "Testimoni", link: "#testimoni" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center font-bold text-gray-800 dark:text-white text-2xl md:text-xl">
          <img src={Logo} alt="Logo" className="w-10 md:w-8"/>
        </a>

        {/* Desktop & Tablet Menu */}
        <div className="hidden md:flex items-center gap-4">
          {menuItems.map((item, idx) => (
            <a key={idx} href={item.link} className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors duration-300">
              {item.name}
            </a>
          ))}

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Pencarian..."
              className="pl-3 pr-10 py-1 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
             w-40 focus:w-64 transition-all duration-300 ease-in-out
             focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 absolute right-3 top-2 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
            </svg>
          </div>

          {/* Dark Mode Toggle */}
          <button onClick={() => setDark(!dark)} className="p-2 rounded transition-all duration-300 hover:scale-110">
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 18a6 6 0 010-12 6 6 0 010 12z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-3">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-3 pr-10 py-1 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-28"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 absolute right-2 top-1.5 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
            </svg>
          </div>

          {/* Dark Mode Toggle */}
          <button onClick={() => setDark(!dark)} className="p-2 rounded transition-all duration-300 hover:scale-110">
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 18a6 6 0 010-12 6 6 0 010 12z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
              </svg>
            )}
          </button>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(true)} className="text-3xl text-gray-700 dark:text-gray-200">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <span className="text-xl font-bold text-gray-800 dark:text-white">Menu</span>
          <button onClick={() => setMenuOpen(false)} className="text-2xl text-gray-700 dark:text-gray-200">
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-4 px-6 py-4">
          {menuItems.map((item, idx) => (
            <a key={idx} href={item.link} onClick={() => setMenuOpen(false)} className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors duration-300">
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
