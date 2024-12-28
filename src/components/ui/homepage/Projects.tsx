import { motion } from "framer-motion";
import ProjectCard from "../card/ProjectCard";
import Loading from "../shared/Loading";
import { useGetAllProjects } from "@/src/hooks/project.hook";
import { Technology, TProject, TSkillTech } from "@/src/types";

const Projects = () => {
/*   const projects = [
    {
      name: "E-Commerce Platform",
      image: "https://via.placeholder.com/400x300",
      description:
        "A scalable and responsive e-commerce application with features like product search, user authentication, and payment integration.",
      tools: ["React.js", "Node.js", "MongoDB", "Stripe"],
      link: "https://example.com",
    },
    {
      name: "Portfolio Website",
      image: "https://via.placeholder.com/400x300",
      description:
        "A personal portfolio showcasing my skills, experience, and projects in an interactive manner.",
      tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "https://example.com",
    },
    {
      name: "Project Management Tool",
      image: "https://via.placeholder.com/400x300",
      description:
        "A collaborative tool for project management with task tracking, file sharing, and team chat functionality.",
      tools: ["React.js", "Firebase", "Material UI"],
      link: "https://example.com",
    },
  ]; */
  const { data, isPending } = useGetAllProjects();

  if (isPending) return <Loading />
  const projects = data?.data || []
  console.log(projects)
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project:TProject) => {
            const { images, name, description, projectTechnology, projectLink } = project;

            return (
              <ProjectCard
                key={project.id}
                images={images}
                name={name}
                description={description}
                projectTechnology={projectTechnology}
                projectLink={projectLink} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
