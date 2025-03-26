const Navbar = () => {
  return (
    <nav className="bg-gray-800/80 p-4 fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">YaferDev</h1>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          <li>
            <a
              href="#home"
              className="text-white uppercase hover:text-cyan-400 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white uppercase hover:text-cyan-400 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white uppercase hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className="text-white uppercase hover:text-cyan-400 transition-colors"
            >
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
