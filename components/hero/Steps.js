// components/Steps.js
export default function Steps() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-gray-600 uppercase">
          How it work
        </h2>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">
          Get your shipment with us{" "}
          <span className="text-blue-500">3 easy simple steps</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <StepCard
            number="01"
            title="Enter your & product details"
            description="Lorem ipsum. Proin gravida nibh vel velit auctor aliquet."
            icon="/truck.svg"
          />
          <StepCard
            number="02"
            title="Documents & Payments"
            description="Lorem ipsum. Proin gravida nibh vel velit auctor aliquet."
            icon="/shopdetails.svg"
          />
          <StepCard
            number="03"
            title="Ready to send your goods"
            description="Lorem ipsum. Proin gravida nibh vel velit auctor aliquet."
            icon="/time.svg"
          />
        </div>
      </div>
    </div>
  );
}

function StepCard({ number, title, description, icon }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 text-center">
      <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-blue-100">
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mt-4">{number}</h3>
      <h4 className="text-lg font-semibold text-gray-700 mt-2">{title}</h4>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
}
