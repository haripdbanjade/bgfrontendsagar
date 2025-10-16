"use client";
import Image from "next/image";

export default function PaymentLicense() {
  return (
    <section className="bg-[#0b0e15] py-12 px-4 -mt-10">
      <div className="max-w-7xl mx-auto bg-[#111827] rounded-xl border border-gray-700 p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
    
          <h3 className="text-white text-lg font-semibold mb-4">Payment Method</h3>
          <div className="flex items-center gap-6 flex-wrap mb-8">
            <Image src="/images/Google.png" alt="GPay" width={60} height={40} />
            <Image src="/images/Paytm.png" alt="PayTM" width={80} height={40} />
            <Image src="/images/upi.png" alt="UPI" width={50} height={30} />
          </div>
        </div>
        <div className="text-slate-300 space-y-6 text-sm md:text-base">
          <p className="flex items-start gap-2">
            <span className="text-green-400 mt-1">♦</span>
            We platform advocates fairness, justice, and openness. We mainly operate fair lottery, blockchain games, live casinos, and slot machine games.
          </p>
          <p className="flex items-start gap-2">
            <span className="text-green-400 mt-1">♦</span>
            We work with more than 10,000 online live game dealers and slot games, all of which are fair and verified games.
          </p>
          <p className="text-slate-400 text-sm pt-4">
            Gambling can be addictive, please play rationally. We only accept customers above the age of 18.
          </p>
        </div>
      </div>
    </section>
  );
}
