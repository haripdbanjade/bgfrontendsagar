'use client';

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
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnHover: false,
  };

  const [currentWin, setCurrentWin] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWin((prev) => (prev + 1) % fakeWins.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [fakeWins.length]);

  return (
    <header className="pt-10 pb-16 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden px-4 sm:px-6">

      {/* Marquee */}
      <div className="w-[85%] mx-auto mt-2 flex items-center justify-center rounded-full bg-slate-900 shadow-md border border-yellow-500 overflow-hidden h-8">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[12px] sm:text-[14px] text-emerald-50 font-medium tracking-wide px-4">
              ⚡ Gaming isn’t just about fun anymore — it’s a real opportunity to earn! &nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Fake Win Notification (Clickable) */}
      <div className="mx-auto max-w-3xl mt-6 mb-8 flex justify-center">
        <a
          href="https://www.bg678p.com/#/pages/login/register?invitationCode=5097269017"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 border border-slate-700 text-white px-5 py-2 rounded-full text-[12px] sm:text-sm flex flex-wrap gap-2 justify-center items-center shadow-md animate-fade-in-out transition-all duration-500 hover:bg-slate-700 cursor-pointer"
        >
          <span className="text-yellow-400 font-semibold">{fakeWins[currentWin].name}</span>
          <span className="text-slate-300">won</span>
          <span className="text-yellow-500 font-bold">{fakeWins[currentWin].amount}</span>
          <span className="text-slate-400">in {fakeWins[currentWin].game}</span>
        </a>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="text-red-600">BG</span>
            <span className="text-white">678</span>
          </h1>

          <p className="mt-4 text-slate-300 max-w-md sm:max-w-lg text-base sm:text-lg leading-relaxed">
            Dive into the ultimate thrill with <span className="text-red-400 font-semibold">BG678</span> — where every spin could turn into a life-changing jackpot! Experience nonstop excitement, instant wins, and jaw-dropping cash rewards.
          </p>

          <p className="mt-2 text-slate-400 max-w-md sm:max-w-lg text-sm sm:text-base">
            Play smart, spin fast, and win BIG — thousands of players are cashing out daily with prizes soaring up to <span className="font-bold text-green-400">₹10,00,000+</span>! Are you ready to join the winning league?
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <a
              href="https://www.bg678p.com/#/pages/login/register?invitationCode=5097269017"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 px-6 py-2.5 rounded-lg text-white font-semibold shadow-lg hover:bg-red-700 transition w-full sm:w-auto text-center text-base sm:text-lg"
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
        <div className="mt-3 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 text-black font-medium text-center py-2 px-4 rounded-full shadow-md animate-pulse text-xs max-w-[240px] sm:max-w-[280px] mx-auto md:mx-0">
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
                    className="object-contain sm:rounded-xl shadow-2xl"
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
