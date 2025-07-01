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

const Hero = () => {
  const Completionist = () => <span>You are good to go!</span>;
  const { theme, setTheme } = useContext(GlobalContext);
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
        className={`relative ${
          theme == "dark" ? "bg-black" : " text-white"
        }   items-center min-h-screen`}
        style={{
          backgroundImage: ` url(${herobg})`,
          backgroundSize: "70%",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {showModal && <Modal />}
        <Navbar className="absolute top-0 left-0 right-0 bg-transparent z-20" />

        <div className="text-center py-20 " id="home">
          <div className="relative flex justify-center">
            <img
              src={heroGradientimage}
              className="absolute top-[0px] w-[900px]"
              style={{ zIndex: "-1" }}
              alt=""
            />
          </div>
          <p
            className={`text-2xl md:text-[55px] leading-[30px] md:leading-[50px]  ${
              theme === "dark" ? " text-white" : "text-black"
            }  font-bold mb-4  capitalize`}
          >
            Rethink Renting. <br />{" "}
            <div className="mt-4"> Discover the Truth </div>
          </p>
          {/* <h3
          className={`${
            theme === "dark" ? " text-white" : "text-black"
          } font-medium leading-8`}
        >
          Time Remaining
        </h3> */}
          {/* <CountdownTimer /> */}
          <div>
            {/* <h3 className="text-5xl font-medium ">
              <span className="text-[#1E2EDE]">Coming </span>{" "}
              <span
                className={`  ${
                  theme == "dark" ? "text-black  " : " text-[#000000]"
                } `}
              >
                Soon
              </span>{" "}
            </h3> */}
            <p
              className={` font-medium ${
                theme === "dark" ? " text-white" : "text-black"
              }  mt-4`}
            >
              Don’t just sign a lease—make an informed choice backed by real
              tenant experiences. <br />
              Adele is the ultimate property review and rating platform designed
              to give renters the clarity they’ve been missing. <br />
              With verified feedback, landlord ratings, and powerful filtering
              tools, Adele helps you uncover the full story before you move in.
              <br />
              Say goodbye to rental surprises and hello to smarter living.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <button
                type="button"
                className="bg-[#1E2EDE] text-white px-4 py-2 rounded-full font-medium  w-[133px] mt-6 h-[40px]"
              >
                Explore Now
              </button>
              <button
                type="button"
                className="bg-[#1E2EDE] text-white px-4 py-2 rounded-full font-medium  w-auto mt-6 h-[40px]"
              >
                Submit Your Review
              </button>
            </div>

            {/* <Countdown date={Date.now() + 703200000}>
    <Completionist />
  </Countdown> */}
          </div>
        </div>

        <div className="w-full flex justify-center">
          <img
            src={
              theme == "dark"
                ? "/images/light/demo3.png"
                : "/images/light/demo3.png"
            }
            alt="Mobile App Mockup"
            className="relative mx-auto w-[340px] z-10 mb-32"
          />
        </div>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Hero;
