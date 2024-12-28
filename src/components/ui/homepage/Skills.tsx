import { motion } from "framer-motion";

const SkillCard = ({ skillLogo, skillName }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-4 shadow-lg rounded-lg hover:shadow-2xl transition-shadow "
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img src={skillLogo} alt={`${skillName} Logo`} className="w-16 h-16 mb-4" />
      <p className="text-lg font-medium text-gray-900">{skillName}</p>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { skillName: "JavaScript", skillLogo: "https://cdn-icons-png.flaticon.com/64/5968/5968292.png" },
    { skillName: "React.js", skillLogo: "https://cdn-icons-png.flaticon.com/64/1126/1126012.png" },
    { skillName: "Node.js", skillLogo: "https://cdn-icons-png.flaticon.com/64/919/919825.png" },
    { skillName: "MongoDB", skillLogo: "https://cdn-icons-png.flaticon.com/64/919/919836.png" },
    { skillName: "TypeScript", skillLogo: "https://cdn-icons-png.flaticon.com/64/5968/5968381.png" },
    { skillName: "PHP", skillLogo: "https://cdn-icons-png.flaticon.com/64/919/919830.png" },
    { skillName: "Laravel", skillLogo: "https://cdn-icons-png.flaticon.com/64/919/919841.png" },
    { skillName: "Tailwind CSS", skillLogo: "https://cdn-icons-png.flaticon.com/64/5968/5968733.png" },
  ];

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
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
