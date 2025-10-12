import Hero from "./Component/Hero";
import Gallery from "./Component/Gallery";
import Features from "./Component/Features";
import Payment from "./Component/Payment";

import FEA from "./Component/FEA";
import SpinWheel from "./Component/SpinWheel";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-game-grad text-white mt-2 align-middle">
      <main>
        <Hero />
        <Features />
        <Gallery />
        <FEA />
      <SpinWheel/>
        <Payment />
      </main>
    </div>
  );
}
