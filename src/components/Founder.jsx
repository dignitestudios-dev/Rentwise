import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Founder() {
  const { theme, setTheme } = useContext(GlobalContext);
  return (
    <div
      className={` ${
        theme == "dark" ? "bg-black" : "bg-white"
      }  flex flex-col lg:flex-row gap-[25px] justify-center items-center  -mt-2`}
      id="aboutus"
    >
      <div className="relative w-[100%] md:w-[50%] overflow-hidden lg:mb-0  flex items-center md:min-h-screen">
        <div className="flex justify-center w-full">
          <img
            src={theme == "dark" ? "/master.jpg" : "/master.jpg"}
            alt="Phone"
            className="w-full lg:h-[500px] ml-10 md:ml-0 lg:w-auto"
          />
        </div>
      </div>
      <div
        className={`md:w-1/3 text-center lg:text-left mt-10 lg:ml-15 ${
          theme === "dark" ? " text-white" : "text-black"
        }`}
      >
        <h2 className="text-xl sm:text-3xl lg:text-[50px] font-bold mb-6">
          Founders Spotlight
        </h2>

        <p
          className={`md:text-[15px] ${
            theme === "dark" ? "text-[#B0B0B0]" : "text-[#565656CC]"
          } lg:text-[15px] sm:text-[12px] mb-4`}
        >
          Minus perferendis blanditiis dolor earum consectetur aperiam
          praesentium ullam necessitatibus nemo veniam libero doloremque
          consequuntur ipsa hic, adipisci saepe, molestiae molestias
          voluptatibus.
        </p>
        <p
          className={`md:text-[15px] ${
            theme === "dark" ? "text-[#B0B0B0]" : "text-[#565656CC]"
          } lg:text-[15px] sm:text-[12px] mb-8`}
        >
          Minus perferendis blanditiis dolor earum consectetur aperiam
          praesentium ullam necessitatibus nemo veniam libero doloremque
          consequuntur ipsa hic, adipisci saepe, molestiae molestias
          voluptatibus.
        </p>
        <p
          className={`md:text-[15px] ${
            theme === "dark" ? "text-[#B0B0B0]" : "text-[#565656CC]"
          } lg:text-[15px] sm:text-[12px] mb-8`}
        >
          Minus perferendis blanditiis dolor earum consectetur aperiam
          praesentium ullam necessitatibus nemo veniam libero doloremque
          consequuntur ipsa hic, adipisci saepe, molestiae molestias
          voluptatibus.
        </p>
        <hr />
        <br />
        <p
          className={`md:text-[15px] ${
            theme === "dark" ? "text-[#B0B0B0]" : "text-[#565656CC]"
          } lg:text-[15px] sm:text-[12px] mb-8`}
        >
          <strong>Join us.</strong> <br />
          Minus perferendis blanditiis dolor earum consectetur aperiam
          praesentium ullam necessitatibus nemo veniam libero doloremque
          consequuntur ipsa hic, adipisci saepe, molestiae molestias
          voluptatibus.
        </p>
      </div>
    </div>
  );
}
