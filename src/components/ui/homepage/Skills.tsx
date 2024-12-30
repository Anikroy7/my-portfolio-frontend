import { motion } from "framer-motion";

import Loading from "../shared/Loading";
import SkillCard from "../card/SkillCard";

import { TSkillTech } from "@/src/types";
import { useGetAllSkills } from "@/src/hooks/skill.hook";

const Skills = () => {
  const { data, isPending } = useGetAllSkills();

  if (isPending) return <Loading />;
  const skills = data?.data || [];

  return (
    <section className="py-16" id="skills">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My Skills
        </motion.h2>

        <div className="flex flex-wrap gap-4 items-center ml-9">
          {skills.map((skill: TSkillTech) => (
            <SkillCard key={skill.technology.id} {...skill.technology} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
