import React from "react";
import BlogData from "@/components/Blog/blogData";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";

import Categories from "@/components/Blog/Categories";

import Tags from "@/components/Blog/Tags";
import BlogHeader from "@/components/Blog/BlogHeader";

import { Blog } from "@/types/blog";
import SearchForm from "@/components/Blog/SerachForm";
import BlogContent from "@/components/Blog/Blogcontent";
import RecentPosts from "@/components/Blog/RecentPosts";

interface SingleBlogPageProps extends Blog {}

export async function generateStaticParams() {  
  return BlogData.map((post) => ({
    slug: post.slug,
  }));
}

const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getPost(params.slug);
  const {
    _id,
    title = "No title",
    mainImage,
    author,
    publishedAt = "Unknown date",
    category = "Uncategorized",
    metadata = "No metadata",
    body = [],
    additionalImages = [],
  } = data || {};

  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          <div className="md:w-1/2 lg:w-[32%]">
            <SearchForm />
            <Categories />
            <RecentPosts />
            <Tags />
          </div>
          <div className="md:w-full lg:w-[68%]">
            { data ? (
              <div className="animate_right">
                <BlogHeader
                  mainImage={mainImage}
                  title={title}
                  category={category}
                  metadata={metadata}
                  author={author}
                  publishedAt={publishedAt}
                />
                <BlogContent body={body} additionalImages={additionalImages} />
                <SharePost />
                <RelatedPost />
              </div>
            ) : (
              <p>Post not found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;

async function getPost(slug: string) {
  return BlogData.find((post) => post.slug === slug);
}
