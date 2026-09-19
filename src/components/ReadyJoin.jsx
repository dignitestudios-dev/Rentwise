import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { MockupDecorations } from "./Decorations";
import { FaArrowRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { Reveal } from "./ScrollReveal";

const ReadyJoinIphoneMockup = ({ src, alt }) => (
  <div className="relative mx-auto w-full max-w-[210px] sm:max-w-[250px] md:max-w-[270px] p-2 bg-[#121316] rounded-[36px] sm:rounded-[42px] shadow-[0_25px_60px_-15px_rgba(36,56,216,0.35)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-2 border-slate-800 ring-1 ring-white/20 transform hover:scale-105 transition-transform duration-500">
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

export default function ReadyJoin() {
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
    <section
      className={`py-16 sm:py-24 lg:py-32 transition-colors duration-300 relative overflow-hidden ${
        theme === "dark" ? "bg-[#06080D] text-white" : "bg-white text-slate-900"
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[350px] sm:w-[550px] h-[300px] sm:h-[400px] bg-[#2438D8]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Mockup Column with Floating Effect */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px] order-2 lg:order-1 w-full">
            <Reveal direction="scale" duration={600} className="w-full flex justify-center">
              <MockupDecorations />
              
              {/* Floating SaaS Card */}
              <div className="hidden sm:flex absolute bottom-8 -left-2 sm:left-4 z-20 bg-white/95 dark:bg-[#151D30]/95 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 items-center gap-2.5 sm:gap-3 animate-float pointer-events-none">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#EEF1FF] text-[#2438D8] flex items-center justify-center font-bold text-xs sm:text-sm">
                  🛡️
                </span>
                <div className="text-left">
                  <p className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-white">Zero Guesswork</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">100% Verified Community</p>
                </div>
              </div>

              <div className="relative z-10 animate-float-slow">
                <ReadyJoinIphoneMockup
                  src="/images/mockups/guesswork.png"
                  alt="Take the Guesswork Out of Renting Mobile Mockup"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Text Column with Scroll Reveal */}
          <div className="lg:col-span-6 text-center lg:text-left order-1 lg:order-2">
            <Reveal direction="down" duration={500}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF1FF] dark:bg-[#1E293B] text-[#2438D8] dark:text-[#8CA0FF] text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-[#2438D8]/20">
                <HiSparkles className="text-sm" />
                <span>Join the Movement</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={50} duration={600}>
              <h2
                className={`text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4 sm:mb-6 ${
                  theme === "dark" ? "text-white" : "text-[#0F172A]"
                }`}
              >
                Take the Guesswork <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2438D8] via-[#3B4EF8] to-[#1726A8]">
                  Out of Renting
                </span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={100} duration={600}>
              <p
                className={`text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 ${
                  theme === "dark" ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Stop relying on luck when choosing your next rental. With Rentwise, you
                gain access to a powerful community-driven platform built for
                renters, by renters. Discover hidden gems, avoid red flags, and
                choose your next home with confidence. Whether you're searching or
                sharing, you're making the rental experience better for everyone.
              </p>
            </Reveal>

            <Reveal direction="up" delay={150} duration={600}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
                <button
                  type="button"
                  onClick={scrollToFeatures}
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#2438D8] to-[#1726A8] hover:from-[#1726A8] hover:to-[#2438D8] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg shadow-[#2438D8]/30 hover:shadow-xl hover:shadow-[#2438D8]/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Explore Now</span>
                  <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base border-2 transition-all duration-300 transform hover:-translate-y-1 ${
                    theme === "dark"
                      ? "border-[#2438D8] text-[#EEF1FF] hover:bg-[#2438D8]/20 hover:shadow-[0_0_20px_rgba(36,56,216,0.3)]"
                      : "border-[#2438D8] text-[#2438D8] hover:bg-[#2438D8] hover:text-white hover:shadow-[0_0_20px_rgba(36,56,216,0.2)]"
                  }`}
                >
                  <span>Submit Your Review</span>
                </button>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
