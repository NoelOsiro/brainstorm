"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 pb-20 pt-35 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 md:pt-40 xl:pb-25 xl:pt-46">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={floatingVariants.animate}
            className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-3xl"
          />
          <motion.div
            animate={{
              ...floatingVariants.animate,
              transition: { ...floatingVariants.animate.transition, delay: 1 },
            }}
            className="absolute -bottom-10 -left-10 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl"
          />
        </div>

        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex lg:items-center lg:gap-8 xl:gap-32.5"
          >
            <motion.div variants={itemVariants} className="md:w-1/2">
              <motion.div
                variants={itemVariants}
                className="mb-4.5 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 backdrop-blur-sm dark:bg-gray-800/80"
              >
                <span className="text-2xl">🔥</span>
                <span className="text-lg font-medium text-black dark:text-white">
                  Support - Empowering Kibera's Children
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero"
              >
                Join Us in Transforming{" "}
                <motion.span
                  variants={itemVariants}
                  className="relative inline-block"
                >
                  <motion.span
                    className="relative z-10 gradient-text"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Kibera
                  </motion.span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-2.5 left-0 h-3 w-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-30"
                  />
                </motion.span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mb-10 text-lg leading-relaxed text-gray-600 dark:text-gray-300"
              >
                Brainstorm Junior Children's Centre - Committed to providing
                holistic development and education for vulnerable children in
                Kibera. Join us in our mission to create a brighter future.
              </motion.p>

              <motion.div variants={itemVariants}>
                <form onSubmit={handleSubmit}>
                  <motion.div 
                    className="flex flex-wrap gap-5 justify-center md:justify-start"
                    variants={itemVariants}
                  >
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="glass-card rounded-full border-0 px-6 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-white dark:placeholder-gray-400"
                    />
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 12px 24px rgba(0, 107, 255, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="get involved button"
                      className="btn-primary flex items-center gap-2 rounded-full px-8 py-3 font-medium text-white shadow-lg transition-all duration-300"
                    >
                      <span>Get Involved</span>
                      <motion.svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </motion.button>
                  </motion.div>
                </form>

                <motion.p 
                  variants={itemVariants}
                  className="mt-5 text-black dark:text-white"
                >
                  Join us today and make a difference.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="hidden md:w-1/2 lg:block"
            >
              <motion.div 
                className="relative 2xl:-mr-7.5"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -left-11.5 top-0"
                >
                  <Image
                    src="/images/shape/shape-01.png"
                    alt="shape"
                    width={46}
                    height={246}
                  />
                </motion.div>
                
                <motion.div
                  animate={floatingVariants.animate}
                  className="absolute bottom-0 right-0 z-10"
                >
                  <Image
                    src="/images/shape/shape-02.svg"
                    alt="shape"
                    width={36.9}
                    height={36.7}
                  />
                </motion.div>
                
                <motion.div
                  animate={{
                    ...floatingVariants.animate,
                    transition: { ...floatingVariants.animate.transition, delay: 0.5 },
                  }}
                  className="absolute -right-6.5 bottom-0 z-1"
                >
                  <Image
                    src="/images/shape/shape-03.svg"
                    alt="shape"
                    width={21.64}
                    height={21.66}
                  />
                </motion.div>
                
                <motion.div 
                  className="relative aspect-[700/444] w-full overflow-hidden rounded-2xl"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    className="hidden shadow-solid-lg dark:shadow-none md:block rounded-2xl object-cover"
                    src="/images/hero/hero.jpeg"
                    alt="Hero"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
