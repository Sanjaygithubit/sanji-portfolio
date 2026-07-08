'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import {  NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050014]/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-purple-900/20">
      <div className="max-w-7xl mx-auto h-[72px] px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo4.png"
            alt="Sanjay Logo"
            width={58}
            height={58}
            priority
            draggable={false}
          />

          <div className="hidden md:flex flex-col leading-none">
            <span className="text-white text-lg font-bold tracking-wider">
              SANJAY
            </span>

            <span className="text-xs text-purple-400">
              MERN Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg">

          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="relative text-gray-300 hover:text-purple-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.title}
            </Link>
          ))}

        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-5">

          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-5 h-5 text-gray-300 hover:text-purple-400 hover:scale-110 transition-all duration-300" />
            </Link>
          ))}

          <Link
            href="/Sanjay_Resume.pdf"
            download
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:scale-105 transition-all duration-300"
          >
            Resume
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (

        <div className="md:hidden bg-[#050014]/95 backdrop-blur-xl border-t border-white/10">

          <div className="flex flex-col items-center gap-6 py-8">

            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-purple-400 transition text-lg"
              >
                {link.title}
              </Link>
            ))}

            <Link
              href="/projects/resume.pdf"
              download
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white"
            >
              Download Resume
            </Link>

            <div className="flex gap-6 mt-2">

              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-7 h-7 text-white hover:text-purple-400 transition" />
                </Link>
              ))}

            </div>

          </div>

        </div>

      )}
    </header>
  );
};