"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LogisticsSection() {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center lg:items-start gap-12">
      {/* Left Section: Images */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative lg:w-1/2"
      >
        {/* Background Image */}
        <div className="relative z-10">
          <Image
            src="/cost2.jpg" // Replace with your first image URL
            alt="Cruise Ship"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }} // Animate when in view
          transition={{ duration: 0.8 }}
          className="absolute top-8 -left-8 bg-blue-600 text-white py-4 px-6 rounded-lg shadow-lg flex items-center z-20"
        >
          <div className="mr-4 text-4xl">
            <span role="img" aria-label="Gift">
              🎁
            </span>
          </div>
          <div>
            <h2 className="text-3xl font-bold">38+</h2>
            <p>Work Experience</p>
          </div>
        </motion.div>
        {/* Foreground Image */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="relative z-0 mt-8"
        >
          <Image
            src="/cost.jpg" // Replace with your second image URL
            alt="Transport"
            className="rounded-lg shadow-lg"
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>

      {/* Right Section: Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 text-center lg:text-left"
      >
        <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-4">
          GET TO KNOW US
        </h3>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          The Best Full Range <br />
          Logistics Solutions
        </h2>
        <p className="text-gray-600 mb-8">
          There are many variations of passages available but the majority have
          suffered alteration in some form, by injected humor, random words, or
          slightly different meanings.
        </p>
        <div className="space-y-4">
          {/* Marketing Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} // Animate when in view
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-start space-x-4"
          >
            <span className="text-2xl text-red-500">
              <i className="fas fa-bullhorn"></i>
            </span>
            <p className="text-gray-600">
              <strong>Leading in Marketing</strong> <br />
              Knowledge of technologies rules better than anyone which we apply
              in our daily work.
            </p>
          </motion.div>
          {/* Delivery Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} // Animate when in view
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-start space-x-4"
          >
            <span className="text-2xl text-red-500">
              <i className="fas fa-truck"></i>
            </span>
            <p className="text-gray-600">
              <strong>Expert Delivery Man</strong> <br />
              Knowledge of technologies rules better than anyone which we apply
              in our daily work.
            </p>
          </motion.div>
        </div>
        {/* CEO Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Animate when in view
          transition={{ duration: 1, delay: 0.7 }}
          className="flex items-center mt-8"
        >
          <Image
            src="/cost.jpg"
            alt="Aleesha Brown"
            width={500}
            height={500}
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <p className="text-gray-800 font-bold">Aleesha Brown</p>
            <p className="text-gray-500 text-sm">CEO & Co-Founder</p>
          </div>
        </motion.div>
        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700"
        >
          Discover more
        </motion.button>
      </motion.div>
    </section>
  );
}
