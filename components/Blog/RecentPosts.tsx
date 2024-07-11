import React from "react";
import Image from "next/image";
import BlogData from "./blogData";

const RecentPosts = () => (
  <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
    <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
      Recent Post
    </h4>
    <ul>
    {BlogData.slice(0, 3).map((post,  index) => (
        <li key={index} className="mb-6">
          <a href={`/blog/${post.slug}`} key={index} className="flex items-center gap-5 transition-all duration-300 hover:text-primary">
            <div className="h-16.5 w-16.5 overflow-hidden rounded-md">
              <Image src={post.mainImage} alt="blog image" width={66} height={66} />
            </div>
            <div className="w-[68%]">
              <h5 className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium">
                {post.title}
              </h5>
              <p className="mt-2 text-sm">{post.publishedAt}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default RecentPosts;
