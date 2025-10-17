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
            <Link href="/" className="flex items-center gap-3 cursor-pointer group -ml-1">
              <IoGameControllerOutline className="w-10 h-10 sm:w-12 sm:h-12 text-red-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <span className="text-[2rem] sm:text-[2.4rem] font-extrabold tracking-wide">
                <span className="text-red-500 group-hover:text-red-400 transition-colors duration-200">
                  BG
                </span>
                <span className="text-white">678</span>
              </span>
            </Link>

            {/* ✅ Center: Navigation Links */}
            <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-300">
              <Link href="/About" className="hover:text-red-400 focus:text-red-400 transition">
                About
              </Link>
              <Link href="#features" className="hover:text-red-400 focus:text-red-400 transition">
                Features
              </Link>
              <Link href="/Blog" className="hover:text-red-400 focus:text-red-400 transition">
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
                    'https://www.bg678p.com/#/pages/login/register?invitationCode=7179460482',
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
                href="/About"
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
                    'https://www.bg678p.com/#/pages/login/register?invitationCode=7179460482',
                    
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
        <div className="h-10" />

       {/* ✅ Telegram Fixed Button */}
<a
  href="https://t.me/winsureinBG678" 
  target="_blank"
  rel="noopener noreferrer"
  className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-1.5 rounded-l-md shadow-lg flex items-center gap-1.5 z-50 transition-colors"
>
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M22 4.01L2.5 10.75c-.5.2-.5.6 0 .8l4.3 1.3 1.9 5.8c.2.6.6.7 1 .5l2.8-2 4.9 3.6c.9.5 1.5.2 1.7-.9l3-13c.2-.7-.2-1-1-1z" />
  </svg>
  <span className="hidden md:inline text-sm">Telegram</span>
</a>

        <main className="px-4 md:px-0 animate-fadeIn">{children}</main>

        {/* ✅ Footer */}
        <Footer />
      </body>
    </html>
  );
}
