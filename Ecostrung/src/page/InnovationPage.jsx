import React from "react";

function InnovationPage() {
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 lg:text-left">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            R&D
          </div>
 
          <h1 className="text-3xl text-center sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Innovation Pipeline
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Card - Ocean Research */}
          <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <div className="w-full h-56 sm:h-72 lg:h-80 bg-gradient-to-br from-blue-300 via-blue-400 to-cyan-500 rounded-xl overflow-hidden shadow-md relative">
                {/* Left Content - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/Innovation1.jpg"
                alt="solution"
                className="w-full h-auto  object-cover rounded-lg"
              />
            </div>
          </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Creating stronger, more{" "}
              <span className="font-semibold text-gray-900">
                versatile filaments
              </span>{" "}
              that maintain performance while reducing environmental impact is
              our focus for sustainable manufacturing solutions.
            </p>
          </div>

          {/* Right Card - 3D Printing Research */}
          <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <div className="w-full h-56 sm:h-72 lg:h-80 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 rounded-xl overflow-hidden shadow-md relative">
                  {/* Left Content - Image */}
          <div className="relative">
            <div className="sm:aspect-[3/4] lg:aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/Innovation2.jpg"
                alt="solution"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              We continuously explore new applications for{" "}
              <span className="font-semibold text-gray-900">recycled plastics</span>. 
              Our R&D team is currently developing{" "}
              <span className="font-semibold text-gray-900">
                advanced 3D printing
              </span>{" "}
              materials from waste plastics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnovationPage;
