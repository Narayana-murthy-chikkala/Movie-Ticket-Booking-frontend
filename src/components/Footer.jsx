import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="from-gray-900 to-gray-800 bg-black text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold tracking-tight">
              <span
              style={{
                fontFamily: "Algerian, serif",
                color: "#e63946",
              }}
              >
              M
            </span>
            <span
              style={{
                fontFamily: '"Baskerville Old Face", serif',
                color: "#f1f1f1",
              }}
            >ovie 
            </span>
            <span
              style={{
                fontFamily: "Algerian, serif",
                color: "#e63946",
              }}
            >
            M
            </span>
            <span
              style={{
                fontFamily: '"Baskerville Old Face", serif',
                color: "#f1f1f1",
            }}
            >agic
            </span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience seamless movie ticket booking with MovieMagic. Discover the latest movies, book tickets, and enjoy exclusive offers.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-red transition-transform transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-red transition-transform transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342a4.66 4.66 0 0 0 2.06 3.876 4.645 4.645 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568 4.692 4.692 0 0 1-2.104.08 4.661 4.661 0 0 0 4.352 3.234 9.348 9.348 0 0 1-5.786 1.995c-.376 0-.747-.022-1.112-.065a13.19 13.19 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-red transition-transform transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-red transition-transform transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.047-3.06-1.867-3.06-1.867 0-2.153 1.459-2.153 2.967v5.697h-3v-11h2.879v1.497h.04c.4-.757 1.379-1.557 2.833-1.557 3.027 0 3.587 1.993 3.587 4.583v6.477z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/movies" className="text-gray-300 hover:text-red transition">Now Showing</a></li>
              <li><a href="/" className="text-gray-300 hover:text-red transition">Theaters</a></li>
              <li><a href="/" className="text-gray-300 hover:text-red transition">Releases</a></li>
              <li><a href="/favourites" className="text-gray-300 hover:text-red transition">Favourites</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/faq" className="text-gray-300 hover:text-red transition">FAQ</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-red transition">Contact Support</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-red transition">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-red transition">Privacy Policy</a></li>
            </ul>
          </div>
          {/* Download App Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
            <p className="text-gray-300 text-sm mb-4">Book tickets on the go with the MovieMagic app!</p>
            <div className="flex space-x-4">
              <a href="https://www.apple.com/app-store/" className="inline-block">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-10 w-auto hover:opacity-80 transition"
                />
              </a>
              <a href="https://play.google.com/store" className="inline-block">
                <img
                  src={assets.googlePlay} /* Using App Store badge as a placeholder until a matching Google Play badge is found */
                  alt="Get it on Google Play"
                  className="h-10 w-auto hover:opacity-80 transition"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} MovieMagic. All rights reserved. | Designed with passion for movie lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;