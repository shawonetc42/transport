// components/Projects.js
export default function Projects() {
  const stats = [
    {
      icon: "/1.svg",
      number: "928",
      label: "Projects Completed",
    },
    {
      icon: "/2.svg",
      number: "346",
      label: "Repeat Customers",
    },
    {
      icon: "/3.svg",
      number: "806",
      label: "Satisfied Customers",
    },
    { icon: "/4.svg", number: "82", label: "Team Members" },
  ];

  const images = ["/cm1.jpg", "/cm2.jpg", "/cm3.jpg", "/cm4.jpg"];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-gray-600 uppercase">
          Our Project
        </h2>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">
          Explore our new recently completed projects.
        </h1>

        {/* Project Images */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12 bg-gray-800 py-8 text-white">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-yellow-400 mb-4">
                <img src={stat.icon} alt={stat.label} className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold">{stat.number}</h3>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
