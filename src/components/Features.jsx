import React, { useContext } from "react";
import {
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
  gradient,
} from "../assets/export.js";
import { GlobalContext } from "../context/GlobalContext";

const Features = () => {
  const { theme, setTheme } = useContext(GlobalContext);

  const features = [
    {
      title: "Verified Reviews",
      description:
        "Every review is screened to ensure it’s authentic and useful—no fake ratings, no hidden agendas.",
      image: theme == "light" ? "/images/light/1.png" : "/images/dark/1.png",
    },
    {
      title: "Landlord & Property Ratings",
      description:
        "Get a complete picture of a landlord’s track record, from maintenance response times to fairness in lease handling.",
      image: theme == "light" ? "/images/light/2.png" : "/images/dark/2.png",
    },
    {
      title: "Property Scorecards",
      description:
        "At-a-glance overviews highlight key metrics like cleanliness, security, noise level, and neighborhood quality.",
      image: theme == "light" ? "/images/light/3.png" : "/images/dark/3.png",
    },
    {
      title: "Smart Filters & Tags:",
      description:
        "Quickly narrow down listings based on what matters most—budget, location, amenities, tags like “Responsive Landlord” or “Great for Students.”.",
      image: theme == "light" ? "/images/light/4.png" : "/images/dark/4.png",
    },
    {
      title: "Anonymous Posting:",
      description:
        "Share your truth without revealing your identity—because honesty should never feel risky.",
      image: theme == "light" ? "/images/light/5.png" : "/images/dark/5.png",
    },
    {
      title: "Educational Content Sharing:",
      description:
        "Access a wealth of educational materials from research studies to presentations. Upload, share, and grow your knowledge base.",
      image: theme == "light" ? "/images/light/6.png" : "/images/dark/6.png",
    },
    // {
    //   title: "Cross-Device Ready:",
    //   description:
    //     "Use Adele on mobile, tablet, or desktop with a smooth, responsive design.",
    //   image: theme == "light" ? "/images/light/7.png" : "/images/dark/7.png",
    // },
  ];

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black" : "text-[#1E2EDE]"
      } flex flex-col items-center py-10`}
    >
      <div className="flex w-full px-40 items-center flex-wrap md:flex-nowrap justify-between">
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
          className="w-full  mx-5 md:mx-0 px-4 flex justify-end "
          id="features"
        >
          <p
            className={`border-l-2 px-2 ${
              theme === "dark" ? "text-[#C4C4C4]" : "text-[#565656]"
            }`}
            style={{ borderColor: theme === "dark" ? "#1E2EDE" : "#1E2EDE" }}
          >
            Everything You Need to Rent with Confidence
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 px-4 max-w-6xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${
              theme === "dark" ? "bg-[#303030] text-black" : "bg-[#1E2EDE14]"
            } 
                    rounded-3xl shadow-lg text-center flex flex-col items-center space-y-4`}
          >
            <h4
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } text-xl font-semibold pl-6 pr-6 pt-8`}
            >
              {feature.title}
            </h4>
            <p
              className={`${
                theme === "dark" ? "text-white" : "text-[#565656]"
              } text-sm pl-6 pr-6`}
            >
              {feature.description}
            </p>
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover rounded-lg pl-8 pr-8"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
