import React, { useState } from "react";
import { Recycle, FileText, Settings, Handshake, X } from "lucide-react";

function SolutionPage() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <Recycle className="w-5 h-5" />,
      title: "Waste segregation systems",
      preview: "Effective source separation is the bedrock of successful plastic transformation...",
      fullDescription:
        "Effective source separation is the bedrock of successful plastic transformation. We develop and implement robust Waste Segregation Systems that empower businesses and communities to correctly separate plastic waste at the point of generation. By improving the quality of collected material, these systems not only enhance the efficiency and economic viability of our biotech processes but also significantly reduce contamination, ensuring that more plastic waste is diverted from landfills and oceans and given a valuable second life",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Material audits",
      preview: "Before transformation, understanding the waste stream is crucial...",
      fullDescription:
        "Before transformation, understanding the waste stream is crucial. Our Material Audits provide an in-depth analysis of your existing plastic waste, identifying types, volumes, and contamination levels. This precise data allows us to optimize collection strategies and tailor our biotech processes for maximum efficiency and product yield, ensuring every bit of potential is unlocked from discarded plastics.",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Custom recycling programs",
      preview: "One size does not fit all when it comes to waste...",
      fullDescription:
        "One size does not fit all when it comes to waste. We develop Custom Recycling Programs specifically designed to meet the unique needs and operational flows of our business partners. Whether it's post-industrial plastic scrap, specific consumer waste streams, or unique packaging materials, we engineer bespoke collection and pre-processing solutions that feed directly into our innovative biotech transformation, maximizing resource recovery and minimizing environmental footprint.",
    },
    {
      icon: <Handshake className="w-5 h-5" />,
      title: "Business partnerships",
      preview: "Collaboration is key to scaling solutions for the global plastic crisis...",
      fullDescription:
        "Collaboration is key to scaling solutions for the global plastic crisis. Our Business Partnerships foster symbiotic relationships with companies eager to enhance their sustainability efforts. We work hand-in-hand to implement effective waste management, secure consistent feedstock for our processes, and co-create pathways for valuable, sustainable products derived from their waste. By partnering with us, businesses can transform their environmental liabilities into tangible assets and contribute actively to a circular economy.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="  sm:aspect-[3/2] lg:aspect-[3/2]  rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/Solutions.jpg"
                alt="solution"
                className="w-full h-auto  object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Content - Services */}
          <div className="space-y-6">
            <div>
              <div className="inline-block bg-orange-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                Services
              </div>

              <h1 className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Sustainable Solutions
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Our services extend beyond manufacturing to provide comprehensive waste management solutions. We partner with businesses to implement effective waste segregation systems, conduct material audits, and develop custom recycling programs tailored to specific operational needs.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200 cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {service.preview}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-[#000000d1] flex items-center justify-center p-4 z-50">
          <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-white">
                {selectedService.icon}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                {selectedService.title}
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {selectedService.fullDescription}
            </p>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedService(null)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SolutionPage;
