import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95,
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ 
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
        }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ 
          y: -10,
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        className="group glass-card relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg transition-all duration-300 hover:bg-white/20 hover:shadow-2xl dark:border-gray-700/30 dark:bg-gray-800/10 dark:hover:bg-gray-800/20 xl:p-10"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Icon Container */}
        <motion.div 
          className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image src={icon} width={32} height={32} alt="title" className="filter brightness-0 invert" />
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
        </motion.div>

        {/* Content */}
        <motion.h3 
          className="relative mb-4 text-xl font-bold text-black dark:text-white xl:text-itemtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="relative leading-relaxed text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Decorative Elements */}
        <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-xl" />
        <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/10 blur-xl" />
      </motion.div>
    </>
  );
};

export default SingleFeature;
