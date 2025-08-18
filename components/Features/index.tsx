"use client";
import React from "react";
import { motion } from "framer-motion";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <>
      {/* Features Start */}
      <section 
        id="features" 
        className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 lg:py-25 xl:py-30"
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-green-400/20 to-blue-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Section Title Start */}
          <SectionHeader
            headerInfo={{
              title: "OUR IMPACT",
              subtitle: "Core Features of Our Centre",
              description: `Discover the key initiatives and programs that are making a
            difference in the lives of children in Kibera. Learn how we provide
            education, nutrition, and support to empower the next generation.`,
            }}
          />
          {/* Section Title End */}

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5"
          >
            {featuresData.map((feature, key) => (
              <motion.div
                key={key}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: key * 0.1 }}
              >
                <SingleFeature feature={feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Features End */}
    </>
  );
};

export default Feature;
