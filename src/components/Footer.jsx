import React, { useContext } from "react";
import { logo } from "../assets/export.js"; // Make sure the path is correct
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { footerbg, appstore, playstore } from "../assets/export.js"; // Make sure the path is correct
import { SiInstagram } from "react-icons/si";
import { GlobalContext } from "../context/GlobalContext";
import { FaXTwitter } from "react-icons/fa6";
import { RiTiktokFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { theme, setTheme } = useContext(GlobalContext);

  const navigateToLinkedIn = (url) => {
    window.location.href = url;
  };

  return (
    <footer
      className={`${
        theme == "dark" ? "bg-[#222222]" : ""
      }   text-black relative`}
    >
      <div
        className={`py-16 relative p-10 ${
          theme === "dark" ? "bg-[#303030]" : "bg-white"
        }`}
      >
        <div className="flex md:flex-row justify-center items-center lg:px-5">
          <div
            className={`my-5 md:my-0 flex flex-col items-center ${
              theme === "dark" ? " text-white" : "text-black"
            }`}
          >
            <h3
              className={`font-medium mb-3 lg:text-[16px] mt-4 text-center lg:w-[420px] ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Stay up-to-date with the latest Rentwiser news and updates by
              following us on social media
            </h3>
            <div className="flex space-x-4">
              <a
                target="_blank"
                href="https://www.facebook.com/share/1A3MBLGhHN/"
                className={`text-lg hover:text-[#181818] ${
                  theme === "dark"
                    ? "text-white border-white"
                    : "text-[#181818] border-[#181818]"
                } border rounded-full p-3`}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/rentwiserglobal?s=11"
                target="_blank"
                className={`text-lg hover:text-[#181818] ${
                  theme === "dark"
                    ? "text-white border-white"
                    : "text-[#181818] border-[#181818]"
                } border rounded-full p-3`}
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/rentwiser/"
                target="_blank"
                className={`text-lg hover:text-[#181818] ${
                  theme === "dark"
                    ? "text-white border-white"
                    : "text-[#181818] border-[#181818]"
                } border rounded-full p-3`}
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.tiktok.com/@rentwiser.com?lang=en&is_from_webapp=1&sender_device=mobile&sender_web_id=7391764108955665937"
                target="_blank"
                className={`text-lg hover:text-[#181818] ${
                  theme === "dark"
                    ? "text-white border-white"
                    : "text-[#181818] border-[#181818]"
                } border rounded-full p-3`}
              >
                <RiTiktokFill />
              </a>
              <a
                href="https://www.instagram.com/rentwiser?igsh=aGg3dTl1YjFhdHN6"
                target="_blank"
                className={`text-lg hover:text-[#181818] ${
                  theme === "dark"
                    ? "text-white border-white"
                    : "text-[#181818] border-[#181818]"
                } border rounded-full p-3`}
              >
                <SiInstagram />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`border-t ${
            theme === "dark" ? "border-gray-400" : "border-gray-600"
          } mt-6 pt-10 text-sm ${
            theme === "dark" ? " text-white" : "text-black"
          }`}
        >
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center lg:px-5">
            <div>
              <p
                className={`mt-3 text-sm md:order-1 order-2 ${
                  theme === "dark" ? "text-[#FFFFFF]" : "text-[#565656CC]"
                } md:text-left text-center`}
              >
                Copyright © 2025 rentwiser. All rights reserved.
              </p>
              <div className="mt-2">
                <NavLink
                  to={"/terms"}
                  className={`text-sm underline ${
                    theme === "dark" ? "text-[#FFFFFF]" : "text-[#565656CC]"
                  } md:text-left text-center`}
                >
                  {" "}
                  Terms Condition{" "}
                </NavLink>
                <NavLink
                  to={"/policy"}
                  className={`text-sm ml-4 underline ${
                    theme === "dark" ? "text-[#FFFFFF]" : "text-[#565656CC]"
                  } md:text-left text-center`}
                >
                  {" "}
                  Privacy Policy{" "}
                </NavLink>
              </div>
            </div>
            <div className="flex justify-end items-center md:items-end flex-col md:order-2 order-1">
              <h3
                className={`text-[20px] font-[600] ${
                  theme === "dark" ? " text-white" : "text-black"
                }`}
              >
                We’re always happy to help.
              </h3>
              <a
                href="mailto:info@rentwiser.com"
                className={`mt-3 text-sm text-end ${
                  theme === "dark" ? "text-[#FFFFFF]" : "text-[#565656CC]"
                } text-center`}
              >
                info@rentwiser.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
