import {
  FaFacebook,
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-center md:text-left gap-4">
        <p className="text-sm">© 2025 YaferDev. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-blue-500 md:text-gray-400 md:hover:text-blue-500 transition"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-blue-400 md:text-gray-400 md:hover:text-blue-400 transition"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tiktok"
            className="text-white md:text-gray-400 md:hover:text-white transition"
          >
            <FaTiktok className="text-2xl" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube"
            className="text-red-500 md:text-gray-400 md:hover:text-red-500 transition"
          >
            <FaYoutube className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-600 md:text-gray-400 md:hover:text-blue-600 transition"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
