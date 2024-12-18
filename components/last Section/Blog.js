"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <div className="bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold text-gray-600">
          NEWS & UPDATES
        </h2>
        <h1 className="text-center text-4xl font-bold text-gray-800 mt-2">
          Latest news directly from the{" "}
          <span className="text-blue-500">blog</span>
        </h1>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog card 1 */}
          <motion.div
            className="bg-white shadow-md rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotate: 3, // Slight rotation for a more dynamic effect
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2, // Slight delay for smooth staggering
            }}
            viewport={{ once: true }}
          >
            <div className="relative h-48 w-full">
              <Image
                src="/be1.jpg"
                alt="Blog 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>👤 Admin</span>
                <span className="mx-2">•</span>
                <span>💬 2 Comments</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                We ensure you the best quality services
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                There are not many of passages of lorem ipsum available
                alteration in some form.
              </p>
            </div>
          </motion.div>

          {/* Blog card 2 */}
          <motion.div
            className="bg-white shadow-md rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotate: -3, // Slight rotation for variation
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4,
            }}
            viewport={{ once: true }}
          >
            <div className="relative h-48 w-full">
              <Image
                src="/be2.jpeg"
                alt="Blog 2"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>👤 Admin</span>
                <span className="mx-2">•</span>
                <span>💬 2 Comments</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                We ensure you the best quality services
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                There are not many of passages of lorem ipsum available
                alteration in some form.
              </p>
            </div>
          </motion.div>

          {/* Blog card 3 */}
          <motion.div
            className="bg-white shadow-md rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotate: 3, // Adding rotation for smooth movement
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.6,
            }}
            viewport={{ once: true }}
          >
            <div className="relative h-48 w-full">
              <Image
                src="/be3.jpg"
                alt="Blog 3"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>👤 Admin</span>
                <span className="mx-2">•</span>
                <span>💬 2 Comments</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                We ensure you the best quality services
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                There are not many of passages of lorem ipsum available
                alteration in some form.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
