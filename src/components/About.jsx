"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";

const techIcons = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
  { icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
  { icon: <SiTailwindcss className="text-blue-400" />, name: "Tailwind CSS" },
  { icon: <SiBootstrap className="text-purple-500" />, name: "Bootstrap" },
  { icon: <FaPhp className="text-blue-600" />, name: "PHP" },
  { icon: <FaDatabase className="text-green-500" />, name: "MySQL" },
];

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center min-h-screen p-4 mt-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.3 }} // Delay per child animation
        className="max-w-6xl text-center mt-16 md:text-left"
      >
        {/* TITLE */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold md:font-extrabold mb-8 text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-center uppercase"
        >
          Who’s Behind the Code?
        </motion.h2>

        {/* TEXT PARAGRAPHS */}
        {[
          "Hi, I'm Yafer, a passionate Web Developer with a background in IT Support. I have two years of experience as an IT Support Assistant at the Manila International Airport Authority, where I developed strong problem-solving skills.",
          "I specialize in HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, PHP, and MySQL. My goal is to transition into a full-time Web Developer role, focusing on building modern, user-friendly applications.",
          "I’m always learning and keeping up with the latest web technologies to create high-quality, efficient projects.",
        ].map((text, index) => (
          <motion.p
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            className="text-gray-300 text-lg leading-relaxed mb-6 md:text-left"
          >
            {text}
          </motion.p>
        ))}

        {/* SKILL ICONS (STAGGERED) */}
        <motion.div
          className="grid grid-cols-4 md:grid-cols-8 gap-6 justify-center items-center text-5xl md:text-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }} // Staggered effect for icons
        >
          {techIcons.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="flex flex-col items-center"
            >
              {item.icon}
              <span className="text-sm text-gray-400 mt-2">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
