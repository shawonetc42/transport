"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Albert",
      role: "Designer",
      text: "Lorem ipsum is simply free text dolor not sit amet, notted adipiscing elit sed do eiusmod incididunt labore et dolore text.",
      image:
        "https://images.unsplash.com/photo-1586425225143-0c8f59053610?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      name: "Mike Hardson",
      role: "Designer",
      text: "Lorem ipsum is simply free text dolor not sit amet, notted adipiscing elit sed do eiusmod incididunt labore et dolore text.",
      image:
        "https://plus.unsplash.com/premium_photo-1678703870782-918c21aac2b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      name: "Jessica Brown",
      role: "Designer",
      text: "Lorem ipsum is simply free text dolor not sit amet, notted adipiscing elit sed do eiusmod incididunt labore et dolore text.",
      image:
        "https://images.unsplash.com/photo-1586246698829-4258572d1e76?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-sm font-semibold text-gray-600 uppercase">
            Our Feedbacks
          </h2>
          <h1 className="text-3xl font-bold text-gray-800">
            What They’re Talking About Company
          </h1>
          <p className="text-gray-500 mt-4">
            Lorem ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem is simply free text quis bibendum.
          </p>
        </motion.div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              {/* Star Ratings */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.43 4.399a1 1 0 00.95.69h4.639c.969 0 1.371 1.24.588 1.81l-3.757 2.727a1 1 0 00-.364 1.118l1.43 4.398c.3.92-.755 1.688-1.54 1.118l-3.758-2.727a1 1 0 00-1.176 0l-3.758 2.727c-.784.57-1.838-.198-1.54-1.118l1.43-4.398a1 1 0 00-.364-1.118L2.32 9.826c-.783-.57-.38-1.81.588-1.81h4.639a1 1 0 00.95-.69l1.43-4.399z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 italic">{testimonial.text}</p>

              {/* Profile Section */}
              <div className="flex items-center justify-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-300"
                />
                <div className="ml-4 text-left">
                  <h3 className="text-lg font-bold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
