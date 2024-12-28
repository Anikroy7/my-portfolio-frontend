import { motion } from "framer-motion";

const ExperienceCard = ({ companyLogo, companyName, totalYears, designation, description }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-6 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logo */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={companyLogo}
          alt={`${companyName} Logo`}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Details */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold text-gray-900">{companyName}</h3>
        <p className="text-sm text-gray-600">{totalYears}</p>
        <p className="text-lg text-gray-800 mt-1 font-medium">{designation}</p>
        <p className="text-gray-700 mt-2 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      companyName: "Tech Innovators Inc.",
      companyLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzCbUtfE0UZLle6mTntx8zFvmcDHJIOxLojnkBFGxznPwt6Lc5aSKsOkAgCIzOBz1G-g&usqp=CAU",
      totalYears: "3 years",
      designation: "Software Engineer",
      description: "Worked on developing and maintaining scalable web applications.",
    },
    
  ];

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
          My Experience
        </motion.h2>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
