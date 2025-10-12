"use client";
import { useEffect, useRef } from "react";
import { FaBook, FaCrown } from "react-icons/fa";

// === Data ===
const liveData = [
  { id: 1, user: "Mem***9FO", amount: "₹2,400.00", game: "Vegas Nights", avatar: "/images/12.jpg", gameImg: "/images/7.jpg" },
  { id: 2, user: "Mem***FU6", amount: "₹1,500.00", game: "Baccarat Supreme", avatar: "/images/11.jpg", gameImg: "/images/8.jpg" },
  { id: 3, user: "Mem***LPA", amount: "₹5,250.00", game: "Treasures of Aztec", avatar: "/images/10.jpg", gameImg: "/images/9.jpg" },
  { id: 4, user: "Mem***QWE", amount: "₹950.00", game: "Rummy Master", avatar: "/images/8.jpg", gameImg: "/images/10.jpg" },
  { id: 5, user: "Mem***XYZ", amount: "₹1,200.00", game: "Blackjack Pro", avatar: "/images/7.jpg", gameImg: "/images/11.jpg" },
  { id: 6, user: "Mem***A1B", amount: "₹3,600.00", game: "Poker Royale", avatar: "/images/6.jpg", gameImg: "/images/12.jpg" },
];

const topEarners = [
  { id: 1, name: "Mem****21M", amount: "₹7,142,199.30", image: "/images/7.jpg", color: "yellow" },
  { id: 2, name: "Mem****MYM", amount: "₹7,104,483.85", image: "/images/8.jpg", color: "gray" },
  { id: 3, name: "Mem****74A", amount: "₹7,032,469.04", image: "/images/2.jpg", color: "orange" },
];

const restEarners = [
  { id: 4, name: "Mem****882", amount: "₹6,997,937.01", image: "/images/9.jpg" },
  { id: 5, name: "Mem****RE2", amount: "₹6,966,227.47", image: "/images/10.jpg" },
];

// === Colors Map ===
const colorMap = {
  yellow: { bg: "bg-yellow-500", border: "border-yellow-400", text: "text-yellow-300", barHeight: "h-32", size: "w-16 h-16" },
  gray: { bg: "bg-gray-600", border: "border-gray-400", text: "text-gray-300", barHeight: "h-32", size: "w-16 h-16" },
  orange: { bg: "bg-orange-600", border: "border-orange-500", text: "text-orange-300", barHeight: "h-32", size: "w-16 h-16" },
};

// === Top Earner Card ===
const TopEarnerCard = ({ earner, position }) => {
  const color = colorMap[earner.color];
  const isFirst = position === 1;

  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={earner.image}
        alt={earner.name}
        className={`${isFirst ? "w-20 h-20" : color.size} rounded-full border-4 ${color.border} object-cover`}
      />
      <p className="font-semibold mt-1 text-sm">{earner.name}</p>
      <p className={`text-xs ${color.text}`}>{earner.amount}</p>
      <div
        className={`w-24 ${color.barHeight} ${color.bg} rounded-t-2xl flex justify-center items-center text-xl font-bold mt-1`}
      >
        {position}
      </div>
    </div>
  );
};

// === Main Component ===
export default function LiveAndGallery() {
  const containerRef = useRef(null);
  const doubledList = [...liveData, ...liveData];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollY = 0;
    const speed = 2;
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

  return (
    <section className="bg-[#0b0f19] text-white  md:px-29 py-10 ">
      <div className="flex flex-col lg:flex-row gap-8">

        <div className="bg-[#0f1221] rounded-2xl p-5 flex-1 overflow-hidden">
          <h2 className="flex items-center text-xl md:text-2xl font-bold mb-4 gap-2">
            <FaBook className="text-red-500" />
            Live Winning Feed
          </h2>
          <div ref={containerRef} className="h-96 overflow-hidden scrollbar-hide">
            <div className="space-y-4">
              {doubledList.map((item, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-2 bg-[#181b2e] rounded-lg">
                  <div className="flex items-center gap-3">
                    <img src={item.avatar} alt={item.user} className="w-10 h-10 rounded-full object-cover" />
                    <span className="text-sm md:text-base">
                      <strong className="text-red-300">{item.user}</strong> won{" "}
                      <span className="text-yellow-400 font-semibold">{item.amount}</span> in{" "}
                      {item.game}
                    </span>
                  </div>
                  <img src={item.gameImg} alt={item.game} className="w-12 h-10 rounded-md object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

   
        <div className="bg-[#0f1221] rounded-2xl p-5 flex-1">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2 mb-5">
            <FaCrown className="text-red-500" />
            Today's Top Earners
          </h2>

                 <div className="flex justify-center md:justify-around items-end gap-4 flex-wrap mb-6">
            <TopEarnerCard earner={topEarners[1]} position={2} />
            <div className="scale-110">
              <TopEarnerCard earner={topEarners[0]} position={1} />
            </div>
            <TopEarnerCard earner={topEarners[2]} position={3} />
          </div>

       
          <div className="space-y-3">
            {restEarners.map((earner) => (
              <div key={earner.id} className="flex justify-between items-center bg-[#141a28] rounded-md px-4 py-2">
                <div className="flex items-center gap-3">
                  <p className="text-lg font-semibold w-6">{earner.id}</p>
                  <img src={earner.image} alt={earner.name} className="w-8 h-8 rounded-full object-cover" />
                  <p className="text-sm">{earner.name}</p>
                </div>
                <p className="text-yellow-400 font-medium text-sm">{earner.amount}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
