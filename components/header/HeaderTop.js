"use client";
import Cetagory from "./Cetagory";
import { motion } from "framer-motion";

export default function HeaderTop() {
  return (
    <>
      <main
        className="bg-cover bg-center h-screen relative"
        style={{
          backgroundImage: "url(/CoverPhoto.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Category */}
        <header className=" relative text-white">
          <Cetagory />
        </header>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white"
        >
          <span className="text-yellow-500 font-semibold tracking-wide">
            SOLUTIONS FOR YOUR TRANSPORT
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Reliable & Safe Transport Solution
          </h1>
          <div className="mt-6 flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="bg-yellow-500 text-black px-6 py-3 font-semibold rounded hover:bg-yellow-600"
            >
              Discover More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-2 bg-transparent border border-yellow-500 text-yellow-500 px-6 py-3 font-semibold rounded hover:bg-yellow-500 hover:text-black"
            >
              <span>Watch Video</span>
            </motion.button>
          </div>
        </motion.div>
      </main>
    </>
  );
}
