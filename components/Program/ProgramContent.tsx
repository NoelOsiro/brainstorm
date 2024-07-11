import React from "react";
import Image from "next/image";

interface BlogContentProps {
  body: string[] | undefined;
  additionalImages: { src: string; width: number; height: number; alt: string }[] | undefined;
}

const BlogContent: React.FC<BlogContentProps> = ({ body, additionalImages }) => (
  <>
    {body?.map((paragraph, index) => (
      <p key={index} className="mb-5 text-lead font-medium text-black dark:text-gray-300">
        {paragraph}
      </p>
    ))}
    {additionalImages && (
      <div className="mb-10 flex flex-wrap gap-5">
        {additionalImages.map((image, index) => (
          <Image key={index} src={image.src} alt={image.alt} width={image.width} height={image.height} className="rounded-md" />
        ))}
      </div>
    )}
  </>
);

export default BlogContent;
