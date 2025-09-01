import React from "react";

function ShowCasePage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          {/* Left Content - Text Section */}
          <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight md:hidden">
              Product Showcase
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight hidden md:block">
              Product <br />
              Showcase
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              From waste to functionality, our product line demonstrates the versatility of recycled plastics. Our current offerings include durable packaging solutions, ergonomic laptop stands, decorative plant pots, and specialized 3D printing filament - all made entirely from reclaimed plastic waste.
            </p>
          </div>

          {/* Right Content - Responsive Image Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src="/images/product1.jpg"
                  alt="Laptop Workspace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Top Right - 3D Printing */}
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src="/images/product2.jpg"
                  alt="3D Printing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Bottom Left - 3D Printing Filament */}
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src="/images/product3.jpg"
                  alt="Filament Roll"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Bottom Right - Filament Close-up */}
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src="/images/product4.jpg"
                  alt="Filament Close-up"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCasePage;
