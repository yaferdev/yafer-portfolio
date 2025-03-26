const Contact = () => {
  return (
    <section
      id="contacts"
      className="flex flex-col justify-center items-center min-h-screen p-6"
    >
      <div className="w-full max-w-4xl mt-16 text-center">
        <h2 className="text-4xl font-bold md:font-extrabold mb-8 text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-center uppercase">
          Let's Connect
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Have a project in mind? Let’s collaborate and build something amazing
          together!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Left Section (Chat Info + Email) */}
        <div className="flex flex-col items-center space-y-6 w-full md:flex md:items-start md:justify-center">
          <h3 className="text-2xl font-semibold text-white">
            Let's talk about your ideas.
          </h3>

          {/* Email Box */}
          <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4 w-full shadow-md">
            <div className="bg-gray-700 p-3 rounded">📩</div>
            <p className="text-gray-300 text-sm">
              Email me at <br />
              <span className="text-blue-400 font-semibold">
                dev.yafer@gmail.com
              </span>
            </p>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4 text-white md:text-left">
            Send me a message 🚀
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full name*"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email address*"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Tell me more about your project*"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
            <button className="w-full p-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-md">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
