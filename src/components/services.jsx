import React from "react";
import Header from "./header";
import { motion } from "framer-motion";
import { Wrench, Cpu, Cloud, Shield } from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to streamline business operations and scale effortlessly with your needs.",
    icon: <Cpu className="w-10 h-10 text-[#007BC9]" />,
  },
  {
    title: "Cloud Integration",
    description:
      "Seamless cloud migration and infrastructure setup, ensuring reliability, security, and cost efficiency.",
    icon: <Cloud className="w-10 h-10 text-[#007BC9]" />,
  },
  {
    title: "Cybersecurity Services",
    description:
      "Comprehensive protection strategies against cyber threats to keep your business safe and compliant.",
    icon: <Shield className="w-10 h-10 text-[#007BC9]" />,
  },
  {
    title: "Maintenance & Support",
    description:
      "End-to-end technical support with proactive monitoring, quick troubleshooting, and performance optimization.",
    icon: <Wrench className="w-10 h-10 text-[#007BC9]" />,
  },
];

function Services() {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#F5F9FF] px-6 py-16">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
        >
          Our <span className="text-[#007BC9]">Services</span>
        </motion.h1>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
