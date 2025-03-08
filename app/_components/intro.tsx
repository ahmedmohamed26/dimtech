import React from "react";

const Intro = () => {
  const list = [
    {
      title: "Dimtech",
      subTitle: "Research",
      description:
        "Quant Trading Multi-Strategy Approach Focused on Market Microstructure Inefficiencies",
    },
    {
      title: "Dimtech",
      subTitle: "Technology",
      description:
        "Algorithmic Trading & Automated Trading Systems for CTA Strategies on DeepFi platform",
    },
    {
      title: "Dimtech",
      subTitle: "Advisory",
      description:
        "Custom Quant Services: From R&D Solutions to Technology Deployment",
    },
  ];
  return (
    <div className="h-[500px] text-center py-20 flex flex-col justify-center items-center">
      <h2 className="text-5xl">Science-Driven Quantitative Finance</h2>
      <p className="text-xl mt-8 text-primary">Deep Finance</p>
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
            <h6 className="text-size16 text-primary mt-1">{item.subTitle}</h6>
            <p className="text-size12 text-white mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intro;
