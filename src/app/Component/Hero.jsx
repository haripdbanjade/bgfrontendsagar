"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export default function Hero() {
  const sliderImages = [
    "/images/B001.png",
    "/images/B002.png",
    "/images/B003.png",
  ];

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
    <header className="pt-10 pb-16 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden px-6 sm:px-8">
      
      {/* Notice Bar */}
      <div className="w-[96%] mx-auto mt-3 flex items-center justify-center rounded-full bg-slate-900 shadow-lg overflow-hidden border border-yellow-600">
        <div className="flex-1 bg-slate-900 py-1.5 px-3">
          <p className="text-[13px] sm:text-sm text-emerald-50 whitespace-nowrap overflow-hidden animate-marquee font-medium tracking-wide">
            We've recently received feedback from users that some domains are inaccessible. We've implemented optimizations to fix this issue.
          </p>
        </div>
      </div>

      {/* Fake Wins */}
      <div className="mx-auto max-w-3xl mt-8 mb-10 flex justify-center">
        <div className="bg-slate-800 border border-slate-700 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm flex flex-wrap gap-2 justify-center items-center shadow-md animate-fade-in-out transition-all duration-500">
          <span className="text-yellow-400 font-semibold">{fakeWins[currentWin].name}</span>
          <span className="text-slate-300">won</span>
          <span className="text-yellow-500 font-bold">{fakeWins[currentWin].amount}</span>
          <span className="text-slate-400">in {fakeWins[currentWin].game}</span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-wide">
            <span className="text-red-600">BG</span>
            <span className="text-white">678</span>
          </h1>

          <p className="mt-5 text-slate-300 max-w-md sm:max-w-lg text-base sm:text-lg leading-relaxed">
            Experience nonstop excitement with{" "}
            <span className="text-red-400 font-semibold">BG678</span> — the home of rewards, thrill, and instant wins!
          </p>

          <p className="mt-3 text-slate-400 max-w-md sm:max-w-lg text-sm sm:text-base">
            Spin, play, and win real cash every day. Join thousands of active players now!
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <a
              href="https://www.bg678p.com/#/pages/login/register?invitationCode=5097269017"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 px-7 py-2.5 rounded-lg text-white font-semibold shadow-lg hover:bg-red-700 transition w-full sm:w-auto text-center text-sm sm:text-base"
            >
              🎯 Play Now
            </a>

            <a
              href="/videos/video.mp4"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-red-500 px-7 py-2.5 rounded-lg text-white font-semibold hover:bg-red-500 hover:text-black transition text-center w-full sm:w-auto text-sm sm:text-base"
            >
              ▶ Watch Demo
            </a>
          </div>

          {/* Attention Bar */}
          <div className="mt-5 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 text-black font-semibold text-center py-1.5 px-5 rounded-full shadow-md animate-pulse text-xs sm:text-sm max-w-md sm:max-w-lg mx-auto md:mx-0">
            🚨 <span className="text-white">365 Days of Cash Drops</span> — Join & Win Instantly!
          </div>
        </div>

<div className="w-full md:w-1/2">
  <Slider {...settings}>
    {sliderImages.map((src, index) => (
      <div key={index} className="w-full flex justify-center items-center">
        {/* Aspect ratio container */}
        <div className="relative w-full h-120 pb-[56.25%] sm:pb-[50%] lg:pb-[45%]">
          <Image
            src={src}
            alt={`Game Screenshot ${index + 1}`}
            fill
            className="object-contain sm:rounded-2xl shadow-2xl"
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
