import React, { useContext } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { RiTiktokFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Footer = () => {
  const { theme } = useContext(GlobalContext);

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/share/1A3MBLGhHN/",
      label: "Facebook",
    },
    {
      icon: <FaXTwitter />,
      href: "https://x.com/rentwiserglobal?s=11",
      label: "Twitter / X",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/company/rentwiser/",
      label: "LinkedIn",
    },
    {
      icon: <RiTiktokFill />,
      href: "https://www.tiktok.com/@rentwiser.com?lang=en&is_from_webapp=1&sender_device=mobile&sender_web_id=7391764108955665937",
      label: "TikTok",
    },
    {
      icon: <SiInstagram />,
      href: "https://www.instagram.com/rentwiser?igsh=aGg3dTl1YjFhdHN6",
      label: "Instagram",
    },
  ];

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#07090E] border-slate-800 text-white"
          : "bg-white border-slate-100 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Social Section */}
        <div className="flex flex-col items-center text-center pb-12">
          <img
            src="/logo.png"
            alt="Rentwiser Logo"
            className="h-10 w-auto mb-4"
          />
          <h3
            className={`text-sm sm:text-base font-medium max-w-md mb-6 ${
              theme === "dark" ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Stay up-to-date with the latest Rentwiser news and platform updates by following us on social media.
          </h3>

          <div className="flex items-center space-x-3">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-200 border ${
                  theme === "dark"
                    ? "border-slate-800 bg-[#111726] text-slate-300 hover:text-white hover:bg-[#2438D8] hover:border-[#2438D8]"
                    : "border-slate-200 bg-[#F8FAFC] text-slate-600 hover:text-white hover:bg-[#2438D8] hover:border-[#2438D8] shadow-sm"
                }`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider and Bottom Row */}
        <div
          className={`border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm ${
            theme === "dark" ? "border-slate-800 text-slate-400" : "border-slate-200/80 text-slate-500"
          }`}
        >
          {/* Copyright & Legal Links */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>© 2025 Rentwiser. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <NavLink
                to="/terms"
                className="hover:text-[#2438D8] transition-colors underline-offset-4 hover:underline"
              >
                Terms of Service
              </NavLink>
              <span>•</span>
              <NavLink
                to="/policy"
                className="hover:text-[#2438D8] transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </NavLink>
            </div>
          </div>

          {/* Support Info */}
          <div className="text-center sm:text-right">
            <p className="font-semibold text-slate-700 dark:text-slate-200">
              We’re always happy to help.
            </p>
            <a
              href="mailto:info@rentwiser.com"
              className="text-[#2438D8] hover:underline font-medium"
            >
              info@rentwiser.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
