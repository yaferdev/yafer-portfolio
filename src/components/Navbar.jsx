import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Disable scrolling when menu is open
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <nav className="bg-gray-800/80 p-4 fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">YaferDev</h1>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-gray-900/90 flex flex-col items-center justify-center gap-6 transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } md:static md:w-auto md:bg-transparent md:flex md:flex-row md:translate-y-0`}
        >
          {["Home", "About", "Projects", "Contacts"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white text-2xl md:text-base uppercase hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
