import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center min-h-screen p-6"
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-5xl font-extrabold mb-8 text-cyan-400 text-center uppercase">
          Who’s Behind the Code?
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Hi, I'm <span className="font-semibold text-white">Yafer</span>, a
          passionate Web Developer with a background in IT Support. I have two
          years of experience as an IT Support Assistant at the{" "}
          <span className="text-white font-semibold">
            Manila International Airport Authority
          </span>
          , where I developed strong problem-solving skills.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          I specialize in{" "}
          <span className="text-yellow-500 font-semibold">
            HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, PHP, and
            MySQL
          </span>
          . My goal is to transition into a full-time Web Developer role,
          focusing on building modern, user-friendly applications.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          I’m always learning and keeping up with the latest web technologies to
          create high-quality, efficient projects.
        </p>

        {/* SKILL ICONS */}
        <div className="flex flex-wrap justify-center gap-6">
          <FaHtml5 className="text-orange-500 text-6xl hover:scale-110 transition-transform" />
          <FaCss3Alt className="text-blue-500 text-6xl hover:scale-110 transition-transform" />
          <FaJs className="text-yellow-500 text-6xl hover:scale-110 transition-transform" />
          <FaReact className="text-cyan-400 text-6xl hover:scale-110 transition-transform" />
          <SiTailwindcss className="text-blue-400 text-6xl hover:scale-110 transition-transform" />
          <SiBootstrap className="text-purple-500 text-6xl hover:scale-110 transition-transform" />
          <FaPhp className="text-blue-600 text-6xl hover:scale-110 transition-transform" />
          <FaDatabase className="text-green-500 text-6xl hover:scale-110 transition-transform" />
        </div>
      </div>
    </section>
  );
};

export default About;
