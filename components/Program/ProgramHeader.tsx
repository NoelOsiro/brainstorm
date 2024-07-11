import React from "react";
import Image from "next/image";
import { Author } from "@/types/blog";

interface BlogHeaderProps {
  mainImage: string;
  title: string;
  category: string;
  metadata: string;
  author: Author | undefined;
  publishedAt: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ mainImage, title, category, metadata, author, publishedAt }) => (
  <>
    <div className="mb-8">
      <Image src={mainImage} alt={title} width={750} height={450} className="w-full rounded-md" />
    </div>
    <div className="mb-5 text-lg font-semibold text-primary">{category}</div>
    <h3 className="mb-5 text-4xl font-semibold text-black dark:text-white">{title}</h3>
    <p className="mb-5 text-lg font-medium text-gray dark:text-graydark">{metadata}</p>
    <div className="mb-10 flex items-center gap-5">
      <div className="h-10 w-10 overflow-hidden rounded-full">
        <Image src={author?.image || "/images/authors/default.jpg"} alt={author?.name || "Author"} width={40} height={40} />
      </div>
      <div>
        <h6 className="text-base font-medium text-black dark:text-white">{author?.name}</h6>
        <p className="text-sm text-gray dark:text-graydark">{publishedAt}</p>
      </div>
    </div>
  </>
);

export default BlogHeader;
