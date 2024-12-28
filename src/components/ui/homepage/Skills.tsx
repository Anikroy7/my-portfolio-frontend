import { motion } from "framer-motion";
import Loading from "../shared/Loading";
import { TSkill, TSkillTech } from "@/src/types";
import SkillCard from "../card/SkillCard";
import { useGetAllSkills } from "@/src/hooks/skill.hook";



const Skills = () => {
  const { data, isPending } = useGetAllSkills();
  console.log(data)
  
  if (isPending) return <Loading />
  const skills = data?.data || []
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill:TSkillTech) => (
            <SkillCard key={skill.technology.id} {...skill.technology} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
