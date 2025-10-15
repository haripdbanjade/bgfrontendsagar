"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export default function Hero() {
  const sliderImages = ["/images/B001.png", "/images/B002.png", "/images/B003.png"];

  const fakeWins = [
    { name: "Mem***LPA", amount: "₹5,250.00", game: "Treasures of Aztec" },
    { name: "Aka***PKR", amount: "₹2,780.00", game: "Book of Dead" },
    { name: "Sur***KTM", amount: "₹9,100.00", game: "Gates of Olympus" },
    { name: "Ram***BRJ", amount: "₹1,850.00", game: "Sweet Bonanza" },
    { name: "Bib***BTL", amount: "₹6,420.00", game: "Crazy Time" },
    { name: "Jen***POK", amount: "₹3,999.00", game: "Big Bass Splash" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  const [currentWin, setCurrentWin] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWin((prev) => (prev + 1) % fakeWins.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [fakeWins.length]);

  return (
    <header className="pt-6 pb-10 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden px-4 sm:px-6">
      
      {/* Notice Bar */}
      <div className="w-[85%] mx-auto mt-1 flex items-center justify-center rounded-full bg-slate-900 shadow-sm overflow-hidden border border-yellow-500">
        <div className="flex-1 py-1 px-2">
          <p className="text-[11px] sm:text-[12px] text-emerald-50 whitespace-nowrap overflow-hidden animate-marquee font-medium tracking-wide">
            ⚡ We've optimized access for smoother gameplay. Some domains are now fixed!
          </p>
        </div>
      </div>

      {/* Fake Wins */}
      <div className="mx-auto max-w-3xl mt-4 mb-6 flex justify-center">
        <div className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-full text-[11px] sm:text-sm flex flex-wrap gap-1 justify-center items-center shadow-sm animate-fade-in-out transition-all duration-500">
          <span className="text-yellow-400 font-semibold">{fakeWins[currentWin].name}</span>
          <span className="text-slate-300">won</span>
          <span className="text-yellow-500 font-bold">{fakeWins[currentWin].amount}</span>
          <span className="text-slate-400">in {fakeWins[currentWin].game}</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug tracking-tight">
            <span className="text-red-600">BG</span>
            <span className="text-white">678</span>
          </h1>

          <p className="mt-3 text-slate-300 max-w-md sm:max-w-lg text-base sm:text-lg leading-relaxed">
            Nonstop excitement with <span className="text-red-400 font-semibold">BG678</span> — your home for rewards, thrill, and instant wins!
          </p>

          <p className="mt-1 text-slate-400 max-w-md sm:max-w-lg text-sm sm:text-base">
            Spin, play, and win real cash daily. Join thousands of active players now!
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center md:justify-start">
            <a
              href="https://www.bg678p.com/#/pages/login/register?invitationCode=5097269017"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 px-6 py-2.5 rounded-lg text-white font-semibold shadow-sm hover:bg-red-700 transition w-full sm:w-auto text-center text-base sm:text-lg"
            >
              🎯 Play Now
            </a>

            <a
              href="/videos/video.mp4"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-red-500 px-6 py-2.5 rounded-lg text-white font-semibold hover:bg-red-500 hover:text-black transition w-full sm:w-auto text-center text-base sm:text-lg"
            >
              ▶ Watch Demo
            </a>
          </div>

          {/* Attention Bar */}
          <div className="mt-3 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 text-black font-semibold text-center py-1.5 px-4 rounded-full shadow-sm animate-pulse text-[10px] sm:text-sm max-w-xs sm:max-w-sm mx-auto md:mx-0">
            🚨 <span className="text-white">365 Days of Cash Drops</span> — Join & Win Instantly!
          </div>
        </div>

        {/* Right Side - Slider */}
        <div className="w-full md:w-1/2">
          <Slider {...settings}>
            {sliderImages.map((src, index) => (
              <div key={index} className="w-full flex justify-center items-center">
                <div className="relative w-full h-80 sm:h-96 md:h-[28rem] lg:h-[30rem]">
                  <Image
                    src={src}
                    alt={`Game Screenshot ${index + 1}`}
                    fill
                    className="object-contain sm:rounded-xl shadow-xl"
                    priority
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </header>
  );
}
