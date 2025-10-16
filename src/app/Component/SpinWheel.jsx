"use client";
import { useRef, useState, useEffect } from "react";

const segments = [
  "100 Coins",
  "Free Spin",
  "500 Coins",
  "Jackpot",
  "200 Coins",
  "Try Again",
  "1000 Coins",
  "Bonus Prize",
];

const colors = [
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
];

export default function SpinWheel() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [resultIndex, setResultIndex] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const wheelRef = useRef(null);

  const spinWheel = () => {
    if (isSpinning) return;

    const randomIndex = Math.floor(Math.random() * segments.length);
    setResultIndex(null);
    setIsSpinning(true);
    setShowConfetti(false);

    const anglePerSegment = 360 / segments.length;
    const offset = anglePerSegment / 2;
    const spins = 5;
    const rotationAngle =
      spins * 360 + (360 - randomIndex * anglePerSegment - offset);

    if (wheelRef.current) {
      wheelRef.current.style.transition = "transform 5s cubic-bezier(0.33, 1, 0.68, 1)";
      wheelRef.current.style.transform = `rotate(${rotationAngle}deg)`;
    }

    setTimeout(() => {
      setResultIndex(randomIndex);
      setIsSpinning(false);

      if (segments[randomIndex] !== "Try Again") {
        setShowConfetti(true);
      }

      const lockedRotation = (360 - randomIndex * anglePerSegment - offset) % 360;
      if (wheelRef.current) {
        wheelRef.current.style.transition = "none";
        wheelRef.current.style.transform = `rotate(${lockedRotation}deg)`;
      }
    }, 5000);
  };

  const getResultMessage = () => {
    if (resultIndex === null) return null;
    const result = segments[resultIndex];
    if (result === "Try Again") return "😞 Try Again!";
    if (result === "Free Spin") return "🎉 You got a Free Spin!";
    return `🎉 You won: ${result}`;
  };

  useEffect(() => {
    if (showConfetti) {
      const timeout = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [showConfetti]);

  return (
    <section className="bg-[#0b0e15] flex flex-col items-center justify-center min-h-[700px] py-10 px-4 relative overflow-hidden -mt-24">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-20">
        {/* Left Side Content */}
        <div className="text-white text-center md:text-left space-y-6 px-4">
          <h2 className="text-4xl font-extrabold leading-tight">
            🎯 Spin the <span className="text-red-500">Wheel of Fortune</span>
          </h2>
          <p className="text-slate-300 max-w-md mx-auto md:mx-0">
            Try your luck and win exciting rewards — coins, bonuses, and more! Every spin could be your lucky one.
          </p>

          {resultIndex !== null && (
            <div
              className={`mt-4 rounded-xl p-4 max-w-xs shadow-lg mx-auto md:mx-0 transition-all duration-500 ${
                segments[resultIndex] === "Try Again"
                  ? "bg-white bg-opacity-70 text-black"
                  : segments[resultIndex] === "Free Spin"
                  ? "bg-green-200 text-black italic"
                  : "bg-yellow-200 text-black font-semibold"
              }`}
            >
              <p className="text-base text-center">{getResultMessage()}</p>

              {!["Try Again", "Free Spin"].includes(segments[resultIndex]) && (
                <a
                  href="https://www.bg678p.com/#/pages/login/register?invitationCode=5097269017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-4 py-2 shadow transition duration-300 w-full max-w-xs text-center text-sm"
                >
                  💸 Collect Money
                </a>
              )}
            </div>
          )}

          {resultIndex !== null && (
            <button
              onClick={spinWheel}
              disabled={isSpinning}
              className={`mt-4 px-5 py-2 rounded-lg shadow-md font-semibold transition ${
                isSpinning
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              🔁 {isSpinning ? "Please Wait..." : "Play Again"}
            </button>
          )}

          <div className="mt-8 text-sm text-slate-400 max-w-md">
            <h3 className="text-lg font-semibold text-white mb-2">How to Play:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Click the <span className="text-green-400 font-semibold">SPIN</span> button to start.</li>
              <li>Wait for the wheel to stop and reveal your reward.</li>
              <li>If you win coins, click <span className="text-yellow-400 font-semibold">Collect Money</span> to claim!</li>
              <li>You can spin again anytime after the result appears.</li>
            </ul>
          </div>
        </div>

        {/* Right Side - Wheel SVG */}
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 mx-auto">
          <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
            isSpinning ? "animate-pulse shadow-[0_0_40px_#ff2e63]" : ""
          }`} />

          <svg
            ref={wheelRef}
            className="w-full h-full drop-shadow-lg"
            viewBox="0 0 500 500"
            style={{ transformOrigin: "50% 50%" }}
          >
            <circle
              cx="250"
              cy="250"
              r="245"
              fill="#111827"
              stroke="#E0E0E0"
              strokeWidth="3"
            />
            {segments.map((segment, i) => {
              const angle = 360 / segments.length;
              const startAngle = angle * i;
              const endAngle = startAngle + angle;

              const startRad = (startAngle * Math.PI) / 180;
              const endRad = (endAngle * Math.PI) / 180;

              const x1 = 250 + 245 * Math.cos(startRad);
              const y1 = 250 + 245 * Math.sin(startRad);
              const x2 = 250 + 245 * Math.cos(endRad);
              const y2 = 250 + 245 * Math.sin(endRad);

              const largeArcFlag = angle > 180 ? 1 : 0;

              const pathData = `
                M250,250
                L${x1},${y1}
                A245,245 0 ${largeArcFlag} 1 ${x2},${y2}
                Z
              `;

              const textAngle = startAngle + angle / 2;
              const textRad = (textAngle * Math.PI) / 180;
              const textX = 250 + 160 * Math.cos(textRad);
              const textY = 250 + 160 * Math.sin(textRad);

              const isSelected = resultIndex === i;

              return (
                <g key={i}>
                  <path
                    d={pathData}
                    fill={colors[i]}
                    stroke="#fff"
                    strokeWidth={isSelected ? 4 : 1}
                    style={{
                      filter: isSelected ? "drop-shadow(0 0 10px yellow)" : "none",
                      opacity: isSelected ? 1 : 0.95,
                      transition: "all 0.3s ease",
                    }}
                  />
                  <text
                    x={textX}
                    y={textY}
                    fill={isSelected ? "#ffff00" : "#fff"}
                    fontSize="16"
                    fontWeight={isSelected ? "700" : "600"}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    transform={`rotate(${textAngle + 90}, ${textX}, ${textY})`}
                    style={{
                      userSelect: "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                                     {segment}
                  </text>
                </g>
              );
            })}

            {/* Center SPIN Button */}
            <circle
              cx="250"
              cy="250"
              r="50"
              fill="#ef0d0dff"
              cursor={isSpinning ? "not-allowed" : "pointer"}
              onClick={spinWheel}
            />
            <text
              x="250"
              y="255"
              textAnchor="middle"
              fill="#fff"
              fontWeight="700"
              fontSize="20"
              cursor={isSpinning ? "not-allowed" : "pointer"}
              style={{ userSelect: "none" }}
              onClick={spinWheel}
            >
              {isSpinning ? "Spinning..." : "SPIN"}
            </text>
          </svg>

          {/* Top Pointer */}
          <div
            className="absolute top-0 left-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-b-pink-500 transform -translate-x-1/2 -translate-y-1/2"
            style={{ filter: "drop-shadow(0 0 4px #ff2e63)" }}
          />
        </div>
      </div>
    </section>
  );
}
