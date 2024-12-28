import { Technology, TProject } from "@/src/types";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";

const ProjectCard = ({ images, name, description, projectTechnology, projectLink }: TProject) => {
  return (
    <motion.div
      className="rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Project Image */}
      <div className="h-48">
        <img
          src={images[0]} // First image
          alt={`${name} Preview`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <p className="text-gray-700">{description}</p>

        {/* Tools/Technologies */}
        <div className="flex flex-wrap gap-2 mt-2">
          {projectTechnology.map((tech) => (
            <span
              key={tech.technology.id}
              className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full shadow-sm"
            >
              {tech.technology.name}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-2 mt-4">
          {projectLink.map((linkObj) => (
            <Button
              key={linkObj.id}
              href={linkObj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              {linkObj.name}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
