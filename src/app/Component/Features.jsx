"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

const games = [
  { name: "Treasures of Aztec", earning: "₹1,50,000", image: "/images/Aztecz.jpg" },
  { name: "SevenSevenSeven", earning: "₹2,00,000", image: "/images/77.jpg" },
  { name: "Teen Patti", earning: "₹95,000", image: "/images/tin.jpg" },
  { name: "Super Ace", earning: "₹1,20,000", image: "/images/super.jpg" },
  { name: "Mega Ace", earning: "₹3,50,000", image: "/images/mega .jpg" },
  { name: "Boxing King", earning: "₹80,000", image: "/images/king.jpg" },
  { name: "Golden Empire", earning: "₹2,10,000", image: "/images/golden.jpg" },
  { name: "Super Ace Deluxe", earning: "₹1,80,000", image: "/images/delexu.jpg" },
  { name: "Dragon's Luck", earning: "₹2,75,000", image: "/images/dragons.jpg" },
  { name: "Pirate's Treasure", earning: "₹1,10,000", image: "/images/private.jpg" },
  { name: "Mystic Fortune", earning: "₹90,000", image: "/images/mystric.jpg" },
  { name: "Lucky Lady's Charm", earning: "₹1,40,000", image: "/images/lucky.jpg" },
];

const Top = () => {
  const router = useRouter();

  const handleGameClick = () => {
    window.location.href = 'https://www.bg678p.com/#/pages/login/register?invitationCode=5097269017';
  };

  return (
    <div className="bg-[#050A18] h-min-screen px-6 py-12 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-red-500 pl-3">
          Top Earning Games
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
          {games.map((game, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden bg-gray-900 group shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={handleGameClick}
            >
              <img
                src={game.image}
                alt={game.name}
                className="w-full object-cover opacity-70 group-hover:opacity-90 transition h-50 sm:h-48 md:h-56"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="bg-black bg-opacity-50 p-3 rounded-full">
                  <FaPlay className="text-white text-2xl" />
                </div>
              </div>

              <div className="absolute bottom-0 p-4 w-full bg-gradient-to-t from-black via-black/70 to-transparent">
                <h3 className="text-lg font-semibold">{game.name}</h3>
                <div className="flex items-center text-yellow-400 text-sm mt-1">
                  <span></span>
                  <span className="ml-1">{game.earning}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top;
