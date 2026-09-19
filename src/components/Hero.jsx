import React, { useContext } from "react";
import Navbar from "./Navbar";
import { GlobalContext } from "../context/GlobalContext";
import { HeroDecorations } from "./Decorations";
import { FaStar, FaShieldAlt, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { Reveal } from "./ScrollReveal";

const HeroIphoneMockup = ({ src, alt, tiltClass, className = "" }) => (
  <div
    className={`relative p-1.5 sm:p-2 bg-[#121316] rounded-[36px] sm:rounded-[42px] shadow-[0_20px_50px_-10px_rgba(36,56,216,0.35)] dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9)] border-2 border-slate-800 ring-1 ring-white/20 transform ${tiltClass} transition-all duration-500 hover:scale-[1.03] hover:z-30 ${className}`}
  >
    {/* Left Volume Buttons */}
    <div className="absolute -left-[4px] top-16 sm:top-20 w-[3px] h-5 sm:h-7 bg-slate-700 rounded-l-md" />
    <div className="absolute -left-[4px] top-26 sm:top-32 w-[3px] h-5 sm:h-7 bg-slate-700 rounded-l-md" />
    {/* Right Power Button */}
    <div className="absolute -right-[4px] top-20 sm:top-24 w-[3px] h-8 sm:h-10 bg-slate-700 rounded-r-md" />

    {/* Dynamic Island with Subtle Glow */}
    <div className="absolute top-2.5 sm:top-3.5 left-1/2 -translate-x-1/2 w-11 sm:w-14 h-3 sm:h-3.5 bg-black rounded-full z-20 flex items-center justify-end px-1 sm:px-1.5 shadow-sm">
      <div className="w-1.5 h-1.5 rounded-full bg-[#1e1f24] border border-slate-800" />
    </div>

    {/* Screen Frame */}
    <div className="relative overflow-hidden rounded-[30px] sm:rounded-[34px] bg-black aspect-[9/19] w-[170px] sm:w-[220px] md:w-[245px] lg:w-[265px] flex items-start justify-center shadow-inner">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top scale-[1.02]"
      />
    </div>

    {/* Home Indicator */}
    <div className="absolute bottom-2.5 sm:bottom-3.5 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1 bg-slate-400/40 rounded-full z-20" />
  </div>
);

const Hero = () => {
  const { theme } = useContext(GlobalContext);

  const scrollToContact = () => {
    const section = document.getElementById("contactus");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    const section = document.getElementById("features");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className={`relative min-h-screen overflow-x-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#080B11] text-white"
          : "bg-gradient-to-b from-[#F4F7FE] via-white to-[#F8FAFF] text-slate-900"
      }`}
    >
      {/* Background Dot Grid Pattern & Ambient Glows */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-70" />
      <HeroDecorations />

      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 lg:pt-14 pb-16 sm:pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-center">
          
          {/* Left Column: SaaS Hero Content */}
          <div className="lg:col-span-6 xl:col-span-7 text-center lg:text-left">
            
            {/* Eyebrow Pill Badge */}
            {/* <Reveal direction="down" duration={500}>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#EEF1FF] dark:bg-[#1E293B] border border-[#2438D8]/20 shadow-sm text-xs sm:text-sm font-semibold text-[#2438D8] dark:text-[#8CA0FF] mb-5 sm:mb-6 animate-float-slow hover:border-[#2438D8]/50 transition-colors max-w-full">
                <HiSparkles className="text-sm text-[#2438D8] animate-pulse shrink-0" />
                <span className="truncate">The Next Generation of Rental Transparency</span>
              </div>
            </Reveal> */}

            {/* Main Headline */}
            <Reveal direction="up" delay={50} duration={600}>
              <h1
                className={`text-3xl sm:text-5xl lg:text-[54px] xl:text-[64px] font-extrabold tracking-tight leading-[1.12] mb-5 sm:mb-6 ${
                  theme === "dark" ? "text-white" : "text-[#0F172A]"
                }`}
              >
                Rethink Renting. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2438D8] via-[#3B4EF8] to-[#1726A8] inline-block hover:brightness-110 transition-all">
                  Discover The Truth
                </span>
              </h1>
            </Reveal>

            {/* Supporting Paragraph */}
            <Reveal direction="up" delay={100} duration={600}>
              <p
                className={`text-sm sm:text-base lg:text-lg font-normal leading-relaxed mb-7 sm:mb-8 max-w-2xl mx-auto lg:mx-0 ${
                  theme === "dark" ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Don’t just sign a lease—make an informed choice backed by real
                tenant experiences. Rentwise is the ultimate property review and
                rating platform designed to give renters the clarity they’ve been
                missing. With verified feedback, landlord ratings, and powerful
                filtering tools, Rentwise helps you uncover the full story before
                you move in.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal direction="up" delay={150} duration={600}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-8 sm:mb-10">
                <button
                  type="button"
                  onClick={scrollToFeatures}
                  className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2438D8] to-[#1726A8] hover:from-[#1726A8] hover:to-[#2438D8] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg shadow-[#2438D8]/30 hover:shadow-xl hover:shadow-[#2438D8]/50 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                >
                  <span>Explore Now</span>
                  <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className={`inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base border-2 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto ${
                    theme === "dark"
                      ? "border-[#2438D8] text-[#EEF1FF] hover:bg-[#2438D8]/20 hover:shadow-[0_0_20px_rgba(36,56,216,0.3)]"
                      : "border-[#2438D8] text-[#2438D8] hover:bg-[#2438D8] hover:text-white hover:shadow-[0_0_20px_rgba(36,56,216,0.2)]"
                  }`}
                >
                  <span>Submit Your Review</span>
                </button>
              </div>
            </Reveal>

            {/* Trust Badges Row - Responsive Wrapping */}
            <div
              className={`flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-5 border-t text-xs sm:text-sm font-medium transition-colors ${
                theme === "dark"
                  ? "border-slate-800 text-slate-300"
                  : "border-slate-200 text-slate-800"
              }`}
            >
              {/* <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-xs sm:text-sm" />
                  ))}
                </div>
                <span
                  className={`font-bold text-xs sm:text-sm ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  4.9/5 Rating
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaCheckCircle className="text-[#2438D8] text-sm sm:text-base shrink-0" />
                <span className={`font-semibold ${theme === "dark" ? "text-slate-200" : "text-slate-900"}`}>
                  100% Verified Tenant Feedback
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaShieldAlt className="text-[#2438D8] text-sm sm:text-base shrink-0" />
                <span className={`font-semibold ${theme === "dark" ? "text-slate-200" : "text-slate-900"}`}>
                  Zero Hidden Fees
                </span>
              </div> */}
            </div>

          </div>

          {/* Right Column: Floating Twin Phone Mockups */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex justify-center items-center py-4 sm:py-6 overflow-visible w-full">
            
            {/* Central Glow Orb behind Phones */}
            <div className="absolute w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] bg-[#2438D8]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

            {/* Floating SaaS Card 1 (Top Left) - Hidden on extra small mobile screens for clean fit */}
            <div className="hidden sm:flex absolute -top-2 sm:-top-4 left-0 sm:left-2 lg:-left-4 z-30 bg-white/95 dark:bg-[#151D30]/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 items-center gap-3 animate-float pointer-events-none">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#2438D8]/10 dark:bg-[#2438D8]/25 border border-[#2438D8]/20 dark:border-[#2438D8]/40 shrink-0">
                <FaStar className="text-amber-400 text-sm shrink-0" />
                {/* <span className="font-extrabold text-xs text-[#2438D8] dark:text-blue-300 leading-none">4.8</span> */}
              </div>
              <div className="text-left">
                <p className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-white whitespace-nowrap">Verified Property Score</p>
                <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 whitespace-nowrap">Quiet • Fast Maintenance</p>
              </div>
            </div>

            {/* Floating SaaS Card 2 (Bottom Right) */}
            <div className="hidden sm:flex absolute -bottom-4 sm:-bottom-6 right-0 sm:right-2 lg:-right-4 z-30 bg-white/95 dark:bg-[#151D30]/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 items-center gap-3 animate-float-reverse pointer-events-none">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#2438D8] text-white flex items-center justify-center shrink-0 shadow-sm shadow-[#2438D8]/30">
                <FaCheckCircle className="text-sm sm:text-base" />
              </div>
              {/* <div className="text-left">
                <p className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-white whitespace-nowrap">Authentic Tenant Voice</p>
                <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 whitespace-nowrap">100% Screened Reviews</p>
              </div> */}
            </div>

            {/* Tilted Phones Container */}
            <div className="relative flex justify-center items-center py-2 sm:py-4">
              {/* Left Tilted iPhone */}
              <div className="animate-float-slow">
                <HeroIphoneMockup
                  src="/images/hero/hero-profile.png"
                  alt="Rentwiser User Profile Screen"
                  tiltClass="-rotate-12 -mr-5 sm:-mr-8 translate-y-4 sm:translate-y-6 hover:-rotate-6 z-10"
                />
              </div>

              {/* Right Tilted iPhone */}
              <div className="animate-float">
                <HeroIphoneMockup
                  src="/images/hero/hero-home.png"
                  alt="Rentwiser Home & Search Screen"
                  tiltClass="rotate-12 -ml-5 sm:-ml-8 -translate-y-3 sm:-translate-y-4 hover:rotate-6 z-20"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
