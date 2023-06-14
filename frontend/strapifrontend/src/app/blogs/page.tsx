import React from "react";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

export default async function Page() {
  const res = await fetch("http://127.0.0.1:1337/api/pages?populate=deep", {
    next: { revalidate: 10 },
  });
  const blogResponse = await res.json();

  return (
    <div className="flex flex-col mt-[150px] justify-center items-center w-screen">
      {/* {blogResponse.data.map((blog: any, index: number) => (
        <Link
          className="flex flex-col mt-[150px] justify-center items-center max-w-[1200px] gap-10"
          href={`/blogs/${blog.id}`}
          key={index}
        >
          <BlogCard
            blogTitle={blog.attributes.blogTitle}
            imgSrc={blog.attributes.blogImage}
            authorName={blog.attributes.blogAuthor}
            date={blog.attributes.blogDate}
            duration={blog.attributes.duration}
          />
        </Link>
      ))} */}

      {blogResponse.data[0].attributes.blocks[0].button[0].id}
    </div>
  );
}
