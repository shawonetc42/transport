"use client";
import React from "react";

const LogisticsServices = () => {
  const services = [
    {
      title: "Air freight",
      description:
        "Long established fact that a reader will be distracted content of a page when looking at its layout",
      image: "/service.webp", // Replace with actual image path
    },
    {
      title: "Sea freight",
      description:
        "Long established fact that a reader will be distracted content of a page when looking at its layout",
      image: "/service1.webp",
    },
    {
      title: "Road service",
      description:
        "Long established fact that a reader will be distracted content of a page when looking at its layout",
      image: "/service2.webp",
    },
    {
      title: "Other solution",
      description:
        "Long established fact that a reader will be distracted content of a page when looking at its layout",
      image: "/service4.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div>
        {/* Section Heading */}
        <div className="justify-start container mx-auto px-6">
          <h2 className="text-lg uppercase tracking-wide text-gray-500">
            Specialise in the transportation
          </h2>
          <h1 className="text-4xl font-bold text-gray-800 mt-4">
            Offering Sustainable Logistics Services
          </h1>
        </div>
        {/* Services Grid */}
        <div className="container mx-auto px-6 text-center">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {/* Service Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-48 w-full object-cover"
                />
                {/* Service Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                  <a
                    href="#"
                    className="inline-block mt-4 text-blue-500 hover:underline font-medium"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsServices;
