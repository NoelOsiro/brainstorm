"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
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

  return (
    <>
      {/* About Start */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-20 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 lg:pb-25 xl:pb-30">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-8 lg:gap-32.5"
          >
            <motion.div
              variants={itemVariants}
              className="relative mx-auto hidden md:block md:w-1/2"
            >
              <motion.div
                className="relative overflow-hidden rounded-3xl h-[400px] w-full md:h-[450px] lg:h-[500px]"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/about/about-dark-01.jpeg"
                  alt="About"
                  className="rounded-3xl object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 top-8 glass-card rounded-2xl p-4 backdrop-blur-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="text-sm font-medium text-white">Active Program</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="md:w-1/2"
            >
              <motion.div variants={itemVariants}>
                <div className="mb-6 inline-flex items-center gap-2">
                  <span className="glass-card rounded-full bg-green-500 px-4 py-1 text-sm font-medium text-white">
                    New
                  </span>
                  <span className="text-lg font-medium text-black dark:text-white">
                    Empowering Children in Kibera
                  </span>
                </div>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero"
              >
                Comprehensive Support for{" "}
                <motion.span
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="gradient-text">Holistic Development</span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-1 left-0 h-2 w-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-30"
                  />
                </motion.span>
              </motion.h2>

              <motion.p 
                variants={itemVariants}
                className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300"
              >
                At Brainstorm Junior Children's Centre, we provide quality education, nutritious meals, and a safe environment to foster the growth and development of children in Kibera.
              </motion.p>

              {/* Feature Items */}
              <motion.div variants={itemVariants} className="space-y-6">
                <FeatureItem
                  number="01"
                  title="Quality Education"
                  description="Comprehensive educational programs tailored to the needs of children in Kibera."
                />
                <FeatureItem
                  number="02"
                  title="Safe Environment"
                  description="Creating a nurturing and safe space where children can learn and grow."
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Two Start */}
      <section className="relative py-20 lg:py-25">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-8 lg:gap-32.5"
          >
            <motion.div
              variants={itemVariants}
              className="md:w-1/2"
            >
              <motion.h4 
                variants={itemVariants}
                className="mb-4 font-medium uppercase text-black dark:text-white"
              >
                Community Engagement
              </motion.h4>
              
              <motion.h2 
                variants={itemVariants}
                className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero"
              >
                Supporting Our{" "}
                <motion.span
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="gradient-text-warm">Future Leaders</span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute bottom-1 left-0 h-2 w-full bg-gradient-to-r from-orange-400 to-red-400 opacity-30"
                  />
                </motion.span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300"
              >
                We believe in the power of community and engage in various outreach programs to support and uplift the children and families in Kibera.
              </motion.p>
              
              <motion.div variants={itemVariants}>
                <motion.a
                  href="#"
                  className="group inline-flex items-center gap-3 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-lg font-medium">Learn More</span>
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="relative mx-auto hidden md:block md:w-1/2"
            >
              <motion.div
                className="relative overflow-hidden rounded-3xl h-[400px] w-full md:h-[450px] lg:h-[500px]"
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/about/about-light-02.jpeg"
                  alt="About"
                  className="rounded-3xl object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Feature Item Component
const FeatureItem = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <motion.div 
    className="flex items-start gap-5"
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.div 
      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <span className="text-lg font-bold">{number}</span>
    </motion.div>
    <div className="flex-1">
      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
        {title}
      </h3>
      <p className="leading-relaxed text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </motion.div>
);

export default About;
