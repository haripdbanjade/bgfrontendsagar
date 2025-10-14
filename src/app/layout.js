'use client';

import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import Footer from './Component/Footer';

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <html lang="en">
      <body className="min-h-screen bg-game-grad text-white mt-2 align-middle">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-slate-800 shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer group">
              <Image
                src="/pngwing.com.png"
                alt="GameVerse Logo"
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-3xl font-bold text-red-500 group-hover:text-red-400 transition-colors duration-200">
                bg<span className="text-white">678</span>
              </span>
            </Link>

            {/* Nav Links + Buttons */}
            <div className="flex items-center gap-8">
              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center text-sm font-medium text-slate-200 gap-6">
                <Link href="#features" className="hover:text-red-400 transition">Features</Link>
                <Link href="./Blog" className="hover:text-red-400 transition">Blog</Link>
                <Link href="#about" className="hover:text-red-400 transition">About</Link>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* ✅ Spin Button Routing to /SpinWheel */}
                <button
                  onClick={() => router.push('/SpinWheel')}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white font-semibold transition-shadow shadow-md text-sm"
                >
                  Spin
                </button>

                {/* Signup Button (visible only on desktop) */}
                <button
                  onClick={() =>
                    window.open(
                      'https://www.bg678p.com/#/pages/login/register?invitationCode=5097269017'
                    )
                  }
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white font-semibold transition-shadow shadow-md text-sm hidden md:inline-block"
                >
                  Signup
                </button>

                {/* Mobile Menu Toggle Button */}
                <button
                  aria-label="Toggle menu"
                  className="md:hidden flex flex-col gap-1 text-white focus:outline-none"
                  onClick={() => setMenuOpen(!menuOpen)}
                  type="button"
                >
                  <span
                    className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                  />
                  <span
                    className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <span
                    className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="md:hidden bg-black/90 border-t border-slate-800 px-6 py-4 text-slate-200 flex flex-col gap-4">
              <Link href="#features" onClick={() => setMenuOpen(false)} className="hover:text-red-400">Features</Link>
              <Link href="./Blog" onClick={() => setMenuOpen(false)} className="hover:text-red-400">Blog</Link>
              <Link href="#about" onClick={() => setMenuOpen(false)} className="hover:text-red-400">About</Link>

              {/* ✅ Signup Button for Mobile */}
              <button
                onClick={() =>
                  window.open(
                    'https://www.funxxyfe51.com/#/pages/login/register?invitationCode=5097269017',
                    '_blank'
                  )
                }
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white font-semibold transition-shadow shadow-md text-sm"
              >
                Signup
              </button>
            </div>
          )}
        </nav>

        {/* Spacer */}
        <div className="h-16 md:h-16" />

        {/* Main Content */}
        <main className="px-4 md:px-0">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
