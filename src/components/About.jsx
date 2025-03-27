import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";
import { motion } from "framer-motion";

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
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl text-center mt-16 md:text-left"
      >
        <h2 className="text-4xl font-bold md:font-extrabold mb-8 text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-center uppercase">
          Who’s Behind the Code?
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-6 md:text-left">
          Hi, I'm <span className="font-semibold text-white">Yafer</span>, a
          passionate Web Developer with a background in IT Support. I have two
          years of experience as an IT Support Assistant at the{" "}
          <span className="text-white font-semibold">
            Manila International Airport Authority
          </span>
          , where I developed strong problem-solving skills.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-6 md:text-left">
          I specialize in{" "}
          <span className="text-yellow-500 font-semibold">
            HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, PHP, and
            MySQL
          </span>
          . My goal is to transition into a full-time Web Developer role,
          focusing on building modern, user-friendly applications.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-8 md:text-left">
          I’m always learning and keeping up with the latest web technologies to
          create high-quality, efficient projects.
        </p>

        {/* STATIC SKILL ICONS GRID (NO HOVER EFFECTS) */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 justify-center items-center text-5xl md:text-6xl">
          {techIcons.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {item.icon}
              <span className="text-sm text-gray-400 mt-2">{item.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
