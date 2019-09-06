import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = props => {
  return (
    <nav className="menu">
      <ul className="nav__ul">
        <li className="nav__item">
          <NavLink
            className="nav__link"
            to="/search"
            activeClassName="selected"
          >
            Search
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className="nav__link"
            to="/history"
            activeClassName="selected"
          >
            History
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
