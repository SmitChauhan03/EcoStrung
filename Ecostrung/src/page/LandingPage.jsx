import React from "react";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-12">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center text-center py-10 pt-40 sm:pt-5 "
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          EcoStrung - Waste to Wonder
        </motion.h1>

        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Transforming Plastic Waste into Innovative Products
        </motion.p>

        <motion.p
          className="mt-2 text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Innovating bioplastics from recycled waste <br />
          Building a sustainable, circular future
        </motion.p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="overflow-hidden rounded-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <img
          src="/images/Landing.jpg"
          alt="EcoStrung Banner"
          className="w-full h-auto md:h-100 object-cover rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
}

export default LandingPage;
