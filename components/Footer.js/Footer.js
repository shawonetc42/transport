// pages/index.js

import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-blue-50 py-16">
      <div className="w-full mx-auto px-4">
        {/* Footer Section */}
        <footer className="bg-gray-900 text-gray-300 py-16 mt-16">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Transport</h3>
              <ul className="space-y-2">
                <li>📞 Phone: +0 123-456-789</li>
                <li>✉️ Email: info@company.com</li>
                <li>📍 Address: 30 Broklyn Street, USA</li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Links</h3>
              <ul className="space-y-2">
                <li>About</li>
                <li>Meet Team</li>
                <li>News & Media</li>
                <li>Our Projects</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li>Sea Freight</li>
                <li>Road Transport</li>
                <li>Railway Logistics</li>
                <li>Air Flight</li>
                <li>Secure Shopping</li>
              </ul>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Gallery</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-16 w-16 bg-gray-600"></div>
                <div className="h-16 w-16 bg-gray-600"></div>
                <div className="h-16 w-16 bg-gray-600"></div>
                <div className="h-16 w-16 bg-gray-600"></div>
                <div className="h-16 w-16 bg-gray-600"></div>
                <div className="h-16 w-16 bg-gray-600"></div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
              <p className="mb-4">Signup for our latest news & articles.</p>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-2 rounded-l bg-gray-800 text-gray-300 focus:outline-none"
                />
                <button className="p-2 bg-yellow-500 text-white rounded-r">
                  →
                </button>
              </div>
              <div className="flex space-x-4 mt-4">
                <span className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
                  F
                </span>
                <span className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
                  T
                </span>
                <span className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
                  I
                </span>
                <span className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
                  P
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 text-gray-500">
            © Copyright reserved by example.com
          </div>
        </footer>
      </div>
    </div>
  );
}
