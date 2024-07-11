import React from "react";

const Tags = () => (
  <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
    <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
      Tags
    </h4>
    <div className="flex flex-wrap gap-2.5">
      {["Application", "Dashboard", "Design", "Template", "UI/UX"].map((tag, index) => (
        <a
          key={index}
          href="#"
          className="rounded-full bg-primary px-3.5 py-2 text-xs font-medium text-white"
        >
          {tag}
        </a>
      ))}
    </div>
  </div>
);

export default Tags;
