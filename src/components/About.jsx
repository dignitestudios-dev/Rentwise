import React, { useContext } from "react";
import { about, aboutmobile } from "../assets/export.js";
import { GlobalContext } from "../context/GlobalContext";
const About = () => {
  const { theme, setTheme } = useContext(GlobalContext);
  return (
    <div
      className={` ${
        theme == "dark" ? "bg-black" : "bg-white"
      }  flex flex-col lg:flex-row justify-center items-center  -mt-2`}
      id="aboutus"
    >
      <div
        className={`lg:w-1/3 text-center lg:text-left lg:ml-15 ${
          theme === "dark" ? " text-white" : "text-black"
        }`}
      >
        <h2 className="text-xl sm:text-3xl lg:text-[50px] font-bold mb-6">
          About Us
        </h2>

        <h2 className="text-xl  font-bold">
          Empowering Renters Through Transparency
        </h2>
        <br />
        <p
          className={`md:text-[15px] ${
            theme === "dark" ? "text-[#B0B0B0]" : "text-[#565656CC]"
          } lg:text-[15px] sm:text-[12px] mb-8`}
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
        className="relative w-[100%] md:w-[50%] overflow-hiddenlg:mb-0  flex items-center min-h-screen"
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: "80%",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center w-full">
          <img
            src={
              theme == "dark"
                ? "/images/light/demo3.png"
                : "/images/light/demo3.png"
            }
            alt="Phone"
            className="w-auto h-auto sm:w-[400px] lg:h-[400px] lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
