"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">CNC Manufacturing</h3>
          <p className="text-gray-400 text-sm">
            Bringing your prototypes to life with precision, speed, and scale.
            Share your project with us, and we’ll create production-ready
            details.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <a
            href="#manufacture"
            className="text-gray-400 hover:text-white transition"
          >
            Manufacture
          </a>
          <a
            href="#products"
            className="text-gray-400 hover:text-white transition"
          >
            Products
          </a>
          <a
            href="#services"
            className="text-gray-400 hover:text-white transition"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-white transition"
          >
            Contact
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Contact</h4>
          <p className="text-gray-400 text-sm">123 Industrial Road</p>
          <p className="text-gray-400 text-sm">Manufacture City, USA</p>
          <p className="text-gray-400 text-sm">Email: info@cncmfg.com</p>
          <p className="text-gray-400 text-sm">Phone: +1 (234) 567-890</p>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Newsletter</h4>
          <p className="text-gray-400 text-sm">
            Subscribe to get the latest updates and offers.
          </p>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-900"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} CNC Manufacturing. All rights
        reserved.
      </div>
    </footer>
  );
}
