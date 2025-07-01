import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalContext';
// import { testimonial1, testimonial2,testimonial3,testimonial4,testimonial5,testimonial6 } from "../assets/export";
const IMAGE_LIST = [
    "girl1.jpeg",
    "man1.jpeg",
    "girl2.jpeg",
    "man2.jpeg",
    "man3.jpeg",
    "man4.jpeg",
    "man5.jpeg",
];

const TestimonialCard = ({ reviewBody, authorName, jobtitle, index }) => {
  const {theme, setTheme } = useContext(GlobalContext);
  return (
    <div
    className={`w-full ${theme === "dark" ? "bg-[#303030]" : "bg-[#ECECEC]"} rounded-[10px] px-3 py-3 h-48 pb-4   relative col-span-1 flex flex-col justify-center items-start gap-3 text-start`}
  >
    <p className={`text-base ${theme === "dark" ? "text-white" : "text-[#565656]"} h-[80%]`}>
      {reviewBody.length > 340 ? reviewBody?.slice(0, 340) + "..." : reviewBody}
    </p>
    <div className="w-auto h-[20%]  px-3 absolute bottom-0 left-0 flex gap-2 pb-10 justify-start items-center">
      <img
        src={IMAGE_LIST[index]}
        alt="client image"
        className="rounded-full object-cover w-14 h-14"
        width={56}
        height={56}
      />
      <div className="flex flex-col py-3 justify-start items-start">
        <p className={`text-base font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
          {authorName}
        </p>
        <p className={`text-sm ${theme === "dark" ? "text-white" : "text-[#565656]"}`}>
          {jobtitle}
        </p>
      </div>
    </div>
  </div>
  
  );
};

export default TestimonialCard;
