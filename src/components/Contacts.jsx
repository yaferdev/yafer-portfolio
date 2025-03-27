"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contacts"
      className="flex flex-col justify-center items-center min-h-screen p-6"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.4 }}
        className="w-full max-w-4xl mt-16 text-center"
      >
        {/* Title */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl font-bold md:font-extrabold mb-8 text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-center uppercase"
        >
          Let's Connect
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="text-gray-300 text-lg mb-8"
        >
          Have a project in mind? Let’s collaborate and build something amazing
          together!
        </motion.p>
      </motion.div>

      {/* Contact Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left Section (Chat Info + Email) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-6 w-full md:flex md:items-start md:justify-center"
        >
          <h3 className="text-2xl font-semibold text-white">
            Let's talk about your ideas.
          </h3>

          {/* Email Box */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-gray-800 p-4 rounded-lg flex items-center gap-4 w-full shadow-md"
          >
            <div className="bg-gray-700 p-3 rounded">📩</div>
            <p className="text-gray-300 text-sm">
              Email me at <br />
              <span className="text-blue-400 font-semibold">
                dev.yafer@gmail.com
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* Right Section: Form */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white md:text-left">
            Send me a message 🚀
          </h3>
          <form className="space-y-4">
            <motion.input
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              type="text"
              placeholder="Full name*"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.input
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              type="email"
              placeholder="Email address*"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.textarea
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              placeholder="Tell me more about your project*"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></motion.textarea>
            <motion.button
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="w-full p-3 bg-blue-600 hover:bg-blue-700 transition transform hover:scale-105 text-white font-semibold rounded-md"
            >
              Send message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
