import React from "react";
import { Gift, Fuel, Star } from "lucide-react";
import Header from "./header";
function LoyaltyProgram() {
  const benefits = [
    {
      icon: <Fuel className="w-10 h-10 text-[#f4a261]" />,
      title: "Fuel Points",
      desc: "Earn points on every petrol or diesel refill at BPCL outlets.",
    },
    {
      icon: <Gift className="w-10 h-10 text-[#2a9d8f]" />,
      title: "Exclusive Rewards",
      desc: "Redeem points for vouchers, discounts, and special offers.",
    },
    {
      icon: <Star className="w-10 h-10 text-[#e76f51]" />,
      title: "Premium Benefits",
      desc: "Unlock priority services and seasonal bonus programs.",
    },
  ];

  return (<>
    <Header/>
    <section className="bg-[#fefae0] py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#eda03b] via-[#928807] to-[#855f05] bg-clip-text text-transparent mb-6">
          Loyalty Program
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Join our BPCL Loyalty Program and enjoy rewards every time you refuel.
          Save more, earn more, and unlock exclusive benefits designed just for you!
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-[#855f05] mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#eda03b] to-[#855f05] text-white font-bold shadow-lg hover:scale-105 transition-transform">
            Join Now
          </button>
        </div>
      </div>
    </section>
    </>
  );
}

export default LoyaltyProgram;
