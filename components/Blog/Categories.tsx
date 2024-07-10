import React from "react";

const Categories = () => (
  <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
    <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
      Categories
    </h4>
    <ul>
      {["Blog", "Events", "Grants", "Lifestyle", "News", "Security"].map((category, index) => (
        <li key={index} className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
          <a href="#">{category}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Categories;
