"use client";
import React, { useState, useEffect } from "react";

export default function Category() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // Menu toggle state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menu toggle function
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 mobile:px-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://cdn.dribbble.com/userupload/4706150/file/original-a899dd9c562e2becc8dbd9713c198e2a.jpg"
            alt="Transport Logo"
            className="h-10 w-10 rounded-full"
          />
          <span
            className={`ml-2 text-lg mobile:text-base lg:text-lg font-bold ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Transport
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6">
          <a
            href="#"
            className={`${
              isScrolled ? "text-black" : "text-white"
            } hover:text-yellow-500 text-sm mobile:text-xs lg:text-lg`}
          >
            Home
          </a>
          <a
            href="#"
            className={`${
              isScrolled ? "text-black" : "text-white"
            } hover:text-yellow-500 text-sm mobile:text-xs lg:text-lg`}
          >
            Pages
          </a>
          <a
            href="#"
            className={`${
              isScrolled ? "text-black" : "text-white"
            } hover:text-yellow-500 text-sm mobile:text-xs lg:text-lg`}
          >
            Services
          </a>
          <a
            href="#"
            className={`${
              isScrolled ? "text-black" : "text-white"
            } hover:text-yellow-500 text-sm mobile:text-xs lg:text-lg`}
          >
            News
          </a>
          <a
            href="#"
            className={`${
              isScrolled ? "text-black" : "text-white"
            } hover:text-yellow-500 text-sm mobile:text-xs lg:text-lg`}
          >
            Contact
          </a>
        </nav>

        {/* Support Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-yellow-500 text-white px-4 py-2 text-sm lg:text-lg rounded-lg hover:bg-yellow-600">
            Get Support
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMenuToggle}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Full Height Sidebar Menu */}
      {showMenu && (
        <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transition-transform">
          <nav className="flex flex-col items-start py-8 px-6 space-y-6">
            <a
              href="#"
              className="text-gray-800 hover:text-yellow-500 text-lg font-semibold"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-yellow-500 text-lg font-semibold"
            >
              Pages
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-yellow-500 text-lg font-semibold"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-yellow-500 text-lg font-semibold"
            >
              News
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-yellow-500 text-lg font-semibold"
            >
              Contact
            </a>
          </nav>
          {/* Close Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="absolute top-4 right-4 text-gray-800 hover:text-yellow-500"
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
}
