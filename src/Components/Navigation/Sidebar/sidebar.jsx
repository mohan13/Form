import React from "react";
import NavItems from "../navItems/navItems";
const Sidebar = () => {
  return (
    
      <div className="flex bg-red-300 w-60 h-screen" >
        {/* {navData?.map((val, i) => {
          return (
            <div key={i} className=" grid place-content-center text-center font-lg bg-green-500 hover:bg-white hover:font-red-300 " >
              <NavLink to={val.path}>{val.title}</NavLink>
            </div>
          );
        })} */}
        <NavItems from='sidebar'/>
      </div>
  );
};

export default Sidebar;
