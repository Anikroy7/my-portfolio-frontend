import Image from "next/image";
import Link from "next/link";
import React from "react";

import { TBlog } from "@/src/types";

export default function BlogCard({ blog }: { blog: TBlog }) {
  const descriptionPreview =
    blog.description.split(" ").slice(0, 15).join(" ") + "...";

  return (
    <div
      key={blog.id}
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
    >
      <Image
        alt="Blog Image"
        className="w-full h-44 object-cover"
        height={154}
        src={blog.image}
        width={100}
      />
      <div className="p-6 flex-1">
        <p className="text-sm text-gray-500">
          Anik Roy • {new Date(blog.createdAt).toLocaleDateString()}
        </p>
        <h3 className="mt-2 text-xl font-semibold">{blog.title}</h3>
        <p
          dangerouslySetInnerHTML={{ __html: descriptionPreview }}
          className="mt-2 text-gray-600"
        />
        <Link
          className="text-blue-500 text-sm mt-2 inline-block"
          href={`/blog/${blog.id}`}
        >
          View More
        </Link>
        <div className="mt-4 flex space-x-2">
          {blog.categories.map((category, index) => (
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
  );
}
