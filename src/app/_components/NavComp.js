"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavComp = () => {
    const [expanded, setExpanded] = useState(false);

  return (
    <>
      <header className="py-4 bg-black sm:py-6 z-40">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <Link href="/" title="" className="flex">
                <p className="text-3xl font-bold text-white">
                  Logo
                </p>
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
              <Link
                href="/"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/Products"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Our Work
              </Link>
              <Link
                href="/ContactUs"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Contact
              </Link>
              <Link
                href="/aboutus"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                About Us
              </Link>
            </nav>
          </div>

          {expanded && (
            <nav className="md:hidden">
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                <Link
                  href="/"
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="/Products"
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  Our Work
                </Link>
                <Link
                  href="/ContactUs"
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  Contact
                </Link>
                <Link
                  href="/aboutus"
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  About Us
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default NavComp;
