"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  const statsData = [
    { number: "150+", label: "Children Enrolled", delay: 0.2 },
    { number: "25+", label: "Qualified Teachers", delay: 0.4 },
    { number: "5+", label: "Years of Service", delay: 0.6 },
    { number: "100%", label: "Graduation Rate", delay: 0.8 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="relative px-4 py-20 md:px-8 lg:py-25 2xl:px-0 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="relative z-10 mx-auto max-w-c-1390 rounded-3xl bg-white/80 backdrop-blur-lg py-20 shadow-lg border border-white/20 dark:bg-gray-900/80 dark:border-gray-800/50 xl:py-25">
          {/* Decorative Images */}
          <Image
            width={335}
            height={384}
            src="/images/shape/shape-04.png"
            alt="Shape"
            sizes="335px"
            className="absolute -left-15 -top-25 -z-1 opacity-20 lg:left-0"
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            sizes="132px"
            className="absolute bottom-0 right-0 -z-1 opacity-30"
          />

          <Image
            fill
            sizes="100vw"
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 opacity-30 dark:hidden"
          />
          <Image
            fill
            sizes="100vw"
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 opacity-30 hidden dark:block"
          />

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 px-4 text-center md:w-4/5 md:px-0 lg:mb-20 lg:w-2/3 xl:w-1/2"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-2 text-sm font-medium text-primary dark:text-white mb-6"
            >
              Our Impact
            </motion.span>
            
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Transforming Lives in{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Kibera Community
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We are dedicated to creating a nurturing environment for the children of Kibera, 
              providing them with quality education, nutritious meals, and a safe space to grow and learn.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group relative text-center"
              >
                {/* Card Background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-sm border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-gray-800/50 dark:to-gray-800/20 dark:border-gray-700/30"></div>
                
                {/* Content */}
                <div className="relative z-10 p-6">
                  <motion.h3 
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: stat.delay }}
                    className="mb-3 text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent xl:text-5xl"
                  >
                    {stat.number}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                    className="text-lg font-medium text-gray-700 dark:text-gray-300"
                  >
                    {stat.label}
                  </motion.p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;