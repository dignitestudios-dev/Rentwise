import React, { useContext } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";
import { val } from "../constent/Review";
import { GlobalContext } from '../context/GlobalContext';
export const sliderSettings = {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  loop: false,
  breakpoints: {
    280: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev",
  },
};

const Testimonials = () => {
  const {theme, setTheme } = useContext(GlobalContext);
  return (
    <div
      id="testimonials"
      className={`${theme=="dark"?"bg-black":"bg-white"}  w-full py-20  px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 relative`}
    >
      <div className="text-center">
        <h2 className={`lg:font-bold uppercase font-[600] text-4xl lg:text-5xl xl:text-[45px] ${theme=="dark"?"text-white":"text-black"}  tracking-tighter`}>
          Testimonials
        </h2>
        <p className="text-[16px] font-[400] mt-2 text-[#565656] capitalize">
          What our customers say
        </p>
      </div>
      <div className="w-full h-[2px] rounded-full" />
      <div className="w-full pt-4 lg:pt-6 gap-10 overflow-hidden">
        <Swiper
          {...sliderSettings}
          modules={[Autoplay, Navigation]}
          className="relative"
        >
          {val?.map(({ reviewBody, author: { name, jobtitle } }, index) => {
            return (
              <SwiperSlide key={index}>
                <TestimonialCard
                  reviewBody={reviewBody}
                  authorName={name}
                  jobtitle={jobtitle}
                  index={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
        {/* Navigation buttons */}
        <div className={`swiper-button-prev ${theme=="light"?"btn-mode-light":"btn-mode-dark"}  `}></div>
        <div className={`swiper-button-next ${theme=="light"?"btn-mode-light":"btn-mode-dark"} `}></div>
    </div>
  );
};

export default Testimonials;
