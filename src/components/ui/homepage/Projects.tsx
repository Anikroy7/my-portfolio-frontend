import { motion } from "framer-motion";

import ProjectCard from "../card/ProjectCard";
import Loading from "../shared/Loading";

import { useGetAllProjects } from "@/src/hooks/project.hook";
import { TProject } from "@/src/types";

const Projects = () => {
  const { data, isPending } = useGetAllProjects();

  if (isPending) return <Loading />;
  const projects = data?.data || [];

  return (
    <section className="py-16 " id="projects">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: TProject) => {
            const {
              images,
              name,
              description,
              projectTechnology,
              projectLink,
              id,
            } = project;

            return (
              <ProjectCard
                key={project.id}
                description={description}
                id={id}
                images={images}
                name={name}
                projectLink={projectLink}
                projectTechnology={projectTechnology}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
