import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center min-h-screen p-6"
    >
      <div className="max-w-6xl text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-4">
          Yafer De Leon
        </h1>

        <p className="text-2xl md:text-4xl font-medium text-cyan-400 mb-4">
          I'm Yafer, a{" "}
          <Typewriter
            words={[
              "Web Developer",
              "Tech Support",
              "PC Builder",
              "Web3 Content Creator",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-6 py-3.5 text-center me-2 transition-all duration-200"
        >
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
