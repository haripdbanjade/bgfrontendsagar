"use client";
import { FaCheckCircle, FaGift, FaTrophy, FaUserShield } from "react-icons/fa";

export default function Fea() {
  const features = [
    {
      icon: <FaCheckCircle className="text-[#ef0d0dff] text-4xl" />,
      title: "Instant & Secure Payouts",
      description:
        "Your earnings are protected with top-tier security, ensuring safe and lightning-fast withdrawals.",
    },
    {
      icon: <FaGift className="text-[#ef0d0dff] text-4xl" />,
      title: "Daily Jackpots & Bonuses",
      description:
        "Boost your gameplay with generous daily bonuses, free spins, and massive jackpot prizes.",
    },
    {
      icon: <FaTrophy className="text-[#ef0d0dff] text-4xl" />,
      title: "Compete & Win Globally",
      description:
        "Join a massive community of players to compete in exclusive tournaments for real rewards.",
    },
    {
      icon: <FaUserShield className="text-[#ef0d0dff] text-4xl" />,
      title: "VIP Player Support",
      description:
        "Our dedicated VIP support team is available 24/7 to provide you with elite service.",
    },
  ];

  return (
    <section className="bg-[#0b0e15] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Your Path to <span className="text-[#ef0d0dff]">Winning</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-xl p-6 text-center border border-gray-700 hover:shadow-[#ef0d0dff]/30 hover:shadow-md transition"
            >
              <div className="mb-4 mx-auto w-14 h-14 flex items-center justify-center bg-[#1f2937] rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#ef0d0dff] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
