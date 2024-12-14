export default function LogisticsSection() {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center lg:items-start gap-12">
      {/* Left Section: Images */}
      <div className="relative lg:w-1/2">
        {/* Background Image */}
        <div className="relative z-10">
          <img
            src="/cost2.jpg" // Replace with your first image URL
            alt="Cruise Ship"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Badge */}
        <div className="absolute top-8 -left-8 bg-blue-600 text-white py-4 px-6 rounded-lg shadow-lg flex items-center z-20">
          <div className="mr-4 text-4xl">
            <span role="img" aria-label="Gift">
              🎁
            </span>
          </div>
          <div>
            <h2 className="text-3xl font-bold">38+</h2>
            <p>Work Experience</p>
          </div>
        </div>
        {/* Foreground Image */}
        <div className="relative z-0 mt-8">
          <img
            src="/cost.jpg" // Replace with your second image URL
            alt="Transport"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Right Section: Text */}
      <div className="lg:w-1/2 text-center lg:text-left">
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
          <div className="flex items-start space-x-4">
            <span className="text-2xl text-red-500">
              <i className="fas fa-bullhorn"></i>
            </span>
            <p className="text-gray-600">
              <strong>Leading in Marketing</strong> <br />
              Knowledge of technologies rules better than anyone which we apply
              in our daily work.
            </p>
          </div>
          {/* Delivery Section */}
          <div className="flex items-start space-x-4">
            <span className="text-2xl text-red-500">
              <i className="fas fa-truck"></i>
            </span>
            <p className="text-gray-600">
              <strong>Expert Delivery Man</strong> <br />
              Knowledge of technologies rules better than anyone which we apply
              in our daily work.
            </p>
          </div>
        </div>
        {/* CEO Section */}
        <div className="flex items-center mt-8">
          <img
            src="https://via.placeholder.com/50"
            alt="Aleesha Brown"
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <p className="text-gray-800 font-bold">Aleesha Brown</p>
            <p className="text-gray-500 text-sm">CEO & Co-Founder</p>
          </div>
        </div>
        {/* Button */}
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
          Discover more
        </button>
      </div>
    </section>
  );
}
