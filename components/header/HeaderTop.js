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
        <header className=" text-white">
          <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="flex items-center">
              <img src="/logo.png" alt="Transport Logo" className="h-10" />
              <span className="ml-2 text-xl font-bold">Transport</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-yellow-500">
                Home
              </a>
              <a href="#" className="hover:text-yellow-500">
                Pages
              </a>
              <a href="#" className="hover:text-yellow-500">
                Services
              </a>
              <a href="#" className="hover:text-yellow-500">
                News
              </a>
              <a href="#" className="hover:text-yellow-500">
                Contact
              </a>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="hover:text-yellow-500">
                Help
              </a>
              <a href="#" className="hover:text-yellow-500">
                Support
              </a>
              <a href="#" className="hover:text-yellow-500">
                Contact
              </a>
            </div>
            <div className="md:hidden">{/* Add Mobile Menu Button */}</div>
          </div>
        </header>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <span className="text-yellow-500 font-semibold tracking-wide">
            SOLUTIONS FOR YOUR TRANSPORT
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Reliable & Safe Transport Solution
          </h1>
          <div className="mt-6 flex space-x-4">
            <button className="bg-yellow-500 text-black px-6 py-3 font-semibold rounded hover:bg-yellow-600">
              Discover More
            </button>
            <button className="flex items-center space-x-2 bg-transparent border border-yellow-500 text-yellow-500 px-6 py-3 font-semibold rounded hover:bg-yellow-500 hover:text-black">
              <span>Watch Video</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
