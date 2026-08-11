import React, { useContext } from "react";
import { about } from "../assets/export.js";
import { GlobalContext } from "../context/GlobalContext";

const AboutIphoneMockup = ({ src, alt }) => (
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

const About = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-black" : "bg-white"
      } flex flex-col lg:flex-row justify-center items-center py-16 px-6`}
      id="aboutus"
    >
      <div
        className={`lg:w-1/2 max-w-xl text-center lg:text-left lg:mr-12 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold mb-6">
          About Us
        </h2>

        <h2 className="text-xl font-bold mb-4 text-[#1E2EDE]">
          Empowering Renters Through Transparency
        </h2>

        <p
          className={`text-base md:text-lg ${
            theme === "dark" ? "text-[#B0B0B0]" : "text-[#565656]"
          } mb-8 leading-relaxed`}
        >
          Adele was created with a clear mission: to shift the power dynamic in
          renting by giving tenants a platform to share their voice. Renting a
          home is one of life’s biggest decisions, and yet so many do it
          blindly. We believe you deserve more—more insight, more honesty, and
          more control. Whether you’re a student, young professional, or growing
          family, Adele gives you everything you need to avoid bad rentals and
          choose homes that align with your lifestyle and values. Join a
          community that believes informed renting is a right, not a luxury.
        </p>
      </div>

      <div
        className="relative w-full lg:w-1/2 flex items-center justify-center py-8"
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: "80%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center w-full py-4">
          <AboutIphoneMockup
            src="/images/hero/hero-home.png"
            alt="Rentwiser Mobile App Mockup"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
