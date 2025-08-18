"use client";
import { motion } from "framer-motion";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

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
      {/* Section Title Start */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto text-center"
      >
        <motion.div 
          variants={itemVariants}
          className="mb-6 inline-block"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-card rounded-full px-6 py-2 backdrop-blur-sm"
          >
            <span className="gradient-text text-sectiontitle font-semibold">
              {title}
            </span>
          </motion.div>
        </motion.div>

        <motion.h2 
          variants={itemVariants}
          className="mx-auto mb-6 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3"
        >
          {subtitle}
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="mx-auto text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:w-4/5 lg:w-3/5 xl:w-[46%]"
        >
          {description}
        </motion.p>
      </motion.div>
      {/* Section Title End */}
    </>
  );
};

export default SectionHeader;
