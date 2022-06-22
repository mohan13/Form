import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ path, title }) => {
  return (
    <div   >
      <NavLink to={path}>{title}</NavLink>
    </div>
  );
};

export default NavItem;
