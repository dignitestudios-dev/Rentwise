import React from "react";

// Modern SaaS Orbit Rings and Floating Glow Orbs for Hero Section
export const HeroDecorations = ({ className = "" }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center ${className}`}>
    {/* Ambient Glow Orbs */}
    <div className="absolute top-[20%] left-[15%] w-72 h-72 bg-[#2438D8]/10 rounded-full blur-3xl animate-pulse-glow" />
    <div className="absolute top-[35%] right-[10%] w-96 h-96 bg-[#3B4EF8]/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
    <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#EEF1FF]/60 dark:bg-[#2438D8]/5 rounded-full blur-3xl" />

    {/* Concentric Elliptical Orbit Rings */}
    <svg
      className="absolute w-[800px] sm:w-[1000px] lg:w-[1250px] h-[700px] sm:h-[900px] lg:h-[1100px] top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 animate-spin-slow"
      viewBox="0 0 1000 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="500"
        cy="400"
        rx="360"
        ry="230"
        transform="rotate(-26 500 400)"
        stroke="#2438D8"
        strokeWidth="1.2"
        strokeOpacity="0.2"
      />
      <ellipse
        cx="500"
        cy="400"
        rx="410"
        ry="260"
        transform="rotate(-26 500 400)"
        stroke="#2438D8"
        strokeWidth="1.2"
        strokeOpacity="0.3"
      />
      <ellipse
        cx="500"
        cy="400"
        rx="450"
        ry="290"
        transform="rotate(-26 500 400)"
        stroke="#2438D8"
        strokeWidth="1"
        strokeOpacity="0.15"
        strokeDasharray="6 8"
      />
    </svg>

    {/* Sparkle Stars in Brand Blue */}
    {/* Top Left Star */}
    <div className="absolute top-[18%] left-[8%] sm:left-[14%] animate-float">
      <svg className="w-8 h-8 md:w-10 md:h-10 text-[#2438D8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
      </svg>
    </div>

    {/* Top Right Star */}
    <div className="absolute top-[14%] right-[10%] sm:right-[16%] animate-float-reverse">
      <svg className="w-6 h-6 md:w-8 md:h-8 text-[#2438D8] opacity-80" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
      </svg>
    </div>

    {/* Middle Left Star */}
    <div className="absolute top-[52%] left-[4%] sm:left-[8%] animate-float-slow">
      <svg className="w-6 h-6 md:w-7 md:h-7 text-[#2438D8] opacity-75" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
      </svg>
    </div>

    {/* Middle Right Star */}
    <div className="absolute top-[56%] right-[6%] sm:right-[10%] animate-float">
      <svg className="w-7 h-7 md:w-9 md:h-9 text-[#2438D8] opacity-90" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
      </svg>
    </div>

    {/* Bottom Star */}
    <div className="absolute bottom-[16%] left-[12%] animate-float-reverse">
      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#2438D8] opacity-70" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
      </svg>
    </div>
  </div>
);

// Blue Decorative Rings and Stars for About & ReadyJoin Mockups
export const MockupDecorations = ({ className = "" }) => (
  <div className={`absolute inset-0 pointer-events-none flex items-center justify-center ${className}`}>
    {/* Soft Glow behind mockup */}
    <div className="absolute w-72 h-72 bg-[#2438D8]/15 rounded-full blur-3xl animate-pulse-glow" />

    {/* Concentric Ellipses / Orbit Rings */}
    <svg
      className="w-[125%] h-[125%] max-w-[550px] max-h-[550px] opacity-75 animate-spin-reverse"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="250"
        cy="250"
        rx="180"
        ry="115"
        transform="rotate(-28 250 250)"
        stroke="#2438D8"
        strokeWidth="1.2"
        strokeOpacity="0.25"
      />
      <ellipse
        cx="250"
        cy="250"
        rx="210"
        ry="135"
        transform="rotate(-28 250 250)"
        stroke="#2438D8"
        strokeWidth="1.2"
        strokeOpacity="0.35"
      />
      <ellipse
        cx="250"
        cy="250"
        rx="235"
        ry="150"
        transform="rotate(-28 250 250)"
        stroke="#2438D8"
        strokeWidth="1"
        strokeOpacity="0.18"
        strokeDasharray="4 6"
      />
    </svg>

    {/* Sparkle Star Top Left */}
    <div className="absolute top-[8%] left-[8%] animate-float">
      <svg className="w-7 h-7 text-[#2438D8] opacity-85" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
      </svg>
    </div>

    {/* Sparkle Star Bottom Left */}
    <div className="absolute bottom-[20%] left-[10%] animate-float-reverse">
      <svg className="w-6 h-6 text-[#2438D8] opacity-80" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
      </svg>
    </div>

    {/* Sparkle Star Right */}
    <div className="absolute top-[40%] right-[6%] animate-float-slow">
      <svg className="w-8 h-8 text-[#2438D8] opacity-90" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
      </svg>
    </div>
  </div>
);
