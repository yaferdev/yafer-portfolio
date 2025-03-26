const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of the project.",
      image: "https://placehold.co/600x400", // Replace with actual image URL
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
  ];

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center min-h-screen p-6"
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-extrabold mb-8 text-center text-cyan-400 uppercase">
          A Look At My Creations
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
