import dynamic from "next/dynamic";
import React from "react";
const Header = dynamic(() => import("./header"));

const Intro = () => {
  const list = [
    {
      title: "Research",
      description:
        "Quant Trading Multi-Strategy Approach Focused on Market Microstructure Inefficiencies",
    },
    {
      title: "Technology",
      description:
        "Algorithmic Trading & Automated Trading Systems for CTA Strategies on DeepFi platform",
    },
    {
      title: "Advisory",
      description:
        "Custom Quant Services: From R&D Solutions to Technology Deployment",
    },
  ];
  return (
    <div className="relative h-screen flex flex-col text-center">
      <Header />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source
          src="https://cdn.pixabay.com/video/2022/11/26/140578-775389242_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-1]" />
      <div className="container h-[100vh] text-center py-16 flex flex-col justify-center items-center">
        <h2 className="text-5xl">Science-Driven Quantitative Finance</h2>
        <p className="text-3xl mt-6 text-white">Deep Finance</p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-16 mt-16">
          {list.map((item, index) => (
            <div
              key={index}
              className={`relative ${
                index !== list.length - 1
                  ? "after:content-[''] after:absolute after:bottom-0 after:right-[-20px] after:w-[1px] after:h-[80%] after:bg-white m-auto after:hidden lg:after:block"
                  : ""
              }`}
            >
              <h4 className="text-size24">{item.title}</h4>
              <p className="text-size12 text-white mt-2 opacity-[.75]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
