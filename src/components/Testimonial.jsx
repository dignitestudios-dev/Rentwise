import React, { useContext } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";
import { val } from "../constent/Review";
import { GlobalContext } from "../context/GlobalContext";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi";
import { Reveal } from "./ScrollReveal";

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".custom-swiper-next",
    prevEl: ".custom-swiper-prev",
  },
};

const Testimonials = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <section
      id="testimonials"
      className={`w-full py-24 lg:py-32 relative transition-colors duration-300 ${
        theme === "dark" ? "bg-[#06080D]" : "bg-white"
      }`}
    >
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#2438D8]/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Scroll Reveal */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal direction="down" duration={600}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF1FF] dark:bg-[#1E293B] text-[#2438D8] dark:text-[#8CA0FF] text-xs sm:text-sm font-semibold mb-3 border border-[#2438D8]/20">
              <HiSparkles className="text-sm" />
              <span>Community Stories</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={100} duration={700}>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
                theme === "dark" ? "text-white" : "text-[#0F172A]"
              }`}
            >
              What Our Customers Say
            </h2>
          </Reveal>

          <Reveal direction="up" delay={200} duration={700}>
            <p
              className={`text-base sm:text-lg ${
                theme === "dark" ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Real stories from verified renters who used Rentwiser to avoid bad leases and find trustworthy homes.
            </p>
          </Reveal>
        </div>

        {/* Testimonials Carousel with Scale Reveal */}
        <Reveal direction="scale" delay={300} duration={800}>
          <div className="w-full relative px-2">
            <Swiper
              {...sliderSettings}
              modules={[Autoplay, Navigation]}
              className="pb-12"
            >
              {val?.map(({ reviewBody, author: { name, jobtitle } }, index) => (
                <SwiperSlide key={index} className="h-auto pb-4">
                  <TestimonialCard
                    reviewBody={reviewBody}
                    authorName={name}
                    jobtitle={jobtitle}
                    index={index}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                aria-label="Previous Testimonial"
                type="button"
                className={`custom-swiper-prev w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border cursor-pointer ${
                  theme === "dark"
                    ? "border-slate-800 bg-[#111726] text-white hover:bg-[#2438D8] hover:border-[#2438D8] shadow-md hover:shadow-[0_0_20px_rgba(36,56,216,0.4)]"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-[#2438D8] hover:text-white hover:border-[#2438D8] shadow-sm hover:shadow-[0_0_20px_rgba(36,56,216,0.3)]"
                }`}
              >
                <IoChevronBack className="text-lg" />
              </button>
              <button
                aria-label="Next Testimonial"
                type="button"
                className={`custom-swiper-next w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border cursor-pointer ${
                  theme === "dark"
                    ? "border-slate-800 bg-[#111726] text-white hover:bg-[#2438D8] hover:border-[#2438D8] shadow-md hover:shadow-[0_0_20px_rgba(36,56,216,0.4)]"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-[#2438D8] hover:text-white hover:border-[#2438D8] shadow-sm hover:shadow-[0_0_20px_rgba(36,56,216,0.3)]"
                }`}
              >
                <IoChevronForward className="text-lg" />
              </button>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Testimonials;
