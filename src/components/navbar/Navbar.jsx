import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">Logo</NavLink>
      </div>
      <nav>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
      </nav>
    </header>
  );
};
