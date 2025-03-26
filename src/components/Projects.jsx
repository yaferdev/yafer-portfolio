const Projects = () => {
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

  return (
    <section
      id="projects"
      className="flex flex-col items-center min-h-screen p-4"
    >
      <div className="w-full max-w-6xl mt-16 text-center">
        <h2 className="text-4xl font-bold md:font-extrabold mb-8 text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-center uppercase">
          Explore My Work
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Here are some of my projects showcasing my skills in web development.
          Each project highlights different aspects of my coding abilities and
          creativity.
        </p>
        {/* Responsive Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
