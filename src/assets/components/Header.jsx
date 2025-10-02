import { useState } from "react";
import logo from "../images/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-gray-900 h-[70px] px-6 flex items-center justify-between">
      <div className="logo absolute left-6">
        <img src={logo} alt="logo" className="h-10 drop-shadow-lg" />
      </div>

      <nav className="hidden md:block mx-auto">
        <ul className="flex space-x-8 font-semibold text-white">
          <li><a href="#about-me">About me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </nav>

      <div
        className="md:hidden cursor-pointer text-2xl absolute right-6 text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full md:hidden z-10 bg-white text-black">
          <ul className="flex flex-col items-center space-y-4 py-5">
            <li><a href="#about-me" onClick={() => setMenuOpen(false)}>About me</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
