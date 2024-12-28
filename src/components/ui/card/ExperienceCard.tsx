import { TExperience } from "@/src/types";
import React from "react";
import { motion } from "framer-motion";
import { Avatar } from "@nextui-org/avatar";

const ExperienceCard = ({
    companyLogo,
    companyName,
    designation,
    description,
    totalYears,
    createdAt,
}: TExperience) => {
    return (

        <motion.div
            className="flex items-start gap-4 shadow-md rounded-lg p-6 transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Icon/Logo */}
            <div className="w-16 h-16 flex-shrink-0 bg-gray-100 flex items-center justify-center rounded-full">
                <Avatar
                    className="w-20 h-20 text-large"
                    src={companyLogo}
                    alt={`${companyName} Logo`}
                />
            </div>

            {/* Details */}
            <div>
                <h3 className="text-xl font-medium text-gray-800">{companyName}</h3>
                <p className="text-sm text-gray-500">{designation}</p>
                <p className="text-gray-700 mt-2 leading-relaxed">{description}</p>
                <p className="text-gray-700 mt-2 leading-relaxed">
                    <span className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16l-4-4m0 0l4-4m-4 4h16"
                            />
                        </svg>
                        {totalYears} years
                    </span>
                </p>
                <p className="text-gray-700 mt-2 leading-relaxed">
                    <span className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        {new Date(createdAt).toLocaleDateString()}
                    </span>
                </p>
            </div>
        </motion.div>
    );
};

export default ExperienceCard;

