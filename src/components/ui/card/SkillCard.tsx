import { motion } from "framer-motion";
import Image from "next/image";

import { TSkill } from "@/src/types";

const SkillCard = ({ name, logo }: TSkill) => {
  return (
    <motion.div
      className="flex w-28 flex-col h-32 items-center p-3 shadow-md rounded-md hover:shadow-lg transition-shadow bg-white"
      initial={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <Image
        alt={`${name} Logo`}
        className="w-12 h-12 mb-3"
        height={48}
        src={logo}
        width={48}
      />
      <p className="text-sm text-center font-medium text-gray-800">{name}</p>
    </motion.div>
  );
};

export default SkillCard;
