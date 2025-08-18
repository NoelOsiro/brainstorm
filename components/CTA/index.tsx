"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      {/* CTA Start */}
      <section className="relative overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
        {/* Background Gradient Animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800" />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Animated Background Elements */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-400/30 blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 blur-3xl"
          />
        </div>

        <div className="relative mx-auto max-w-c-1390">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-effect rounded-3xl px-8 py-16 backdrop-blur-xl md:px-12 xl:px-20"
          >
            <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:w-[70%] lg:w-1/2"
              >
                <motion.h2 
                  className="mb-6 text-3xl font-bold text-white xl:text-sectiontitle4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Support Us Today & Make a{" "}
                  <motion.span 
                    className="relative inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="relative z-10 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                      Difference
                    </span>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.5, duration: 0.8 }}
                      className="absolute bottom-1 left-0 h-2 w-full bg-gradient-to-r from-yellow-400 to-orange-400 opacity-50"
                    />
                  </motion.span>
                </motion.h2>
                
                <motion.p 
                  className="text-lg leading-relaxed text-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Join us in our mission to provide quality education, healthcare, and nutrition to the children at Brainstorm Junior Children Centre. Your support can help shape a brighter future for our students.
                </motion.p>

                {/* Stats */}
                <motion.div 
                  className="mt-8 grid grid-cols-3 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <StatItem number="200+" label="Children Helped" />
                  <StatItem number="15+" label="Years Experience" />
                  <StatItem number="100%" label="Transparency" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-6 lg:w-[45%]"
              >
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden xl:block"
                >
                  <Image
                    width={280}
                    height={280}
                    src="/images/shape/shape-06.png"
                    alt="Support"
                    className="opacity-80"
                  />
                </motion.div>

                <motion.a
                  href="/donate"
                  className="btn-primary group relative overflow-hidden rounded-full px-8 py-4 text-lg font-semibold text-white shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Donate Now
                    <motion.svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </span>
                  
                  {/* Ripple Effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ scale: 0, opacity: 1 }}
                    whileHover={{ scale: 1, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* CTA End */}
    </>
  );
};

// Stat Item Component
const StatItem = ({ number, label }: { number: string; label: string }) => (
  <motion.div 
    className="text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="mb-1 text-2xl font-bold text-white">{number}</div>
    <div className="text-sm text-white/80">{label}</div>
  </motion.div>
);

export default CTA;
