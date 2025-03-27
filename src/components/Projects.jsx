"use client";
import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of the project.",
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of the project.",
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of the project.",
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A brief description of the project.",
    image: "https://placehold.co/600x400",
  },
  {
    id: 5,
    title: "Project Five",
    description: "A brief description of the project.",
    image: "https://placehold.co/600x400",
  },
  {
    id: 6,
    title: "Project Six",
    description: "A brief description of the project.",
    image: "https://placehold.co/600x400",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center min-h-screen p-4"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.4 }}
        className="w-full max-w-6xl mt-16 text-center"
      >
        {/* TITLE */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl font-bold md:font-extrabold mb-8 text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-center uppercase"
        >
          Explore My Work
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Here are some of my projects showcasing my skills in web development.
          Each project highlights different aspects of my coding abilities and
          creativity.
        </motion.p>

        {/* PROJECT GRID (Staggered animation) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.3 }}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2, // Stagger effect per project
              }}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
