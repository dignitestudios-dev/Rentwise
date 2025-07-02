import React, { useContext, useEffect, useState } from "react";
import { logo } from "../assets/export";
import { IoMoon } from "react-icons/io5";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { GlobalContext } from "../context/GlobalContext";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useContext(GlobalContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(theme, "theme");

  const location = useLocation();
  const navigate = useNavigate();
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

  const navigateToLinkedIn = (url) => {
    window.location.href = url;
  };

  return (
    <div className="bg-transparent relative text-black flex flex-col items-center pt-8">
      <nav className="flex items-center justify-between w-full px-4 md:px-10 lg:px-36 text-sm">
        <div className="flex items-center mb-2 md:mb-0 pb-1">
          <img src={"/logo.png"} alt="Logo" className="h-10 md:h-20" />
        </div>

        <div className="hidden md:flex flex-1 justify-center mb-2 ml-14">
          <ul
            className={`flex space-x-8 md:space-x-16 lg:space-x-24  ${
              theme == "dark" ? "text-white" : "text-black  "
            }  font-normal`}
          >
            <li
              className="hover:underline hover:decoration-[#1E2EDE] hover:decoration-2 cursor-pointer"
              onClick={() => handleNavClick("home")}
            >
              Home
            </li>
            <li
              className="hover:underline hover:decoration-[#1E2EDE] hover:decoration-2 cursor-pointer"
              onClick={() => handleNavClick("aboutus")}
            >
              About Us
            </li>
            <li
              className="hover:underline hover:decoration-[#1E2EDE] hover:decoration-2 cursor-pointer"
              onClick={() => handleNavClick("features")}
            >
              Features
            </li>
            <li
              className="hover:underline hover:decoration-[#1E2EDE] hover:decoration-2 cursor-pointer"
              onClick={() => handleNavClick("testimonials")}
            >
              Testimonials
            </li>
            <li
              className="hover:underline hover:decoration-[#1E2EDE] hover:decoration-2 cursor-pointer"
              onClick={() => handleNavClick("contactus")}
            >
              Contact Us
            </li>
          </ul>
        </div>

        <div className="w-auto flex gap-3 me-5 justify-start items-center">
          <button
            aria-label="button"
            name="theme-toggle"
            type="button"
            onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
            className={`${
              theme == "light" ? "bg-[#1E2EDE]/[0.18]" : "bg-[#A9A1D7]/[0.18]"
            } rounded-full transition-all duration-300  w-[50px] lg:w-[70px] h-[30px] lg:h-[37.5px] p-[4px] flex justify-start items-center`}
          >
            <span
              className={`h-6 w-6 lg:h-8 lg:w-8 text-xl text-white transition-all duration-300 rounded-full flex items-center justify-center ${
                theme == "light"
                  ? "translate-x-0 bg-[#1E2EDE]"
                  : "translate-x-[calc(100%-28%)] lg:translate-x-[calc(100%-3%)] bg-[#342A6D]"
              } `}
            >
              {theme == "light" ? (
                <BsFillBrightnessHighFill className="text-lg" />
              ) : (
                <IoMoon />
              )}
            </span>
          </button>

          <button
            aria-label="button"
            type="button"
            name="menu-toggle"
            onClick={() => toggleMenu()}
            className="flex lg:hidden h-4 lg:h-auto"
          >
            <img
              src={theme == "light" ? "/hamburger.webp" : "/menu-dark.webp"}
              className="h-full"
              height={28}
              width={34}
              alt="hamburger-icon"
              title="hamburger-icon"
            />
          </button>

          {/* <button
          className="md:hidden flex items-center justify-end focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button> */}
        </div>
        {/* to='https://www.linkedin.com/company/rentwiser/' target='_blank' */}
        <div className="hidden md:flex mb-2">
          <button
            onClick={() =>
              navigateToLinkedIn("https://www.linkedin.com/company/rentwiser/")
            }
            className="bg-[#1E2EDE] text-white px-5 py-2 rounded-full font-medium hover:bg-gray-200 w-[188px] h-[40px]"
          >
            Follow Us On <span className="font-bold">LinkedIn</span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#0D1B2A]  text-black w-full py-4 px-4">
          <ul className="flex flex-col space-y-4 items-center justify-center uppercase">
            <li
              className="hover:underline cursor-pointer"
              onClick={() => handleNavClick("home")}
            >
              Home
            </li>
            <li
              className="hover:underline cursor-pointer"
              onClick={() => handleNavClick("aboutus")}
            >
              About Us
            </li>
            <li
              className="hover:underline cursor-pointer"
              onClick={() => handleNavClick("features")}
            >
              Features
            </li>
            <li
              className="hover:underline cursor-pointer"
              onClick={() => handleNavClick("testimonials")}
            >
              Testimonials
            </li>
            <li
              className="hover:underline cursor-pointer"
              onClick={() => handleNavClick("contactus")}
            >
              Contact Us
            </li>
          </ul>
          <div className="flex justify-center mt-2">
            <button
              onClick={()=>
                navigateToLinkedIn("https://www.linkedin.com/company/rentwiser/")
              }
              className="bg-[#1E2EDE] text-white px-5 py-2 rounded-full font-medium hover:bg-gray-200 md:w-[188px] h-[40px]"
            >
              Follow Us On <span className="font-bold">LinkedIn</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
