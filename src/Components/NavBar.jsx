import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Logo from "../Assets/Images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <nav className="flex align-middle justify-between bg-blue-500">
      <div className="nav-logo relative">
        <NavLink to="/home">
          <img
            src={Logo}
            alt="logo"
            className="w-20 h-20 mix-blend-multiply cursor-pointer"
          />
        </NavLink>
      </div>

      <div className="nav-links hidden sm:hidden md:flex justify-center">
        <ul className="flex items-center justify-center gap-6 p-4">
          <li className="flex items-center justify-center cursor-pointer">
            <NavLink
              to="/home"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-white"
                  : "hover:underline"
              }
            >
              <HomeIcon />
              Home
            </NavLink>
          </li>
          <li className="flex items-center justify-center cursor-pointer">
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-white"
                  : "hover:underline"
              }
            >
              <InfoIcon />
              About
            </NavLink>
          </li>
          <li className="flex items-center justify-center cursor-pointer">
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-white"
                  : "hover:underline"
              }
            >
              <ContactPageIcon />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center mr-4 md:hidden sm:flex">
        <span className="cursor-pointer" onClick={handleClick}>
          <MenuIcon />
        </span>
      </div>

      <div
        className={`absolute right-0 top-20 ${
          isHidden ? "flex" : "hidden"
        } md:hidden`}
      >
        <ul className="bg-blue-200 p-4">
          <li className="mb-4 cursor-pointer" onClick={handleClick}>
            <NavLink
              to="/home"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-white"
                  : "hover:underline"
              }
            >
              <HomeIcon />
              Home
            </NavLink>
          </li>
          <li className="mb-4 cursor-pointer" onClick={handleClick}>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-white"
                  : "hover:underline"
              }
            >
              <InfoIcon />
              About
            </NavLink>
          </li>
          <li className="mb-4 cursor-pointer" onClick={handleClick}>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-white"
                  : "hover:underline"
              }
            >
              <ContactPageIcon />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
