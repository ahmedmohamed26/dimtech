"use client";
import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Executive = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 2 },
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
    <div className="item mx-2 min-h-60" data-value={index} key={index}>
      <div className="custom-card">
        <div className="flex">
          <div className="hidden sm:block sm:shrink-0">
            <img
              alt=""
              src={team.img}
              className="size-16 rounded-full object-cover shadow-xs w-20 h-20"
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
        <p className="text-size20 opacity-[.75] text-white mt-4">
          Michael designs intuitive and user-friendly interfaces, focusing on
          enhancing user experience. His attention to detail ensures that every
          project is both functional and aesthetically pleasing.
        </p>
      </div>
    </div>
  ));

  return (
    <div className="container py-16">
      <h3 className="text-size40"> Our Executive</h3>
      <p className="text-size20 opacity-[.75] text-white max-w-[65%] mt-4">
        Discover Dimtech’s journey from its founding to becoming a leader in
        quantitative finance. Explore key milestones, technological
        advancements, and strategic expansions that have shaped our success over
        the years.
      </p>

      <div className="mt-12">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="responsive"
          infinite
          disableDotsControls
          autoPlayInterval={2000}
          animationDuration={2000}
          onSlideChanged={() => setIsDragging(false)}
          renderPrevButton={() => {
            return (
              <div className="flex items-center justify-end mt-3">
                <svg
                  className="w-10 h-10 border-white border-2 rounded-full p-1 cursor-pointer hover:border-transparent  hover:bg-[#0f62fe] transition duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                >
                  <path
                    d="M189.3 128.4 89 233.4c-6 5.8-9 13.7-9 22.4s3 16.5 9 22.4l100.3 105.4c11.9 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2L184.4 288h217c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32h-217l48.2-50.4c11.9-12.5 11.9-32.7 0-45.2-12-12.5-31.3-12.5-43.3 0z"
                    fill="#ffffff"
                    className="fill-000000"
                  />
                </svg>
              </div>
            );
          }}
          renderNextButton={() => {
            return (
              <div className="flex mt-3">
                <svg
                  className="w-10 h-10 border-white border-2 rounded-full p-1 cursor-pointer hover:border-transparent hover:bg-[#0f62fe] transition duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                >
                  <path
                    d="m322.7 128.4 100.3 105c6 5.8 9 13.7 9 22.4s-3 16.5-9 22.4L322.7 383.6c-11.9 12.5-31.3 12.5-43.2 0-11.9-12.5-11.9-32.7 0-45.2l48.2-50.4h-217c-17 0-30.7-14.3-30.7-32s13.7-32 30.6-32h217l-48.2-50.4c-11.9-12.5-11.9-32.7 0-45.2 12-12.5 31.3-12.5 43.3 0z"
                    fill="#ffffff"
                    className="fill-000000"
                  />
                </svg>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Executive;
