import React, { useContext } from "react";
import {
  about,
  appstore,
  footerMob,
  heroGradientimage,
  playstore,
} from "../assets/export";
import { GlobalContext } from "../context/GlobalContext";

export default function ReadyJoin() {
  const { theme, setTheme } = useContext(GlobalContext);
  return (
    <div>
      <div className={`relative ${theme == "dark" ? "bg-black" : ""} `}>
        <div className="container px-10 flex items-center justify-between flex-wrap md:flex-nowrap">
          <div
            className="relative mx-auto md:mx-0  sm:w-[40%]  overflow-hiddenlg:mb-0  flex items-center min-h-screen"
            style={{
              backgroundImage: `url(${about})`,
              backgroundSize: "100%",
              backgroundPosition: "center ",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="">
              <img
                src={"heroGradientimage"}
                className="absolute top-[0px] w-[900px]"
                style={{ zIndex: "-1" }}
                alt=""
              />
            </div>
            <div className="flex justify-center w-full">
              <img
                src={
                  theme == "dark"
                    ? "/images/light/demo2.png"
                    : "/images/light/demo2.png"
                }
                alt="Phone"
                className="w-auto h-auto sm:w-[200px]  lg:h-[500px] lg:w-auto"
              />
            </div>
          </div>
          <div
            className={`p-10 rounded-2xl max-w-3xl mx-auto lg:w-[874px] lg:h-[284px] `}
          >
            <h3
              className={`lg:text-[40px] font-[600] ${
                theme === "dark" ? " text-white" : "text-black"
              }`}
            >
              Take the Guesswork Out of Renting
            </h3>
            <p
              className={`text-[14px] mx-auto ${
                theme === "dark" ? "text-[#B0B0B0]" : "text-[#565656CC]"
              }`}
            >
              Stop relying on luck when choosing your next rental. With Adele,
              you gain access to a powerful community-driven platform built for
              renters, by renters. Discover hidden gems, avoid red flags, and
              choose your next home with confidence. Whether you're searching or
              sharing, you're making the rental experience better for everyone.
              Start browsing real reviews now or leave one of your own—it’s time
              to rent smarter.
            </p>
            <div className="mt-8 flex space-x-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
