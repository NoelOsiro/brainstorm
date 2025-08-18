import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Team } from "@/types/team";

const SingleTeam = ({ team }: { team: Team }) => {
  const { image, title, description, position } = team;

  return (
    <>
      <motion.div
        whileHover={{ 
          y: -8, 
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.98 }}
        className="group relative z-40 rounded-2xl border border-white/10 bg-white/80 backdrop-blur-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 dark:border-gray-800/50 dark:bg-gray-900/80 xl:p-10"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Profile Image */}
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 h-40 w-40 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary p-1 shadow-lg"
        >
          <div className="relative h-full w-full rounded-full overflow-hidden bg-white">
            <Image 
              src={image} 
              fill 
              sizes="160px"
              style={{ objectFit: "cover" }} 
              alt={title} 
              className="rounded-full transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-2 mt-6 text-xl font-bold text-black dark:text-white xl:text-2xl"
          >
            {title}
          </motion.h3>
          
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-4 text-lg font-medium text-primary dark:text-primary"
          >
            {position}
          </motion.h4>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="max-h-32 overflow-y-auto custom-scrollbar"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
    </>
  );
};

export default SingleTeam;
