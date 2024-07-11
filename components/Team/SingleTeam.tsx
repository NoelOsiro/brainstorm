import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Team } from "@/types/team";

const SingleTeam = ({ team }: { team: Team }) => {
  const { image, title, description, position } = team;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="relative h-40 w-36 mx-auto rounded-full overflow-hidden bg-primary">
          <Image src={image} layout="fill" objectFit="cover" alt={title} />
        </div>
        <h3 className="mb-2 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <h4 className="mb-5 text-lg font-medium text-black dark:text-white">
          {position}
        </h4>
        
        <div className="max-h-36 overflow-y-auto">
          <p>{description}</p>
        </div>
      </motion.div>
    </>
  );
};

export default SingleTeam;
