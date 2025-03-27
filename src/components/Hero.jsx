import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center min-h-screen p-6"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl text-center mt-16 md:text-left"
      >
        <h1 className="text-5xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent tracking-wide drop-shadow-md">
          Yafer De Leon
        </h1>
        <p className="text-xl md:text-3xl font-bold text-white text-center md:text-left mb-4">
          I'm Yafer,{" "}
          <span className="text-cyan-400">
            <Typewriter
              words={[
                "a Web Developer",
                "a Tech Support",
                "a PC Builder",
                "a Content Creator",
                "an Airdrop Hunter",
                "a Crypto Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="[]"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1200}
            />
          </span>
        </p>

        <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-full shadow-md hover:shadow-purple-600/50 hover:shadow-lg transition-all duration-200 ease-in-out">
          Download Resume
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
