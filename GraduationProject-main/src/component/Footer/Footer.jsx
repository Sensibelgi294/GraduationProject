import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer(props) {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Tech<span className="text-[#874dc3]">Store</span>
            </h2>

            <p className="text-gray-400 leading-6">
              Your one-stop shop for the latest technology, electronics,
              and accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#874dc3] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/categories"
                  className="hover:text-[#874dc3] transition"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="hover:text-[#874dc3] transition"
                >
                  Cart
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#874dc3] transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Customer Service
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-[#874dc3] transition"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#874dc3] transition"
                >
                  Shipping & Delivery
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#874dc3] transition"
                >
                  Returns & Refunds
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#874dc3] transition"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[#874dc3] w-4"
                />

                <span>Cairo, Egypt</span>
              </li>

              <li className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#874dc3] w-4"
                />

                <span>+20 100 000 0000</span>
              </li>

              <li className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-[#874dc3] w-4"
                />

                <span className="break-all">
                  support@techstore.com
                </span>
              </li>

            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">

              <a
                href="https://www.facebook.com"
                target="_blink"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#874dc3] hover:text-white transition"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a
                href="https://www.x.com"
                target="_blink"
                aria-label="X"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#874dc3] hover:text-white transition"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blink"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#874dc3] hover:text-white transition"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blink"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#874dc3] hover:text-white transition"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

            <p className="text-center md:text-left">
              © 2026 TechStore. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="hover:text-white transition"
              >
                Terms & Conditions
              </a>

              <a
                href="#"
                className="hover:text-white transition"
              >
                Privacy Policy
              </a>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}