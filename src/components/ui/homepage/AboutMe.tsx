import { motion } from "framer-motion";
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section>
      <div className="container mx-auto px-6" id="about">
        {/* About and Experience Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* About Section */}
          <motion.div
            ref={ref}
            animate={inView ? { opacity: 1, visibility: "visible", x: 0 } : {}}
            className="space-y-6"
            initial={{ opacity: 0, visibility: "hidden", x: -20 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-semibold text-gray-900">Who I Am</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I’m a <strong>Full-Stack Engineer</strong> passionate about
              building impactful digital experiences. With expertise in
              technologies such as
              <span className="text-gray-900 font-medium">
                React, Next.js, Node.js, MongoDB, and PHP
              </span>
              , I specialize in creating solutions that are scalable,
              user-centric, and aligned with business needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I thrive in collaborative environments and enjoy mentoring
              developers while contributing to open-source projects. My approach
              to development focuses on innovation, problem-solving, and
              delivering measurable results.
            </p>
          </motion.div>

          {/* Experience Section */}
          {/* Connect Me Section */}
          <motion.div
            animate={inView ? { opacity: 1, visibility: "visible", y: 0 } : {}}
            className=" "
            initial={{ opacity: 0, visibility: "hidden", y: 20 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Connect With Me
            </h2>
            <div className="flex justify-center gap-6 mb-8">
              {/* Social Icons */}
              <a
                className="text-gray-700 hover:text-gray-900 text-3xl"
                href="mailto:anikkumerroy7@gmail.com"
              >
                <AiOutlineMail />
              </a>

              <a
                className="text-gray-700 hover:text-gray-900 text-3xl"
                href="https://github.com/Anikroy7"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillGithub />
              </a>
              <a
                className="text-gray-700 hover:text-gray-900 text-3xl"
                href="https://www.linkedin.com/in/anik-roy-a14185241"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a
                className="text-gray-700 hover:text-gray-900 text-3xl"
                href="https://wa.me/01786335131"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineWhatsApp />
              </a>
              <a
                className="text-gray-700 hover:text-gray-900 text-3xl"
                href="https://www.facebook.com/anik.roy.56100"
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </div>

            <div className="text-center mt-8">
              <h3 className="text-xl font-semibold text-gray-900">
                When I&apos;m Not Coding...
              </h3>
              <p className="text-lg text-gray-700 mt-4">
                I&apos;m also a guitarist and drummer, and I play in a band
                called
                <strong>&quot;Flame of Anthem.&quot;</strong> You can check out
                our music and follow us on our
                <a
                  className="text-blue-600 hover:underline"
                  href="https://www.youtube.com/@flameofanthem901"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  YouTube channel.
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
