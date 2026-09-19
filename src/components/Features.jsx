import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { HiSparkles } from "react-icons/hi";
import {
  HiCheckBadge,
  HiStar,
  HiChartBar,
  HiAdjustmentsHorizontal,
  HiDocumentText,
  HiOutlineDocumentCheck,
} from "react-icons/hi2";
import { Reveal } from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";

const IphoneMockup = ({ src, alt }) => (
  <div className="relative mx-auto w-full max-w-[210px] sm:max-w-[220px] p-2 bg-[#121316] rounded-t-[38px] sm:rounded-t-[40px] shadow-2xl border-t-2 border-x-2 border-slate-800 ring-1 ring-white/10 transform group-hover:-translate-y-3 sm:group-hover:-translate-y-4 group-hover:scale-[1.02] sm:group-hover:scale-[1.03] transition-all duration-500">
    {/* Dynamic Island */}
    <div className="absolute top-2.5 sm:top-3 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-3 sm:h-3.5 bg-black rounded-full z-20 flex items-center justify-end px-1 shadow-sm">
      <div className="w-1.5 h-1.5 rounded-full bg-[#1e1f24] border border-slate-800" />
    </div>

    {/* Screen Frame - Clean and Unobscured */}
    <div className="relative overflow-hidden rounded-t-[30px] sm:rounded-t-[32px] bg-black h-[300px] sm:h-[325px] w-full shadow-inner">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover object-top scale-[1.02] transition-transform duration-700 group-hover:scale-[1.05]"
      />
    </div>
  </div>
);

const Features = () => {
  const { theme } = useContext(GlobalContext);

  const features = [
    {
      id: "reviews",
      title: "Verified Reviews",
      description:
        "Every review is screened to ensure it’s authentic and useful—no fake ratings, no hidden agendas.",
      image: theme === "light" ? "/images/light/1.png" : "/images/dark/1.png",
      tag: "100% Authentic",
      icon: <HiCheckBadge className="text-xl" />,
    },
    {
      id: "ratings",
      title: "Landlord & Property Ratings",
      description:
        "Get a complete picture of a landlord’s track record, from maintenance response times to fairness in lease handling.",
      image: theme === "light" ? "/images/light/2.png" : "/images/dark/2.png",
      tag: "Comprehensive Scores",
      icon: <HiStar className="text-xl" />,
    },
    {
      id: "scorecards",
      title: "Property Scorecards",
      description:
        "At-a-glance overviews highlight key metrics like cleanliness, security, noise level, and neighborhood quality.",
      image: theme === "light" ? "/images/light/3.png" : "/images/dark/3.png",
      tag: "Key Metrics",
      icon: <HiChartBar className="text-xl" />,
    },
    {
      id: "filters",
      title: "Smart Filters & Tags",
      description:
        "Quickly narrow down listings based on what matters most—budget, location, amenities, and key tags.",
      image: theme === "light" ? "/images/light/4.png" : "/images/dark/4.png",
      tag: "Instant Discovery",
      icon: <HiAdjustmentsHorizontal className="text-xl" />,
    },
    {
      id: "legal",
      title: "Legal Advice & Resources",
      description:
        "Find essential documents, tips, and resources to guide you through tenant rights and lease agreements.",
      image: theme === "light" ? "/images/light/5.png" : "/images/dark/5.png",
      tag: "Tenant Rights",
      icon: <HiDocumentText className="text-xl" />,
    },
    {
      id: "ownership",
      title: "Upload Ownership Certificate",
      description:
        "Easily upload ownership documents and verify property certificates seamlessly inside the app.",
      image: theme === "light" ? "/images/light/6.png" : "/images/dark/6.png",
      tag: "Verified Ownership",
      icon: <HiOutlineDocumentCheck className="text-xl" />,
    },
  ];

  return (
    <section
      id="features"
      className={`py-16 sm:py-24 lg:py-32 relative transition-colors duration-300 overflow-hidden ${
        theme === "dark"
          ? "bg-[#07090F] text-white"
          : "bg-gradient-to-b from-[#F6F8FE] via-white to-[#F8FAFF] text-slate-900"
      }`}
    >
      {/* Animated Ambient Glow Orbs in Background */}
      <div className="absolute top-20 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#2438D8]/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div
        className="absolute bottom-20 right-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#3B4EF8]/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none"
        style={{ animationDelay: "2.5s" }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 pb-10 sm:pb-12 border-b border-slate-200/70 dark:border-slate-800">
          <div>
            <Reveal direction="down" duration={500}>
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#EEF1FF] dark:bg-[#1E293B] text-[#2438D8] dark:text-[#8CA0FF] text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-sm">
                <HiSparkles className="text-sm" />
                <span>Platform Capabilities</span>
              </div>
            </Reveal>
            
            <Reveal direction="up" delay={50} duration={600}>
              <h2
                className={`text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
                  theme === "dark" ? "text-white" : "text-[#0F172A]"
                }`}
              >
                Key Features of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2438D8] via-[#3B4EF8] to-[#1726A8] inline-block">
                  Rentwiser
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="max-w-md">
            <Reveal direction="left" delay={100} duration={600}>
              <p
                className={`border-l-4 border-[#2438D8] pl-3.5 sm:pl-4 text-sm sm:text-base lg:text-lg font-medium leading-relaxed ${
                  theme === "dark" ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Everything you need to rent with confidence, uncover hidden truths, and make empowered housing decisions.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Feature Cards Grid: 1 col on mobile, 2 cols on tablet (md), 3 cols on desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14">
          {features.map((feature, index) => (
            <Reveal
              key={feature.id}
              direction="up"
              delay={(index % 3) * 100}
              duration={600}
            >
              <SpotlightCard
                className={`group rounded-[28px] sm:rounded-[32px] transition-all duration-500 flex flex-col justify-between pt-6 sm:pt-8 overflow-hidden h-[490px] sm:h-[530px] border relative ${
                  theme === "dark"
                    ? "bg-gradient-to-b from-[#111726] to-[#0A0E18] border-slate-800 hover:border-[#2438D8]/70 shadow-lg shadow-black/40 hover:shadow-[0_20px_50px_-15px_rgba(36,56,216,0.35)]"
                    : "bg-white border-slate-100 hover:border-[#2438D8]/40 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(36,56,216,0.18)]"
                } transform hover:-translate-y-2`}
              >
                {/* Top Accent Gradient Bar on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2438D8] via-[#3B4EF8] to-[#2438D8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card Header Section */}
                <div className="flex flex-col px-5 sm:px-7 text-left relative z-20">
                  <div className="flex items-center justify-between w-full mb-3 sm:mb-4">
                    {/* Icon Badge */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#EEF1FF] dark:bg-slate-800/90 text-[#2438D8] dark:text-[#8CA0FF] flex items-center justify-center shadow-sm group-hover:bg-[#2438D8] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                      {feature.icon}
                    </div>

                    {/* Number & Tag Pill */}
                    <div className="flex items-center gap-2">
                      {/* <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50">
                        {feature.tag}
                      </span> */}
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  <h3
                    className={`text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 transition-colors duration-300 group-hover:text-[#2438D8] ${
                      theme === "dark" ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      theme === "dark" ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Phone Mockup Frame - Completely Unobstructed */}
                <div className="w-full pt-4 sm:pt-6 overflow-hidden flex justify-center h-[290px] sm:h-[325px] items-start relative z-20">
                  <IphoneMockup
                    src={feature.image}
                    alt={feature.title}
                  />
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
