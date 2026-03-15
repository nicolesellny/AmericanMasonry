import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navClass = ({ isActive }: { isActive: boolean }) =>
  `p-1 rounded-full hover:bg-primary/5 hover:backdrop-blur-md ${isActive ? "bg-primary/10" : ""}`;

const NavLinks = () => {
  return (
    <>
      <NavLink to="/about" className={navClass}>
        About
      </NavLink>
      <NavLink to="/our-work" className={navClass}>
        Projects
      </NavLink>
      <NavLink to="/services" className={navClass}>
        Services
      </NavLink>
      <NavLink to="/contact" className={navClass}>
        Contact
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="w-1/3 flex justify-end items-center">
        <div></div>
        <div className="hidden w-full md:flex justify-between">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
