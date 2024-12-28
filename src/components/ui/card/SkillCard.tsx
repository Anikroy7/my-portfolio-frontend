import { TSkill } from "@/src/types";
import { motion } from "framer-motion";

const SkillCard = ({ name, logo }:TSkill) => {
  return (
    <motion.div
      className="flex flex-col items-center p-4 shadow-lg rounded-lg hover:shadow-2xl transition-shadow bg-white"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img src={logo} alt={`${name} Logo`} className="w-16 h-16 mb-4" />
      <p className="text-lg font-medium text-gray-900">{name}</p>
    </motion.div>
  );
};

export default SkillCard