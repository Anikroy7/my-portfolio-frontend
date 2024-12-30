import React from "react";
import { motion } from "framer-motion";
import { Avatar } from "@nextui-org/avatar";
import { FaBriefcase } from "react-icons/fa";

import { TExperience } from "@/src/types";

const ExperienceCard = ({
  companyLogo,
  companyName,
  designation,
  description,
  totalYears,
}: TExperience) => {
  return (
    <motion.div
      className="flex items-start gap-4 shadow-md rounded-lg p-6 transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {/* Icon/Logo */}
      <div className="w-24 h-24 flex-shrink-0 bg-gray-100 flex items-center justify-center rounded-full">
        <Avatar
          alt={`${companyName} Logo`}
          className="w-20 h-20 text-large"
          src={companyLogo}
        />
      </div>

      {/* Details */}
      <div>
        <h3 className="text-xl font-medium text-gray-800">{companyName}</h3>
        <p className="text-sm text-gray-500">{designation}</p>
        {/* <p className="text-gray-700 mt-2 leading-relaxed">{description}</p> */}
        <p className="text-gray-700 leading-relaxed">
          <span className="flex items-center">
            <FaBriefcase className="h-4 w-4 mr-3" />
            {totalYears} years Experience
          </span>
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="p-5 text-justify"
        />
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
