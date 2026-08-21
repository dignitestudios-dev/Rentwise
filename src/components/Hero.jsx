import React, { useContext, useEffect, useState } from "react";
import {
  heroimage,
  herobg,
  appstore,
  playstore,
  heroGradientimage,
} from "../assets/export";
import Navbar from "./Navbar";
import Countdown from "react-countdown";
import { GlobalContext } from "../context/GlobalContext";
import Modal from "./Modal";
import CountdownTimer from "./CountDownTimer";

const HeroIphoneMockup = ({ src, alt, tiltClass, className = "" }) => (
  <div
    className={`relative p-2 bg-[#121316] rounded-[40px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border-2 border-slate-800 ring-1 ring-white/10 transform ${tiltClass} transition-all duration-500 hover:scale-105 hover:z-30 ${className}`}
  >
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
    <div className="relative overflow-hidden rounded-[32px] bg-black aspect-[9/19] w-[240px] sm:w-[270px] md:w-[290px] flex items-start justify-center shadow-inner">
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

const Hero = () => {
  const { theme } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`relative ${theme === "dark" ? "bg-black" : "text-white"
          } items-center min-h-screen overflow-hidden`}
        style={{
          backgroundImage: `url(${herobg})`,
          backgroundSize: "70%",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {showModal && <Modal />}
        <Navbar className="absolute top-0 left-0 right-0 bg-transparent z-20" />

        <div className="text-center pt-20 pb-12" id="home">
          <div className="relative flex justify-center">
            <img
              src={heroGradientimage}
              className="absolute top-[0px] w-[900px]"
              style={{ zIndex: "-1" }}
              alt=""
            />
          </div>
          <div
            className={`text-3xl md:text-[55px] leading-[40px] md:leading-[60px] ${theme === "dark" ? "text-white" : "text-black"
              } font-bold mb-4 capitalize`}
          >
            Rethink Renting. <br />
            <div className="mt-2 text-[#1E2EDE]"> Discover the Truth </div>
          </div>

          <div>
            <p
              className={`font-medium ${theme === "dark" ? "text-[#C4C4C4]" : "text-[#565656]"
                } mt-4 max-w-3xl mx-auto px-4 leading-relaxed text-base md:text-lg`}
            >
              Don’t just sign a lease—make an informed choice backed by real
              tenant experiences. Rentwise is the ultimate property review and
              rating platform designed to give renters the clarity they’ve been
              missing. With verified feedback, landlord ratings, and powerful
              filtering tools, Rentwise helps you uncover the full story before
              you move in.
            </p>

            <div className="mt-8 flex justify-center space-x-4">
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

        {/* Tilted Twin iPhone Mockups */}
        <div className="w-full flex justify-center items-center relative mt-6 mb-24 px-4">
          <div className="relative flex justify-center items-center w-full max-w-4xl py-6">
            {/* Left Tilted iPhone - Profile Page */}
            <HeroIphoneMockup
              src="/images/hero/hero-profile.png"
              alt="Rentwiser User Profile Screen"
              tiltClass="-rotate-12 -mr-6 sm:-mr-10 translate-y-4 hover:-rotate-6 z-10"
            />

            {/* Right Tilted iPhone - Home Search Page */}
            <HeroIphoneMockup
              src="/images/hero/hero-home.png"
              alt="Rentwiser Home & Search Screen"
              tiltClass="rotate-12 -ml-6 sm:-ml-10 -translate-y-4 hover:rotate-6 z-20"
            />
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Hero;
