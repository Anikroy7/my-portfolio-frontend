"use client";

import React from "react";
import Image from "next/image";

import Loading from "./shared/Loading";

import { useGetSingleBlog } from "@/src/hooks/blog.hook";

const BlogDetailsPage: React.FC<{ id: string }> = ({ id }) => {
  const { data, isPending } = useGetSingleBlog(id);

  if (isPending) return <Loading />;

  const blog = data?.data;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          alt="Blog Image"
          className="w-full h-[30%] object-cover"
          height={60}
          src={blog?.image}
          width={100}
        />
        <div className="p-6">
          <p className="text-sm text-gray-500">
            {blog?.author} • {new Date(blog?.createdAt).toLocaleDateString()}
          </p>
          <h1 className="mt-2 text-3xl font-bold">{blog?.title}</h1>
          <div className="mt-4 flex space-x-2">
            {blog?.categories.map((category: string, index: number) => (
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

      <div className="mt-8">
        <div
          dangerouslySetInnerHTML={{ __html: blog?.description }}
          className="mt-4 text-gray-700 leading-relaxed"
        />
      </div>

      <div className="mt-12">
        <p className="mt-2 text-gray-600">
          Written by <span className="font-boldAnik Roy">Anik Roy</span>
        </p>
      </div>

      {/* <div className="mt-12">
                <h3 className="text-2xl font-semibold">Comments</h3>
                <div className="mt-4">
                    <textarea
                        className="w-full p-4 border rounded-md"
                        placeholder="Leave a comment"
                        rows={4}
                    />
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Submit Comment
                    </button>
                </div>

                <div className="mt-6 border-t pt-6">
                    <div className="flex items-center space-x-2">
                        <div className="bg-gray-400 w-8 h-8 rounded-full" />
                        <div>
                            <p className="text-sm font-semibold">John Doe</p>
                            <p className="text-sm text-gray-600">Great article! Very informative.</p>
                        </div>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default BlogDetailsPage;
