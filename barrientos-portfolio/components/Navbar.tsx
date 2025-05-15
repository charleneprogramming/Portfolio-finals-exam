"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  return (
    <nav className="bg-white text-gray-800 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left Side: Text */}
        <div className="text-xl font-bold text-yellow-500">Charlene Barrientos</div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {/* Hamburger Icon */}
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
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Right Side: Navigation Links */}
        <div
          className={`hidden md:flex space-x-6 ${
            isMenuOpen ? "hidden" : "block"
          }`}
        >
          <Link href="/home">
            <i
              className={`font-bold relative hover:underline ${
                pathname === "/home" ? "underline text-yellow-400" : ""
              }`}
              style={{
                textUnderlineOffset: "4px", // Adjusts the space above the underline
              }}
            >
              Home
            </i>
          </Link>
          <Link href="/about">
            <i
              className={`font-bold relative hover:underline ${
                pathname === "/about" ? "underline text-yellow-400" : ""
              }`}
              style={{
                textUnderlineOffset: "4px",
              }}
            >
              About
            </i>
          </Link>
          <Link href="/projects">
            <i
              className={`font-bold relative hover:underline ${
                pathname === "/projects" ? "underline text-yellow-400" : ""
              }`}
              style={{
                textUnderlineOffset: "4px",
              }}
            >
              Projects
            </i>
          </Link>
          <Link href="/contact">
            <i
              className={`font-bold relative hover:underline ${
                pathname === "/contact" ? "underline text-yellow-400" : ""
              }`}
              style={{
                textUnderlineOffset: "4px",
              }}
            >
              Contact
            </i>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-4 py-2">
            <Link href="/home">
              <i
                className={`font-bold hover:underline ${
                  pathname === "/home" ? "underline text-yellow-400" : ""
                }`}
              >
                Home
              </i>
            </Link>
            <Link href="/about">
              <i
                className={`font-bold hover:underline ${
                  pathname === "/about" ? "underline text-yellow-400" : ""
                }`}
              >
                About
              </i>
            </Link>
            <Link href="/projects">
              <i
                className={`font-bold hover:underline ${
                  pathname === "/projects" ? "underline text-yellow-400" : ""
                }`}
              >
                Projects
              </i>
            </Link>
            <Link href="/contact">
              <i
                className={`font-bold hover:underline ${
                  pathname === "/contact" ? "underline text-yellow-400" : ""
                }`}
              >
                Contact
              </i>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}