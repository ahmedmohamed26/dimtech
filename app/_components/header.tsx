"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathName = usePathname();
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
      href: "/Community",
    },
    {
      name: "Executive",
      href: "/Executive",
    },

    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="bg-transparent">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex py-8 items-center justify-between">
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
                    <Link
                      className={`text-size16 ${
                        pathName === navItem.href
                          ? "text-primary"
                          : "text-white"
                      }`}
                      href={navItem.href}
                    >
                      {navItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
