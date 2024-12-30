"use client";

import React from "react";
import { motion } from "framer-motion";

import Loading from "@/src/components/ui/shared/Loading";
import { useGetAllBlogs } from "@/src/hooks/blog.hook";
import { TBlog } from "@/src/types";
import BlogCard from "@/src/components/ui/card/BlogCard";

export default function AllBlogs() {
  const { data, isPending } = useGetAllBlogs();

  if (isPending) return <Loading />;
  const blogs = data?.data || [];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My Blogs
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog: TBlog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
