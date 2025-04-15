import { useState } from "react";
import Logo from "../assets/SVG/Logo.svg"; // Replace with actual path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-6 md:px-12 py-4 shadow-md flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-bold text-sm">
        <a className="hover:text-[#234394] transition-colors duration-200 cursor-pointer">Home</a>
        <a className="hover:text-[#234394] transition-colors duration-200 cursor-pointer">For Children & Adolescents</a>
        <a className="hover:text-[#234394] transition-colors duration-200 cursor-pointer">For Adults</a>
        <a className="hover:text-[#234394] transition-colors duration-200 cursor-pointer">For Businesses</a>
        <a className="hover:text-[#234394] transition-colors duration-200 cursor-pointer">Media & News</a>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <button className="bg-[#234394] text-white px-4 py-2 rounded-full cursor-pointer">
          Book a Consultation
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-30">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md px-6 py-6 flex flex-col space-y-4 text-gray-700 font-bold text-sm transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a onClick={() => setIsOpen(false)} className="hover:text-[#234394] cursor-pointer">Home</a>
        <a onClick={() => setIsOpen(false)} className="hover:text-[#234394] cursor-pointer">For Children & Adolescents</a>
        <a onClick={() => setIsOpen(false)} className="hover:text-[#234394] cursor-pointer">For Adults</a>
        <a onClick={() => setIsOpen(false)} className="hover:text-[#234394] cursor-pointer">For Businesses</a>
        <a onClick={() => setIsOpen(false)} className="hover:text-[#234394] cursor-pointer">Media & News</a>
        <button className="bg-[#234394] text-white px-4 py-2 rounded-full mt-2">
          Book a Consultation
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
