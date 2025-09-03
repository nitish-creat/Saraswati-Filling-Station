import React, { useState, useEffect } from "react";
import Header from "./header";
import { motion, AnimatePresence } from "framer-motion";

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";

const images = [image1, image2, image3, image4];

function About() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3s (reset when current changes)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <>
      <Header />
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#F5F9FF] px-6 py-12 gap-8">
        {/* Image Carousel */}
        <div className="relative w-full max-w-4xl h-[400px] overflow-hidden rounded-2xl shadow-lg z-5">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt="About Us Slide"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${
                  current === idx ? "bg-[#007BC9]" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <p className="text-center md:text-left max-w-2xl text-gray-700 leading-relaxed">
          Bharat Petroleum Corporation Limited (BPCL) is a leading energy
          company in India, driving progress through innovation, sustainability,
          and reliable energy solutions. With a strong presence in petroleum,
          natural gas, and renewable energy, BPCL powers millions of lives every
          day.
        </p>
      </section>
    </>
  );
}

export default About;
