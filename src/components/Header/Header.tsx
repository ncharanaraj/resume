import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="h-16">
      <div className="flex items-center justify-between h-full">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
