import {
  FaFacebook,
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contacts"
      className="flex flex-col justify-center items-center min-h-screen p-6"
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-extrabold mb-8 text-center text-cyan-400 uppercase">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8 w-full items-center">
          {/* Left Section (Chat Info + Email + Socials) */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="text-3xl font-semibold mb-4 text-white">
              Let's chat. <br /> Tell me about your project.
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              Let’s create something together! 🚀
            </p>

            {/* Contact Info */}
            <div className="space-y-4 w-full">
              {/* Email Box */}
              <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4 w-full">
                <div className="bg-gray-700 p-3 rounded">📅</div>
                <p className="text-gray-300">
                  Mail me at <br />
                  <span className="text-blue-400 font-semibold">
                    dev.yafer@gmail.com
                  </span>
                </p>
              </div>

              {/* Phone Number Box */}
              <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4 w-full">
                <div className="bg-gray-700 p-3 rounded">📞</div>
                <p className="text-gray-300">
                  Call me at <br />
                  <span className="text-blue-400 font-semibold">
                    +63 912 802 3499
                  </span>
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-blue-500 text-3xl hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="text-white text-3xl hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-blue-400 text-3xl hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-red-500 text-3xl hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-600 text-3xl hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Section: Form */}
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-white">
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
      </div>
    </section>
  );
};

export default Contact;
