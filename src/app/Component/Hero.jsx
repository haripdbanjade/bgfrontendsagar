"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export default function Hero() {
  const sliderImages = [
    "/images/41.jpg",
    "/images/51.jpg",
    "/images/31.jpg",
    "/images/61.jpg",
    "/images/71.jpg",
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
    <header className="pt-12 pb-16 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden px-9  sm:px-6 lg:px-8">
      {/* Responsive fakeWins notification */}
      <div className="mx-auto max-w-3xl mb-8 px-2 sm:px-0">
        <div className="bg-slate-800 border border-slate-700 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm flex flex-wrap gap-1 sm:gap-2 justify-center sm:justify-start items-center shadow-lg animate-fade-in-out transition-all duration-500 max-w-full sm:max-w-max mx-auto sm:mx-0">
          <span className="text-yellow-400 font-semibold truncate max-w-[100px] sm:max-w-none">
            {fakeWins[currentWin].name}
          </span>
          <span className="text-slate-300">just won</span>
          <span className="text-yellow-500 font-bold">{fakeWins[currentWin].amount}</span>
          <span className="text-slate-400 truncate max-w-[120px] sm:max-w-none">
            in {fakeWins[currentWin].game}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left content */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            <span className="text-red-500">bg</span>
            <span className="text-white">678</span>
          </h1>

          <p className="mt-5 text-slate-300 max-w-md sm:max-w-lg text-base sm:text-lg">
            Fast-paced combat, deep progression, and a living sci-fi world. Pre-order now and get the exclusive{" "}
            <span className="text-red-400 font-semibold">Founder's Pack</span>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
           <a
  href="https://www.bg678p.com/#/pages/login/register?invitationCode=5097269017"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-red-600 px-6 py-3 rounded-lg text-white font-semibold shadow-lg hover:bg-red-700 transition w-full sm:w-auto text-center"
>
  Play Now
</a>


<a
  href="/videos/video.mp4"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-red-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-red-500 transition text-center w-full sm:w-auto"
>
  Watch Video
</a>


          </div>
        </div>

        {/* Right slider */}
        <div className="w-full md:w-1/2 max-w-full max-h-[450px] sm:max-h-[500px] lg:max-h-[600px]">
          <Slider {...settings}>
            {sliderImages.map((src, index) => (
              <div key={index} className="w-full flex justify-center items-center">
                <Image
                  src={src}
                  alt={`Game Screenshot ${index + 1}`}
                  width={1600}
                  height={900}
                  className="object-contain w-full h-auto sm:rounded-2xl shadow-2xl border border-slate-800"
                  priority
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </header>
  );
}
