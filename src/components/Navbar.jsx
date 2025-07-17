import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
    document.dir = i18n.language === "ar" ? "rtl" : "ltr";
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white text-black shadow-lg"
          : "bg-white text-black shadow-md"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* ✅ Larger Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="AOL Logo"
            className="h-14 md:h-16 transition-transform duration-500 hover:scale-110"
          />
        </a>

        {/* ✅ Desktop Menu with RTL Fix */}
        <div className="hidden md:flex space-x-8 rtl:space-x-reverse font-medium text-lg">
          <a
            href="/"
            className="px-2 hover:text-primary transition-colors duration-300"
          >
            {t("navbar.home")}
          </a>
          <a
            href="#about"
            className="px-2 hover:text-primary transition-colors duration-300"
          >
            {t("navbar.about")}
          </a>
          <a
            href="#solutions"
            className="px-2 hover:text-primary transition-colors duration-300"
          >
            {t("navbar.solutions")}
          </a>
          <a
            href="#contact"
            className="px-2 hover:text-primary transition-colors duration-300"
          >
            {t("navbar.contact")}
          </a>
          <button
            onClick={toggleLanguage}
            className="bg-primary text-white px-3 py-1 rounded-lg hover:opacity-80 transition-all duration-300"
          >
            {i18n.language === "en" ? "عربي" : "English"}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center bg-white shadow-lg transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <a
          href="/"
          className="py-2 hover:text-primary transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          {t("navbar.home")}
        </a>
        <a
          href="#about"
          className="py-2 hover:text-primary transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          {t("navbar.about")}
        </a>
        <a
          href="#solutions"
          className="py-2 hover:text-primary transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          {t("navbar.solutions")}
        </a>
        <a
          href="#contact"
          className="py-2 hover:text-primary transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          {t("navbar.contact")}
        </a>
        <button
          onClick={() => {
            toggleLanguage();
            setIsOpen(false);
          }}
          className="mt-2 bg-primary text-white px-4 py-2 rounded-lg hover:opacity-80 transition-all duration-300"
        >
          {i18n.language === "en" ? "عربي" : "English"}
        </button>
      </div>
    </nav>
  );
}
