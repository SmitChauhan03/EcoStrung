import React from 'react'

function Revolution() {

  const images = [
    {
      src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      text: "The 300+ million tons of global plastic waste is a massive challenge, and our biotech startup is delivering the innovative solutions to turn it into valuable resources."
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      text: "Beyond the landfill: This isn't just plastic waste, it's raw material for innovation. We're giving it new purpose"
    },
    {
      src: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      text: "Sustainable solutions, one cap at a time."
    },
    {
      src: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      text: "Sustainable solutions, one step at a time"
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">

        {/* Hero Section */}
        <div className="mb-10 relative">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-6">
            Plastic Revolution
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Description Text */}
            <div className="lg:col-span-2">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent font-semibold">
                  biotech startup
                </span>{" "}
                transforms plastic waste into valuable products through innovative processes. With over{" "}
                <span className="font-bold text-gray-900">
                  300 million tons of plastic waste generated annually worldwide
                </span>
                , our solution addresses a critical environmental challenge while creating sustainable alternatives for everyday use.
              </p>
            </div>

            {/* Quote Box */}
            <div className="lg:col-span-1 relative">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                <blockquote className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4">
                  "Plastic pollution is a global issue: killing wildlife, contaminating our oceans and waters, and lasting far longer than it is used"
                </blockquote>
                <cite className="text-sm text-gray-600">
                  <div className="font-semibold">Leonardo DiCaprio</div>
                  <div>Actor and Environmental activist</div>
                </cite>
              </div>
            </div>
          </div>
        </div>

        {/* Main Hero Image */}
        <div className="mb-16">
          <div className="relative h-auto md:h-100 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
              alt="Plastic waste in urban environment"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-4 left-4 md:left-15 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg md:max-w-s">
              <p className="text-xs sm:text-sm text-gray-800 font-medium">
                The 300+ million tons of global plastic waste is a massive challenge, and our biotech startup is delivering innovative solutions to turn it into valuable resources.
              </p>
            </div>
          </div>
        </div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Reusable Card Component */}
          {images.map((item, index) => (
            <div key={index} className="relative transition-all rounded-xl duration-300   hover:transform hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-gray-100 rounded-xl overflow-hidden pb-25 md:pb-30">
                <img src={item.src} alt="Plastic waste" className="w-full h-48 sm:h-56 object-cover " />
                <div className="p-4 absolute ">
                  <p className=" text-sm text-gray-700">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Transforming Waste Into Value
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Through cutting-edge biotechnology and innovative processing techniques, we're not just solving the plastic waste crisis – we're turning it into an opportunity for sustainable innovation and environmental restoration.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Revolution
