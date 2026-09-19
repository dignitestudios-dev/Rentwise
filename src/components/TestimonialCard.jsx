import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { FaQuoteLeft, FaStar, FaCheckCircle } from "react-icons/fa";
import { SpotlightCard } from "./SpotlightCard";

const IMAGE_LIST = [
  "/girl1.jpeg",
  "/man1.jpeg",
  "/girl2.jpeg",
  "/man2.jpeg",
  "/man3.jpeg",
  "/man4.jpeg",
  "/man5.jpeg",
];

const TestimonialCard = ({ reviewBody, authorName, jobtitle, index }) => {
  const { theme } = useContext(GlobalContext);
  const avatarSrc = IMAGE_LIST[index % IMAGE_LIST.length];

  return (
    <SpotlightCard
      className={`w-full h-full min-h-[260px] p-7 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative group ${
        theme === "dark"
          ? "bg-gradient-to-b from-[#111726] to-[#0E1422] border-slate-800 text-white shadow-xl shadow-black/40 hover:border-[#2438D8]/50"
          : "bg-white border-slate-100 text-slate-800 shadow-sm hover:shadow-xl hover:border-blue-100"
      }`}
    >
      <div className="relative z-20">
        {/* Top Row: Quote Badge & 5-Star Rating */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-9 h-9 rounded-xl bg-[#EEF1FF] dark:bg-slate-800 flex items-center justify-center text-[#2438D8] shadow-sm">
            <FaQuoteLeft className="text-xs" />
          </div>
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-xs" />
            ))}
          </div>
        </div>

        {/* Review Body */}
        <p
          className={`text-sm sm:text-[15px] leading-relaxed italic ${
            theme === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          "{reviewBody}"
        </p>
      </div>

      {/* Author Details with Verified Badge */}
      <div className="flex items-center justify-between pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80 relative z-20">
        <div className="flex items-center gap-3.5">
          <img
            src={avatarSrc}
            alt={authorName}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#2438D8]/20 shadow-sm"
          />
          <div>
            <h4
              className={`text-sm sm:text-base font-bold ${
                theme === "dark" ? "text-white" : "text-[#0F172A]"
              }`}
            >
              {authorName}
            </h4>
            <p
              className={`text-xs font-medium ${
                theme === "dark" ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {jobtitle}
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1 text-[#2438D8] text-xs font-semibold bg-[#EEF1FF] dark:bg-slate-800 px-2.5 py-1 rounded-full">
          <FaCheckCircle className="text-xs" />
          <span>Verified Renter</span>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default TestimonialCard;
