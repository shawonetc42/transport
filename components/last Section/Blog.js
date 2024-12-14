// pages/index.js

import Image from "next/image";

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
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
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
            <div className="absolute top-4 right-4 bg-blue-500 text-white text-lg font-bold h-10 w-10 flex items-center justify-center rounded-full">
              30
            </div>
          </div>

          {/* Repeat the blog card for other entries */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
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
            <div className="absolute top-4 right-4 bg-blue-500 text-white text-lg font-bold h-10 w-10 flex items-center justify-center rounded-full">
              30
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
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
            <div className="absolute top-4 right-4 bg-blue-500 text-white text-lg font-bold h-10 w-10 flex items-center justify-center rounded-full">
              30
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
