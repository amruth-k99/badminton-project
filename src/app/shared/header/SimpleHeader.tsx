"use client";

import CONFIG from "@/config";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Logo from "/public/logo.png";
import Icons from "@/utils/Icons";

const navList = [
  {
    name: "Upcoming Events",
    href: "/events",
    Icon: Icons.Property,
  },
  {
    name: "Social",
    href: "/social",
    Icon: Icons.Property,
  },
];

const SimpleHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    console.log(isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative mb-10 z-10">
      <div className="bg-gray-50 py-2.5 fixed top-0 w-full">
        <nav
          className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/" className="py-2">
                <div className="flex items-center">
                  <span className="sr-only text-gray-800">
                    {CONFIG.APP_NAME}
                  </span>
                  <Image
                    className="h-8 w-auto sm:h-10"
                    width={100}
                    height={320}
                    src={Logo}
                    alt={CONFIG.APP_NAME || "Logo"}
                  />
                  <div className="px-3">
                    <h1 className="text-xl font-bold text-gray-800">
                      {CONFIG.APP_NAME}
                    </h1>
                  </div>
                </div>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  onClick={handleClick}
                  className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* <!-- Heroicon name: outline/menu --> */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              {navList.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-800 hover:text-black"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
            >
              Join Us
            </Link>
          </div>
        </nav>
      </div>

      <div
        className={`${
          isMenuOpen
            ? "opacity-100 scale-100 duration-100 ease-in"
            : "duration-150 ease-out opacity-0 scale-95"
        } absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden z-50`}
      >
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden`}
        >
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <Image
                className="h-8 w-auto"
                width={100}
                height={100}
                src={Logo}
                alt="News site logo"
              />
              <p className="text-xl font-bold text-gray-900">
                {" "}
                {CONFIG.APP_NAME}
              </p>
            </div>
            <div className="-mr-2">
              <button
                type="button"
                onClick={handleClick}
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
              >
                <span className="sr-only">Close menu</span>
                {/* <!-- Heroicon name: outline/x --> */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="pt-5 pb-6">
            <div className="px-2 space-y-1">
              {navList.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-6 px-5">
              <Link
                href="#"
                className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
