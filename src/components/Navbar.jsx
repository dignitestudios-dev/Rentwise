import React, { useContext, useEffect, useState } from "react";
import { IoMoon, IoClose } from "react-icons/io5";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalContext";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, setTheme } = useContext(GlobalContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (location.pathname === "/" && hash) {
      const id = hash.replace("#", "");
      scrollToSection(id);
    }
  }, [location]);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "aboutus" },
    { name: "Features", id: "features" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact Us", id: "contactus" },
  ];

  return (
    <>
      {/* Dynamic Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#2438D8] via-[#4F46E5] to-[#8CA0FF] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(36,56,216,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`relative w-full z-40 transition-all duration-300 ${
          scrolled
            ? theme === "dark"
              ? "bg-[#080B11]/95 backdrop-blur-md shadow-lg py-2.5 sm:py-3 border-b border-slate-800/80"
              : "bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 border-b border-slate-100"
            : isOpen
            ? theme === "dark"
              ? "bg-[#0F172A] shadow-md py-4 sm:py-5"
              : "bg-white shadow-sm py-4 sm:py-5"
            : "bg-transparent py-4 sm:py-5"
        } ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleNavClick("home")}
            className="cursor-pointer flex items-center gap-2 group shrink-0"
          >
            <img
              src="/logo.png"
              alt="Rentwiser Logo"
              className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Desktop Navigation Links - Shown on lg screens (>= 1024px) for generous spacing */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm xl:text-[15px] font-medium transition-colors duration-200 relative py-1 hover:text-[#2438D8] ${
                  theme === "dark" ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            {/* Theme Toggle Button */}
            <button
              aria-label="Toggle Theme"
              name="theme-toggle"
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`relative rounded-full transition-colors duration-300 w-12 sm:w-14 h-7 sm:h-8 p-1 flex items-center ${
                theme === "dark" ? "bg-slate-800 ring-1 ring-slate-700" : "bg-[#EEF1FF] ring-1 ring-[#2438D8]/20"
              }`}
            >
              <span
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-white text-xs shadow-md transition-transform duration-300 ${
                  theme === "dark"
                    ? "translate-x-5 sm:translate-x-6 bg-[#2438D8]"
                    : "translate-x-0 bg-[#2438D8]"
                }`}
              >
                {theme === "dark" ? <IoMoon className="text-[11px] sm:text-xs" /> : <BsFillBrightnessHighFill className="text-[11px] sm:text-xs" />}
              </span>
            </button>

            {/* LinkedIn CTA Button - Shown on desktop */}
            <a
              href="https://www.linkedin.com/company/rentwiser/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-[#2438D8] to-[#1726A8] hover:from-[#1726A8] hover:to-[#2438D8] text-white text-xs xl:text-sm font-semibold px-4 xl:px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:shadow-[#2438D8]/30 transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <FaLinkedinIn className="text-xs sm:text-sm" />
              <span>Follow Us On LinkedIn</span>
            </a>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              aria-label="Toggle navigation menu"
              type="button"
              onClick={toggleMenu}
              className={`p-2 rounded-xl lg:hidden transition-colors ${
                theme === "dark"
                  ? "text-white bg-slate-800 hover:bg-slate-700"
                  : "text-slate-800 bg-slate-100 hover:bg-slate-200"
              }`}
            >
              {isOpen ? <IoClose className="text-xl sm:text-2xl" /> : <HiMenuAlt3 className="text-xl sm:text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Menu Dropdown */}
        {isOpen && (
          <div
            className={`relative z-50 lg:hidden px-6 pt-4 pb-6 mt-3 border-b shadow-xl transition-all duration-300 animate-fadeIn ${
              theme === "dark"
                ? "bg-[#0F172A] border-slate-800 text-white"
                : "bg-white border-slate-100 text-slate-900"
            }`}
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-2.5 px-3 rounded-xl text-base font-medium transition-colors ${
                    theme === "dark"
                      ? "hover:bg-slate-800 hover:text-[#EEF1FF]"
                      : "hover:bg-[#EEF1FF] hover:text-[#2438D8]"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-3 border-t border-slate-200/50 dark:border-slate-800">
                <a
                  href="https://www.linkedin.com/company/rentwiser/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#2438D8] hover:bg-[#1726A8] text-white text-sm font-semibold py-3 rounded-full shadow-md"
                >
                  <FaLinkedinIn />
                  <span>Follow Us On LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
