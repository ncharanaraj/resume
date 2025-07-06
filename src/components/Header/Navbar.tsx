const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <a href="#about" className="text-gray-200">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="text-gray-200">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="text-gray-200">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
