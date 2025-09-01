import React from 'react';
import { BarChart3, Filter, Settings, Recycle } from 'lucide-react';

function Fourstep() {

  const cards = [
    {
      icon: Recycle,
      title: "Waste segregation",
      description: "The final step converts processed materials into new, usable products ready for market distribution. Our manufacturing techniques complete the closed-loop system by creating valuable items from what was once waste. This approach ensures maximum resource efficiency while delivering environmentally responsible products."
    },
    {
      icon: Filter,
      title: "Material separation",
      description: "Once segregated, we employ specialized techniques to further separate materials based on their composition and properties. This refined sorting process allows us to isolate high-quality recyclable plastics. Our advanced separation technology ensures purity of materials for optimal conversion results",
    },
    {
      icon: Settings,
      title: "Processing techniques",
      description: "The third step involves transforming the separated plastic materials through our innovative processing methods. We apply proprietary technology to break down and reconstitute the plastic waste into usable forms. This processing phase is engineered to maintain material integrity while reducing environmental impact.",
    },
    {
      icon: BarChart3,
      title: "Product manufacturing",
      description: "The first step in our proprietary technology involves carefully sorting plastic waste into different categories. This critical initial phase ensures that only appropriate materials enter our conversion system. Proper segregation maximizes efficiency in subsequent processing steps.",
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-10">
      <div className=" w-full mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header Section */}
        <div className="mb-10 ">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                Process
          </div>
          <h1 className="text-3xl text-center md:text-left sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight md:hidden ">
            <span className="text-gray-700">Four-Step</span> <br/>Process for Plastic <br />
            <span className="text-gray-700">Waste</span> Conversion
          </h1>
          <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight hidden md:block ">
            <span className="text-gray-700">Four-Step</span>{""} Process for Plastic {""}
            <span className="text-gray-700">Waste</span> Conversion
          </h1>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-4 w-full">
          {
            cards.map((item,index) => (
              <div className="bg-gray-200 md:w-80 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:scale-105" key={index} >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-white">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">
              {item.description}
            </p>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default Fourstep;
