import React from "react";
import Header from "./header";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
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
          Get in <span className="text-[#007BC9]">Touch</span>
        </motion.h1>

        <div className="grid gap-12 md:grid-cols-2 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a Message
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BC9]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BC9]"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007BC9]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#007BC9] text-white font-semibold py-3 rounded-lg hover:bg-[#005f96] transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Information
              </h2>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#007BC9]" />
                <p className="text-gray-700">
                  Bharat Petroleum HQ, Mumbai, India
                </p>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-[#007BC9]" />
                <p className="text-gray-700">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#007BC9]" />
                <p className="text-gray-700">support@bpcl.com</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[300px]">
              {/* Google Map with Clickable Link */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=30.081192952789422, 77.34018279744463"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden shadow-lg h-[300px]"
              >
                <iframe
                  title="BPCL Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6610275034157!2d72.84193331490127!3d19.05870018709281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c629a5c2eab3%3A0x42b622e9f85f8e5c!2sBharat%20Petroleum%20Corporation%20Limited%20(BPCL)!5e0!3m2!1sen!2sin!4v1694253265000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, pointerEvents: "none" }} // disable interactions inside iframe
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </a>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Contact;
