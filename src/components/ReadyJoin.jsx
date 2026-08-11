import React, { useContext } from "react";
import { about } from "../assets/export";
import { GlobalContext } from "../context/GlobalContext";

const ReadyJoinIphoneMockup = ({ src, alt }) => (
  <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[290px] p-2 bg-[#121316] rounded-[40px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border-2 border-slate-800 ring-1 ring-white/10 transform hover:scale-105 transition-transform duration-500">
    {/* Left Volume Buttons */}
    <div className="absolute -left-[4px] top-20 w-[3px] h-7 bg-slate-700 rounded-l-md" />
    <div className="absolute -left-[4px] top-32 w-[3px] h-7 bg-slate-700 rounded-l-md" />
    {/* Right Power Button */}
    <div className="absolute -right-[4px] top-24 w-[3px] h-10 bg-slate-700 rounded-r-md" />

    {/* Dynamic Island */}
    <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-20 flex items-center justify-end px-1.5 shadow-sm">
      <div className="w-2 h-2 rounded-full bg-[#1e1f24] border border-slate-800" />
    </div>

    {/* Screen Frame */}
    <div className="relative overflow-hidden rounded-[32px] bg-black aspect-[9/19] w-full flex items-start justify-center shadow-inner">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top scale-[1.03]"
      />
    </div>

    {/* Home Indicator */}
    <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-slate-400/40 rounded-full z-20" />
  </div>
);

export default function ReadyJoin() {
  const { theme } = useContext(GlobalContext);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-black" : "bg-white"
      } py-16 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div
          className="relative w-full md:w-1/2 flex items-center justify-center py-6"
          style={{
            backgroundImage: `url(${about})`,
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <ReadyJoinIphoneMockup
            src="/images/mockups/guesswork.png"
            alt="Take the Guesswork Out of Renting Mobile Mockup"
          />
        </div>

        <div className="w-full md:w-1/2 max-w-2xl">
          <h3
            className={`text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight mb-4 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Take the Guesswork <br className="hidden sm:inline" />
            <span className="text-[#1E2EDE]">Out of Renting</span>
          </h3>
          <p
            className={`text-base md:text-lg leading-relaxed mb-8 ${
              theme === "dark" ? "text-[#B0B0B0]" : "text-[#565656]"
            }`}
          >
            Stop relying on luck when choosing your next rental. With Adele, you
            gain access to a powerful community-driven platform built for
            renters, by renters. Discover hidden gems, avoid red flags, and
            choose your next home with confidence. Whether you're searching or
            sharing, you're making the rental experience better for everyone.
            Start browsing real reviews now or leave one of your own—it’s time
            to rent smarter.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className="bg-[#1E2EDE] hover:bg-[#1824b8] text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 h-[44px]"
            >
              Explore Now
            </button>
            <button
              type="button"
              className="bg-[#1E2EDE] hover:bg-[#1824b8] text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 h-[44px]"
            >
              Submit Your Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
