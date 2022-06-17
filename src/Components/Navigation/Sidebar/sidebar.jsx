import React from "react";
import { navData } from "../navData";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    
      <div className="grid bg-red-300 w-60 h-screen" >
        {navData?.map((val, i) => {
          return (
            <div key={i} className="flex flex-cols justify-center bg-green-500  " >
              <NavLink to={val.path}>{val.title}</NavLink>
            </div>
          );
        })}
      </div>
  );
};

export default Sidebar;
