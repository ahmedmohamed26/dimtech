"use client";
import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Executive = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const teamList = [
    {
      name: "Daniel Melhem, Ph.D",
      role: "Founder - CEO",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      social: [
        {
          name: "Twitter",
          href: "#",
        },
        {
          name: "Linkedin",
          href: "#",
        },
      ],
    },
    {
      name: "Geoffrey Ducournau, Ph.D",
      role: "Chief of R&D",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      social: [
        {
          name: "Twitter",
          href: "#",
        },
        {
          name: "Linkedin",
          href: "#",
        },
      ],
    },
    {
      name: "Ramzi Shalak",
      role: "Chief Global Development Officer",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      social: [
        {
          name: "Twitter",
          href: "#",
        },
        {
          name: "Linkedin",
          href: "#",
        },
      ],
    },
    {
      name: "Dominique Larue",
      role: "Chief of investment strategies",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      social: [
        {
          name: "Twitter",
          href: "#",
        },
        {
          name: "Linkedin",
          href: "#",
        },
      ],
    },
  ];
  const [isDragging, setIsDragging] = useState(false);
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const items = teamList.map((team, index) => (
    <div className="item" data-value={index} key={index}>
      <div
        className="relative block overflow-hidden rounded-lg border-[#001141] mx-2 
        bg-gradient-to-b from-[#002d9c] to-[#000410] p-6 sm:px-6 lg:px-4 "
      >
        <div className="flex">
          <div className="hidden sm:block sm:shrink-0">
            <img
              alt=""
              src={team.img}
              className="size-16 rounded-lg object-cover shadow-xs w-20 h-20"
              loading="lazy"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            />
          </div>
          <div className="mx-4">
            <h3 className="text-size18 font-bold text-gray-900 sm:text-size16">
              {team.name}
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">
              {team.role}
            </p>
            <div className="mt-4 flow-root">
              <ul className="-m-1 flex flex-wrap">
                <li className="p-1 leading-none">
                  <a href="#" className="text-xs font-medium text-gray-300">
                    {team.social[0].name}
                  </a>
                </li>

                <li className="p-1 leading-none">
                  <a href="#" className="text-xs font-medium text-gray-300">
                    {team.social[1].name}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container py-16">
      <h3 className="text-size40 mb-16 relative inline-block  after:content-[''] after:absolute after:left-0  after:bottom-[-10px] after:w-24 after:h-[3px] after:bg-white">
        Our Executive
      </h3>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="responsive"
        infinite
        autoPlay
        disableDotsControls
        autoPlayInterval={2000}
        animationDuration={2000}
        onSlideChanged={() => setIsDragging(false)}
      />
    </div>
  );
};

export default Executive;
