"use client";
import React, { useState } from "react";

const EmailSection = () => {
  const [messageSent, setMessageSent] = useState(false); // State to track the message sent status

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessageSent(true); // Set messageSent to true when form is submitted
    setTimeout(() => {
      setMessageSent(false); // Reset the messageSent status after 3 seconds
    }, 3000);
  };

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-gray-800 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Contact us</h2>
          <h3 className="text-xl font-semibold mb-6">Write Email</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Write a Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-yellow-500 text-gray-800 font-semibold rounded-lg hover:bg-yellow-600 transition"
            >
              Send a message
            </button>
          </form>

          {/* Success Message */}
          {messageSent && (
            <div className="mt-4 text-center text-green-500 font-semibold">
              Your message has been sent successfully!
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-4">GET TO KNOW</h3>
          <h2 className="text-2xl font-bold mb-6">
            Keep your dream transport with us
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Multiple Port Services</h4>
                <p className="text-gray-600">
                  Lorem ipsum. Proin gravida nibh vel velit auctor aliquet.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">End to End Solutions</h4>
                <p className="text-gray-600">
                  Lorem ipsum. Proin gravida nibh vel velit auctor aliquet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
