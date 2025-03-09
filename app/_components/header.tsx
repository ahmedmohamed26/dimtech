"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navList = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "History",
      href: "#history",
    },
    {
      name: "Community",
      href: "#community",
    },
    {
      name: "Executive",
      href: "#executive",
    },

    {
      name: "Contact",
      href: "/contact",
    },
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className="bg-transparent">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block" href="#">
              <span className="sr-only">Home</span>
              <h1 className="text-white text-size24">Dimtech</h1>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {navList.map((navItem) => (
                  <li key={navItem.name}>
                    <Link className="text-size16" href={navItem.href}>
                      {navItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-4 lg:hidden">
              <div className="block rounded bg-gray-100 pt-3.5 text-gray-600 transition hover:text-gray-600/75">
                <button
                  onClick={toggleMenu}
                  className="text-gray-700 focus:outline-none mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0,0,256,256"
                    width="30px"
                    height="30px"
                    fill-rule="nonzero"
                  >
                    <g
                      fill="#ffffff"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <g transform="scale(8.53333,8.53333)">
                        <path d="M3,7c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,14c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,21c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587z" />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>

              <div
                className={`fixed top-0 left-0 w-full h-screen bg-white z-50 transform transition-transform duration-300 ease-in-out ${
                  isOpen
                    ? "opacity-100 translate-x-0 visible"
                    : "opacity-0 -translate-x-full invisible pointer-events-none"
                } lg:static lg:flex lg:bg-transparent lg:h-auto lg:w-auto lg:translate-x-0 lg:opacity-100 lg:visible`}
              >
                <button
                  onClick={closeMenu}
                  className="absolute top-4 right-4 text-gray-700 focus:outline-none lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0,0,256,256"
                    width="30px"
                    height="30px"
                    fill-rule="nonzero"
                  >
                    <g
                      fill="#000000"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M9.15625,6.3125l-2.84375,2.84375l15.84375,15.84375l-15.9375,15.96875l2.8125,2.8125l15.96875,-15.9375l15.9375,15.9375l2.84375,-2.84375l-15.9375,-15.9375l15.84375,-15.84375l-2.84375,-2.84375l-15.84375,15.84375z" />
                      </g>
                    </g>
                  </svg>
                </button>
                <ul className="flex flex-col justify-center items-center space-y-8 h-full lg:flex-row lg:space-y-0 lg:space-x-6">
                  {navList.map((link, ids) => (
                    <li key={ids}>
                      <Link
                        href={link.href}
                        prefetch={false}
                        className="text-[16px] text-black font-regular"
                        onClick={closeMenu}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
