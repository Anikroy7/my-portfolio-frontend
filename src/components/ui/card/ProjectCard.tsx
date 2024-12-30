import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";
import Image from "next/image";

import { TProject } from "@/src/types";

const ProjectCard = ({
  images,
  name,
  description,
  projectTechnology,
  projectLink,
  id,
}: TProject) => {
  return (
    <motion.div
      className="rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden bg-white border border-gray-200 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {/* Project Image */}
      <div className="h-48">
        <Image
          alt={`${name} Preview`}
          className="w-full h-full object-cover"
          height={100}
          src={images[0]} // First image
          width={100}
        />
      </div>

      {/* Project Details */}
      <div className="p-6 space-y-4 flex-grow">
        {/* Project Name */}
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>

        {/* Project Description */}
        <p
          dangerouslySetInnerHTML={{
            __html: description.split(" ").slice(0, 15).join(" ") + "...",
          }}
          className="mt-2 text-gray-600"
        />
        {/* View More Button */}
        {description.split(" ").length > 15 && (
          <Link
            className="text-blue-500 text-sm mt-2 inline-block"
            href={`/project/${id}`}
          >
            View More
          </Link>
        )}

        {/* Tools/Technologies */}
        <div className="flex flex-wrap gap-2">
          {projectTechnology.map((tech) => (
            <span
              key={tech.technology.id}
              className="bg-gray-300 text-gray-800 text-xs font-medium px-2 py-1 rounded-full"
            >
              {tech.technology.name}
            </span>
          ))}
        </div>
      </div>

      {/* Project Links (Placed at the Bottom) */}
      <div className="p-6 pt-0 flex flex-wrap gap-2  border-gray-200">
        {projectLink.map((linkObj) => (
          <Link
            key={linkObj.id}
            isExternal
            showAnchorIcon
            className="text-xs font-medium text-white bg-black px-3 py-1 rounded-md hover:bg-gray-800 transition-colors"
            href={linkObj.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {linkObj.name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
