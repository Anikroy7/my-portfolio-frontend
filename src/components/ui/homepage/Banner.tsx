import { Button } from "@nextui-org/button";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion";

const Banner = () => {
  const text = "Full-Stack Engineer.";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <div className="relative">
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
          <Image
            alt="Profile"
            height={128}
            src="https://avatars.githubusercontent.com/u/96816764?v=4"
            width={128}
          />
        </div>

        {/* Floating Name Tag */}
        <motion.div
          animate={{
            x: [80, 74, 80],
          }}
          className="absolute -top-2 transform translate-x-20 bg-white rounded-full shadow px-4 py-2 flex items-center gap-2"
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <span className="text-gray-700 font-semibold">Anik Roy</span>
          <span>👋</span>
        </motion.div>
      </div>
      <h1 className="mt-6 text-4xl font-bold text-gray-900 leading-tight">
        Hello, I’m a <br />
        <motion.span
          animate={{ opacity: 1 }}
          className="text-gray-700"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <motion.span
            animate={{ width: "auto" }}
            initial={{ width: 0 }}
            style={{
              display: "inline-block",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            {text}
          </motion.span>
        </motion.span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        Full-Stack Developer skilled in creating seamless front-end designs and
        robust back-end systems. Proficient in React, Next js, Node.js, and
        scalable database solutions.
      </p>

      {/* Call-to-Action Button */}
      <a download href="/resume/my-resume.pdf">
        <Button
          className="mt-6 bg-black text-white hover:bg-gray-800 flex items-center gap-2"
          radius="lg"
          size="lg"
        >
          <AiOutlineDownload className="w-5 h-5" />
          Download CV
        </Button>
      </a>
    </div>
  );
};

export default Banner;
