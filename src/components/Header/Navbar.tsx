import { SunMedium } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 space-x-4">
      <ul className="flex space-x-4">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
      </ul>
      <button>
        <SunMedium />
      </button>
    </nav>
  );
};

export default Navbar;
