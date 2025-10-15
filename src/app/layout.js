'use client';

import './globals.css';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoGameControllerOutline } from 'react-icons/io5';
import Footer from './Component/Footer';

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <html lang="en">
      <head>
        <title>BG678 | Play & Win</title>
        <meta
          name="description"
          content="Play games, spin the wheel, and win rewards on BG678. Fun, fortune, and prizes await!"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="min-h-screen bg-gradient-to-b from-[#0b0e15] to-black text-white font-sans">
        {/* ✅ Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-slate-800 shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            {/* ✅ Left: Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 cursor-pointer group -ml-1"
            >
              <IoGameControllerOutline className="w-8 h-8 text-red-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <span className="text-[1.9rem] font-extrabold tracking-wide">
                <span className="text-red-500 group-hover:text-red-400 transition-colors duration-200">
                  bg
                </span>
                <span className="text-white">678</span>
              </span>
            </Link>

            {/* ✅ Center: Navigation Links */}
            <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-300">
              <Link
                href="#about"
                className="hover:text-red-400 focus:text-red-400 transition"
              >
                About
              </Link>
              <Link
                href="#features"
                className="hover:text-red-400 focus:text-red-400 transition"
              >
                Features
              </Link>
              <Link
                href="/Blog"
                className="hover:text-red-400 focus:text-red-400 transition"
              >
                Blog
              </Link>
            </div>

            {/* ✅ Right: Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => router.push('/SpinWheel')}
                className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md text-white font-semibold text-sm shadow-md transition-transform hover:scale-105 hover:shadow-green-400/40 focus:ring-2 focus:ring-green-400"
              >
                🎯 Spin
              </button>

              <button
                onClick={() =>
                  window.open(
                    'https://www.bg678p.com/#/pages/login/register?invitationCode=5097269017',
                    '_blank'
                  )
                }
                className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-md text-white font-semibold text-sm shadow-md transition-transform hover:scale-105 hover:shadow-red-400/40 focus:ring-2 focus:ring-red-400"
              >
                🚀 Signup
              </button>
            </div>

            {/* ✅ Mobile Menu Button */}
            <button
              aria-label="Toggle menu"
              className="md:hidden flex flex-col gap-1.5 text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>

          {/* ✅ Mobile Dropdown */}
          {menuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-slate-800 px-6 py-5 text-slate-200 flex flex-col gap-4 text-center animate-fadeIn">
              <Link
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-400 transition"
              >
                About
              </Link>
              <Link
                href="#features"
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-400 transition"
              >
                Features
              </Link>
              <Link
                href="/Blog"
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-400 transition"
              >
                Blog
              </Link>

              <button
                onClick={() =>
                  window.open(
                    'https://www.bg678p.com/#/pages/login/register?invitationCode=5097269017',
                    '_blank'
                  )
                }
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white font-semibold text-sm shadow-md transition-transform hover:scale-105"
              >
                🚀 Signup
              </button>
            </div>
          )}
        </nav>

        {/* ✅ Spacer to prevent overlap */}
        <div className="h-20" />

        {/* ✅ Page Content */}
        <main className="px-4 md:px-0 animate-fadeIn">{children}</main>

        {/* ✅ Footer */}
        <Footer />
      </body>
    </html>
  );
}
