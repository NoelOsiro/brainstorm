import React from "react";
import Image from "next/image";

const RecentPosts = () => (
  <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
    <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
      Recent Post
    </h4>
    <ul>
      {[
        { title: "Best dashboard templates for your project 2023", date: "March 26, 2023", image: "/images/blog/blog-01.jpeg" },
        { title: "Five open-source projects you should use", date: "March 26, 2023", image: "/images/blog/blog-02.jpeg" },
        { title: "10 project management tools", date: "March 26, 2023", image: "/images/blog/blog-03.jpeg" },
      ].map((post, index) => (
        <li key={index} className="mb-6">
          <a href="#" className="flex items-center gap-5 transition-all duration-300 hover:text-primary">
            <div className="h-16.5 w-16.5 overflow-hidden rounded-md">
              <Image src={post.image} alt="blog image" width={66} height={66} />
            </div>
            <div className="w-[68%]">
              <h5 className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium">
                {post.title}
              </h5>
              <p className="mt-2 text-sm">{post.date}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default RecentPosts;
