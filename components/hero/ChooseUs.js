export default function ChooseUs() {
  return (
    <div className="bg-gray-100 w-full  flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md  w-full flex">
        {/* Left Section - Image */}
        <div className="w-1/2">
          <img
            src="/potential.jpg" // Replace with your image path
            alt="Shipping and logistics"
            className="h-full w-full object-cover rounded-l-md"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            We create opportunity to reach potential
          </h2>
          <p className="text-gray-600 mb-6">
            Develop energy storage systems such as batteries and other
            technologies that can store excess renewable energy for use later.
            We strongly support best practice sharing across our operations
            around the world and industrial sectors.
          </p>

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-400 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c.83 0 1.5-.67 1.5-1.5S12.83 8 12 8s-1.5.67-1.5 1.5S11.17 11 12 11z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6.25 18h11.5c.69 0 1.25-.56 1.25-1.25V5.25C19 4.56 18.44 4 17.75 4H6.25C5.56 4 5 4.56 5 5.25v11.5c0 .69.56 1.25 1.25 1.25z"
                  />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">
                Safety & Reliable Service
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-yellow-400 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">
                Real Time Tracking System
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
