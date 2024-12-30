"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Loading from "./shared/Loading";

import { useGetSingleProject } from "@/src/hooks/project.hook";

const ProjectDetails = ({ id }: { id: string }) => {
  const { data, isPending } = useGetSingleProject(id);
  const [displayImage, setDisplayImage] = useState<null | string>(
    data?.data?.images[0] || null,
  );

  useEffect(() => {
    if (data && !isPending) {
      setDisplayImage(data?.data?.images[0]);
    }
  }, [data, isPending]);

  if (isPending) return <Loading />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="flex flex-col md:flex-row -mx-4">
        {/* Left Section - Images */}
        <div className="md:w-1/2 p-4">
          <div className="h-64 md:h-80 w-full rounded-lg overflow-hidden mb-4">
            <Image
              alt={`${data?.data.name} Preview`}
              className="w-full h-full object-cover"
              height={400}
              src={displayImage || "https://via.placeholder.com/400"}
              width={400}
            />
          </div>
          {/* Image Thumbnails */}
          <div className="flex gap-3 mt-4">
            {data?.data.images.map((image: string, index: number) => (
              <button
                key={index}
                className={`cursor-pointer w-16 h-16 rounded-md overflow-hidden border ${
                  displayImage === image
                    ? "border-indigo-500"
                    : "border-gray-200"
                }`}
                onClick={() => setDisplayImage(image)}
              >
                <Image
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  height={64}
                  src={image}
                  width={64}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Section - Project Details */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900">
            {data?.data.name}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Category:{" "}
            <span className="text-indigo-600 font-medium">
              {data?.data.category}
            </span>
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            <div
              dangerouslySetInnerHTML={{ __html: data?.data?.description }}
              className="mt-4 text-gray-700 leading-relaxed"
            />
          </p>

          <div className="mt-6">
            <p className="text-gray-500 text-sm">Project Links:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {data?.data.projectLink.map(
                (linkObj: { id: string; link: string; name: string }) => (
                  <a
                    key={linkObj.id}
                    className="text-sm bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800 transition"
                    href={linkObj.link.trim()}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {linkObj.name}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
