import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-[#F5F9FF] min-h-screen py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#007BC9] leading-tight">
            Fueling Progress, <br /> Powering the Nation
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-md">
            From energy solutions to customer care, BPCL is committed to
            reliability, sustainability, and growth across India.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="/services"
              className="px-6 py-3 bg-[#007BC9] text-white font-semibold rounded-lg shadow hover:bg-[#005A8D] transition"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-[#FFD100] text-[#FFD100] font-semibold rounded-lg hover:bg-[#FFD100] hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right side - Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-[#007BC9]">Services</h3>
            <p className="text-gray-600 mt-2">
              Fuel, LPG, and energy solutions designed for every customer.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-[#FFD100]">Loyalty</h3>
            <p className="text-gray-600 mt-2">
              Rewards through SmartDrive & PetroCard for smarter journeys.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition sm:col-span-2">
            <h3 className="text-xl font-bold text-[#007BC9]">Offers</h3>
            <p className="text-gray-600 mt-2">
              Stay updated with the latest fuel offers and customer benefits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
