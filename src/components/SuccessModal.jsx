import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const SuccessModal = ({open, onclick}) => {
  return (
    open &&
    <div
      className={`w-full h-full z-50 fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center`}
    >
      <div className="w-full lg:w-[30%] p-10 bg-white rounded-xl relative flex flex-col gap-2 items-center justify-center">
        <button type="button" className="absolute p-1 top-4 right-4 w-6 h-6 bg-gray-200 rounded-full" onClick={onclick}>
            <IoClose className="w-full h-full"/>
        </button>
      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#2438D8] text-white shadow-lg shadow-[#2438D8]/30">
        <FaCheck className="text-white text-2xl"/>
      </div>
      <h2 className="text-2xl font-bold">Thank you!</h2>
      <p className="text-gray-500">We have received your email.</p>
      </div>
    </div>
  );
};

export default SuccessModal;
