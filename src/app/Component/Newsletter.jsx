"use client";
import { useEffect, useRef } from "react";
import { FaBook } from "react-icons/fa";

const data = [
  { id: 1, user: "Mem***9FO", amount: "₹2,400.00", game: "Vegas Nights", avatar: "/images/12.jpg", gameImg: "/images/7.jpg" },
  { id: 2, user: "Mem***FU6", amount: "₹1,500.00", game: "Baccarat Supreme", avatar: "/images/11.jpg", gameImg: "/images/8.jpg" },
  { id: 3, user: "Mem***LPA", amount: "₹5,250.00", game: "Treasures of Aztec", avatar: "/images/10.jpg", gameImg: "/images/9.jpg" },
  { id: 4, user: "Mem***QWE", amount: "₹950.00", game: "Rummy Master", avatar: "/images/8.jpg", gameImg: "/images/10.jpg" },
  { id: 5, user: "Mem***XYZ", amount: "₹1,200.00", game: "Blackjack Pro", avatar: "/images/7.jpg", gameImg: "/images/11.jpg" },
  { id: 6, user: "Mem***A1B", amount: "₹3,600.00", game: "Poker Royale", avatar: "/images/6.jpg", gameImg: "/images/12.jpg" },
];

export default function Live() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollY = 0; // Current scroll position ho yo 
    const speed = 2;//speed kati ma scroll hune ho
    let frame;

    const step = () => {
      scrollY += speed;
      if (scrollY >= container.scrollHeight / 2) scrollY = 0;
      container.scrollTop = scrollY;
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  const doubledList = [...data, ...data];

  return (
    <div className="bg-[#0f1221] rounded-2xl p-6 w-full sm:w-[1150px] mx-auto mt-10 text-white relative overflow-hidden">
      <h2 className="flex items-center text-2xl md:text-2xl font-bold mb-6 gap-2">
        <FaBook className="text-red-500 w-6 h-6" /> Live Winning Feed
      </h2>

      <div ref={containerRef} className="h-96 overflow-hidden">
        <div className="space-y-4">
          {doubledList.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-4 py-3 bg-[#181b2e] rounded-xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.user}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <span className="text-base md:text-lg">
                  <strong className="text-red-300">{item.user}</strong> just won{" "}
                  <span className="text-yellow-400 font-semibold">{item.amount}</span> in{" "}
                  {item.game}
                </span>
              </div>

              <img
                src={item.gameImg}
                alt={item.game}
                className="w-16 h-12 rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
