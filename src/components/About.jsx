import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { MockupDecorations } from "./Decorations";
import { FaShieldAlt, FaUsers, FaSearchLocation } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { Reveal } from "./ScrollReveal";

const AboutIphoneMockup = ({ src, alt }) => (
  <div className="relative mx-auto w-full max-w-[220px] sm:max-w-[250px] md:max-w-[270px] p-2 bg-[#121316] rounded-[36px] sm:rounded-[42px] shadow-[0_25px_60px_-15px_rgba(36,56,216,0.3)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-2 border-slate-800 ring-1 ring-white/20 transform hover:scale-105 transition-transform duration-500">
    {/* Left Volume Buttons */}
    <div className="absolute -left-[4px] top-16 sm:top-20 w-[3px] h-5 sm:h-7 bg-slate-700 rounded-l-md" />
    <div className="absolute -left-[4px] top-26 sm:top-32 w-[3px] h-5 sm:h-7 bg-slate-700 rounded-l-md" />
    {/* Right Power Button */}
    <div className="absolute -right-[4px] top-20 sm:top-24 w-[3px] h-8 sm:h-10 bg-slate-700 rounded-r-md" />

    {/* Dynamic Island */}
    <div className="absolute top-2.5 sm:top-3.5 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-3 sm:h-3.5 bg-black rounded-full z-20 flex items-center justify-end px-1.5 shadow-sm">
      <div className="w-1.5 h-1.5 rounded-full bg-[#1e1f24] border border-slate-800" />
    </div>

    {/* Screen Frame */}
    <div className="relative overflow-hidden rounded-[30px] sm:rounded-[34px] bg-black aspect-[9/19] w-full flex items-start justify-center shadow-inner">
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

const About = () => {
  const { theme } = useContext(GlobalContext);

  const highlights = [
    {
      icon: <FaUsers className="text-[#2438D8]" />,
      title: "Community-Driven",
      desc: "Real insights shared directly by authentic tenants.",
    },
    {
      icon: <FaShieldAlt className="text-[#2438D8]" />,
      title: "Unbiased Reviews",
      desc: "Screened feedback with zero hidden landlord sponsorships.",
    },
    {
      icon: <FaSearchLocation className="text-[#2438D8]" />,
      title: "Instant Clarity",
      desc: "Comprehensive ratings before you sign any lease agreement.",
    },
  ];

  return (
    <section
      id="aboutus"
      className={`relative py-16 sm:py-24 lg:py-32 overflow-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#06080D] text-white"
          : "bg-white text-slate-900"
      }`}
    >
      {/* Subtle background ambient mesh */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#2438D8]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column with Scroll Reveals */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            <Reveal direction="down" duration={500}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF1FF] dark:bg-[#1E293B] text-[#2438D8] dark:text-[#8CA0FF] text-xs sm:text-sm font-semibold mb-4 border border-[#2438D8]/20">
                <HiSparkles className="text-sm" />
                <span>About Us</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={50} duration={600}>
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
                  theme === "dark" ? "text-white" : "text-[#0F172A]"
                }`}
              >
                Empowering Renters <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2438D8] via-[#3B4EF8] to-[#1726A8]">
                  Through Transparency
                </span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={100} duration={600}>
              <p
                className={`text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6 ${
                  theme === "dark" ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Rentwise was created with a clear mission: to shift the power dynamic in
                renting by giving tenants a platform to share their voice. Renting a
                home is one of life’s biggest decisions, and yet so many do it
                blindly.
              </p>
            </Reveal>

            <Reveal direction="up" delay={150} duration={600}>
              <p
                className={`text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 ${
                  theme === "dark" ? "text-slate-300" : "text-slate-700"
                }`}
              >
                We believe you deserve more—more insight, more honesty, and
                more control. Whether you’re a student, young professional, or growing
                family, Rentwise gives you everything you need to avoid bad rentals and
                choose homes that align with your lifestyle and values. Join a
                community that believes informed renting is a right, not a luxury.
              </p>
            </Reveal>

            {/* Value Points Row - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 text-left">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${
                    theme === "dark"
                      ? "bg-[#111726] border-slate-800 hover:border-[#2438D8]/60 text-white shadow-black/40"
                      : "bg-[#F8FAFF] border-slate-200/90 hover:border-blue-300 text-slate-900 shadow-sm"
                  }`}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#EEF1FF] dark:bg-slate-800 flex items-center justify-center text-sm sm:text-base mb-2.5 sm:mb-3 shadow-sm">
                    {item.icon}
                  </div>
                  <h4
                    className={`text-sm font-bold mb-1 ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`text-xs leading-relaxed ${
                      theme === "dark" ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Floating Phone Mockup with Animated Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px] w-full">
            <Reveal direction="scale" delay={150} duration={700} className="w-full flex justify-center">
              <MockupDecorations />

              {/* Floating Top Badge */}
              <div className="hidden sm:flex absolute top-6 -left-2 sm:left-2 z-20 bg-white/95 dark:bg-[#151D30]/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 items-center gap-2 animate-float pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-[#2438D8] animate-ping" />
                <span className="text-xs font-bold text-slate-800 dark:text-white"> Verified Community</span>
              </div>

              {/* Animated Phone Mockup */}
              <div className="relative z-10 animate-float-slow">
                <AboutIphoneMockup
                  src="/images/hero/hero-home.png"
                  alt="Rentwiser Mobile App Mockup"
                />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
