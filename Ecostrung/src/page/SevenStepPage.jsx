import React from 'react';
import { Recycle, Filter, Scissors, Zap, Package, Globe } from 'lucide-react';

function SevenStepPage() {
  const steps = [
    {
      number: 2,
      title: "Collect and Sort Waste",
      subtitle: "Separating for Sustainability",
      icon: <Recycle className="w-6 h-6" />,
      description:
        "Once potential sources are identified, we initiate a carefully managed collection process. Our teams gather plastic waste directly from source points, minimizing contamination and maximizing traceability.The collected materials then undergo rigorous sorting, based on polymer type, color, and recyclability. This ensures that only plastics suitable for high-performance 3D printing filament proceed to the next stage. Accurate sorting plays a vital role in maintaining product integrity, minimizing resource waste, and enhancing the sustainability of our operations.",
    },
    {
      number: 3,
      title: "Clean and Process Plastics",
      subtitle: "Purifying with Precision",
      icon: <Filter className="w-6 h-6" />,
      description:
        "After sorting, the selected plastics are meticulously cleaned using an environmentally friendly washing protocol. Dirt, labels, adhesives, and any chemical residues are removed through a multi-step process involving soaking, scrubbing, and controlled drying.We use water-conserving techniques and non-toxic detergents to ensure both effectiveness and environmental safety. This step guarantees a clean, contaminant-free feedstock that lays the foundation for high-quality biodegradable filament production.",
    },
    {
      number: 4,
      title: "Shred into Uniform Raw Material",
      subtitle: "Breaking Down to Build Up",
      icon: <Scissors className="w-6 h-6" />,
      description:
        "The purified plastic is now processed through industrial-grade shredders that reduce it into consistent flakes or granules. These uniform particles ensure smooth flow and melt behavior during extrusion, directly impacting the strength and quality of the final filament.Our shredding process is optimized for minimal energy use and maximum material recovery, turning plastic debris into structured raw material ready for sustainable transformation.",
    },
    {
      number: 5,
      title: "Extrude Biodegradable Filament",
      subtitle: "Transforming Waste into Innovation",
      icon: <Zap className="w-6 h-6" />,
      description:
        "Using advanced extrusion technology, the shredded granules are melted, filtered, and formed into continuous strands of biodegradable filament. We carefully control temperature, speed, and pressure to maintain dimensional accuracy and mechanical integrity.Each filament is designed to meet the standards of 3D printing applications, offering the strength, flexibility, and reliability needed for biotech innovations — all while being planet-friendly. Our in-house formulation ensures that what comes out of the machine isn’t just functional — it’s revolutionary.",
    },
    {
      number: 6,
      title: "Package for Purpose",
      subtitle: "Eco-Conscious Packaging for a Greener Tomorrow",
      icon: <Package className="w-6 h-6" />,
      description:
        "After cooling and coiling, the filaments are packaged in minimal-waste, recyclable materials. We maintain strict hygiene and labeling standards to ensure every spool is quality-checked and traceable.Each package includes product information, usage guidelines, and sustainability certifications. With a packaging process as thoughtful as our product, we minimize environmental impact while maximizing usability.",
    },
    {
      number: 7,
      title: "Distribute & Make an Impact",
      subtitle: "From Labs to Lives - Driving Change",
      icon: <Globe className="w-6 h-6" />,
      description:
        "Our final step involves delivering our biodegradable filaments to innovators across industries — from biotech startups and academic institutions to sustainable product designers.Through a robust distribution network, we ensure timely and secure delivery while maintaining our commitment to low-carbon logistics. With every spool that leaves our facility, Ecostrung empowers the world to reduce its plastic footprint and embrace circular manufacturing.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-12 text-black">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:hidden ">
          7-Step <br/>Eco-Transformation 
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 hidden md:block ">
          7-Step Eco-Transformation 
        </h1>
      </div>

      {/* Step 1 - Featured Large Card */}
      <div className="mb-12">
        <div className="bg-white text-gray-800 rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold">
                1
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                Identify Plastic Waste Sources
              </h2>
              <h3 className="text-base sm:text-lg md:text-xl text-emerald-700 font-semibold mb-4 italic">
                Pinpointing the Problem, Creating the Solution
              </h3>
              <div className="space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  At Ecostrung, our journey toward sustainability begins with a thorough examination of identifying viable sources of{" "}
                  <span className="font-semibold text-emerald-700">
                    plastic waste
                  </span>
                  . This crucial first step involves mapping out where high-quality, reusable plastic waste is generated — from urban collection centres and packaging industries to academic labs and manufacturing units.
                </p>
                <p>
                  We collaborate closely with waste management agencies, R&D facilities, and eco-conscious communities to trace plastics that would otherwise end up in landfills or oceans. By conducting waste audits and analysing material types, we ensure that only plastics suitable for transformation into biodegradable filaments are selected.
                </p>
                <p>
                  This proactive approach not only helps us secure consistent raw material but also strengthens the circular economy, turning everyday waste into a resource for innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps 2-7 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white text-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-lg sm:text-xl font-bold">
                {step.number}
              </div>
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                {step.icon}
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold mb-2">
              {step.title}
            </h3>

            <h4 className="text-xs sm:text-sm font-semibold text-emerald-700 mb-3 italic">
              {step.subtitle}
            </h4>

            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-white text-gray-800 rounded-3xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            Transforming Today's Waste into Tomorrow's Innovation
          </h2>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Our comprehensive 7-step process ensures that every piece of plastic
            waste is given a second life, contributing to a sustainable future
            while delivering high-quality biodegradable materials for
            cutting-edge applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SevenStepPage;
