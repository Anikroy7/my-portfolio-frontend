import React from "react";
import Link from "next/link";
import Image from "next/image";

import Loading from "../shared/Loading";
import BlogCard from "../card/BlogCard";

import { useGetAllBlogs } from "@/src/hooks/blog.hook";
import { TBlog } from "@/src/types";

export default function Blogs() {
  const { data, isPending } = useGetAllBlogs();

  if (isPending) return <Loading />;
  const blogs = data?.data || [];

  return (
    <section className="p-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Recent Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Card */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <Image
              alt="Blog Image"
              className="w-full h-auto object-cover"
              height={100}
              src={blogs[0]?.image}
              width={100}
            />
            <div className="p-6 flex-1">
              <p className="text-sm text-gray-500">
                Anik Roy • {new Date(blogs[0].createdAt).toLocaleDateString()}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{blogs[0].title}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    blogs[0].description.split(" ").slice(0, 185).join(" ") +
                    "...",
                }}
                className="mt-2 text-gray-600"
              />
              {/* View More Button */}
              {blogs[0].description.split(" ").length > 185 && (
                <Link
                  className="text-blue-500 text-sm mt-2 inline-block"
                  href={`/blog/${blogs[0].id}`}
                >
                  View More
                </Link>
              )}
              <div className="mt-4 flex space-x-2">
                {blogs[0].categories.map((category: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-6">
            {blogs.slice(1, 4).map((blog: TBlog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
