"use client";
import React from "react";
import teamsData from "./teamData";
import SingleTeam from "./SingleTeam";
import SectionHeader from "../Common/SectionHeader";

const Team = () => {
  return (
    <>
      {/* <!-- ===== Team Start ===== --> */}
      <section id="team" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:mt-20 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "OUR Team",
              subtitle: "Core Team of Our Centre",
              description: `Discover the key initiatives and programs that are making a
            difference in the lives of children in Kibera. Learn how we provide
            education, nutrition, and support to empower the next generation.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Team item Start --> */}

            {teamsData.map((team, key) => (
              <SingleTeam team={team} key={key} />
            ))}
            {/* <!-- Team item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Team End ===== --> */}
    </>
  );
};

export default Team;
