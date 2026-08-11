import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const IphoneMockup = ({ src, alt }) => (
  <div className="relative mx-auto w-full max-w-[220px] p-2 bg-[#121316] rounded-t-[38px] shadow-2xl border-t-2 border-x-2 border-slate-800 ring-1 ring-white/10 transform group-hover:-translate-y-3 transition-transform duration-500">
    {/* Dynamic Island */}
    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-20 flex items-center justify-end px-1 shadow-sm">
      <div className="w-1.5 h-1.5 rounded-full bg-[#1e1f24] border border-slate-800" />
    </div>

    {/* Screen Frame displaying ~70% of the mockup */}
    <div className="relative overflow-hidden rounded-t-[30px] bg-black h-[340px] w-full">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover object-top scale-[1.03]"
      />
    </div>
  </div>
);

const Features = () => {
  const { theme } = useContext(GlobalContext);

  const features = [
    {
      title: "Verified Reviews",
      description:
        "Every review is screened to ensure it’s authentic and useful—no fake ratings, no hidden agendas.",
      image: theme === "light" ? "/images/light/1.png" : "/images/dark/1.png",
    },
    {
      title: "Landlord & Property Ratings",
      description:
        "Get a complete picture of a landlord’s track record, from maintenance response times to fairness in lease handling.",
      image: theme === "light" ? "/images/light/2.png" : "/images/dark/2.png",
    },
    {
      title: "Property Scorecards",
      description:
        "At-a-glance overviews highlight key metrics like cleanliness, security, noise level, and neighborhood quality.",
      image: theme === "light" ? "/images/light/3.png" : "/images/dark/3.png",
    },
    {
      title: "Smart Filters & Tags",
      description:
        "Quickly narrow down listings based on what matters most—budget, location, amenities, and key tags.",
      image: theme === "light" ? "/images/light/4.png" : "/images/dark/4.png",
    },
    {
      title: "Legal Advice & Resources",
      description:
        "Find essential documents, tips, and resources to guide you through tenant rights and lease agreements.",
      image: theme === "light" ? "/images/light/5.png" : "/images/dark/5.png",
    },
    {
      title: "Upload Ownership Certificate",
      description:
        "Easily upload ownership documents and verify property certificates seamlessly inside the app.",
      image: theme === "light" ? "/images/light/6.png" : "/images/dark/6.png",
    },
  ];

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black" : "bg-white text-[#1E2EDE]"
      } flex flex-col items-center py-16 transition-colors duration-300`}
    >
      <div className="flex w-full px-6 md:px-20 lg:px-40 items-center flex-wrap md:flex-nowrap justify-between max-w-6xl">
        <div className="w-full px-4" id="features">
          <h2
            className={`text-[40px] hidden md:block md:text-[50px] font-bold mb-2 text-left ${
              theme === "dark" ? "text-white" : "text-[#1E2EDE]"
            }`}
          >
            Key Features{" "}
            <span
              className={`${theme === "dark" ? "text-white" : "text-black"}`}
            >
              of
            </span>{" "}
            <br />
            <span
              className={`font-bold text-left text-[50px] ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Rentwiser
            </span>
          </h2>
          <h2
            className={`text-[40px] block md:hidden md:text-[50px] font-bold mb-2 text-left ${
              theme === "dark" ? "text-white" : "text-[#1E2EDE]"
            }`}
          >
            Key Features{" "}
            <span
              className={`font-bold text-left text-[40px] md:text-[50px] ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              of Rentwiser!
            </span>
          </h2>
        </div>
        <div
          className="w-full mx-5 md:mx-0 px-4 flex justify-end"
          id="features"
        >
          <p
            className={`border-l-2 px-3 text-base md:text-lg ${
              theme === "dark" ? "text-[#C4C4C4]" : "text-[#565656]"
            }`}
            style={{ borderColor: "#1E2EDE" }}
          >
            Everything You Need to Rent with Confidence
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6 max-w-6xl w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${
              theme === "dark"
                ? "bg-[#1E1E1E] border border-gray-800"
                : "bg-[#1E2EDE0C] border border-[#1E2EDE1F]"
            } rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between pt-8 overflow-hidden h-[520px] group`}
          >
            {/* Header Text Section */}
            <div className="flex flex-col items-center px-6">
              <h4
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } text-xl font-bold text-center mb-3`}
              >
                {feature.title}
              </h4>
              <p
                className={`${
                  theme === "dark" ? "text-[#B0B0B0]" : "text-[#565656]"
                } text-sm text-center leading-relaxed`}
              >
                {feature.description}
              </p>
            </div>

            {/* 70% Phone Mockup Section */}
            <div className="w-full pt-3 overflow-hidden flex justify-center pt-2 h-[330px] items-start">
              <IphoneMockup src={feature.image} alt={feature.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
