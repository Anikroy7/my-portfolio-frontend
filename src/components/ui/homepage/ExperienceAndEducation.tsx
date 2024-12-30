"use client";

import { motion } from "framer-motion";

import Loading from "../shared/Loading";
import Education from "../card/EducaitonCard";
import ExperienceCard from "../card/ExperienceCard";

import { useGetAllExperiences } from "@/src/hooks/experience.hook";
import { TExperience } from "@/src/types";
import { education } from "@/src/app/constant";

const ExperienceEducation = () => {
  const { data, isPending } = useGetAllExperiences();

  if (isPending) return <Loading />;
  const experiences = data?.data || [];

  return (
    <section className="py-16" id="experience">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My Experience & Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Education key={index} {...edu} />
              ))}
            </div>
          </div>
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp: TExperience) => (
                <ExperienceCard key={exp.id} {...exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
