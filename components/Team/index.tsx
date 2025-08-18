"use client";
import React from "react";
import { motion } from "framer-motion";
import teamsData from "./teamData";
import SingleTeam from "./SingleTeam";
import SectionHeader from "../Common/SectionHeader";

const Team = () => {
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
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* <!-- ===== Team Start ===== --> */}
      <section id="team" className="relative py-20 lg:py-25 xl:py-30 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:mt-20 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              headerInfo={{
                title: "OUR TEAM",
                subtitle: "Meet Our Dedicated Team",
                description: `Meet the passionate individuals who make our mission possible. Our dedicated team works tirelessly to provide quality education, care, and support to children in Kibera, creating a brighter future for the next generation.`,
              }}
            />
          </motion.div>
          {/* <!-- Section Title End --> */}

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5"
          >
            {/* <!-- Team item Start --> */}
            {teamsData.map((team, key) => (
              <motion.div key={key} variants={itemVariants}>
                <SingleTeam team={team} />
              </motion.div>
            ))}
            {/* <!-- Team item End --> */}
          </motion.div>
        </div>
      </section>

      {/* <!-- ===== Team End ===== --> */}
    </>
  );
};

export default Team;
