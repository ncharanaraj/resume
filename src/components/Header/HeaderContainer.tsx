import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="h-16 sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between h-full">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
