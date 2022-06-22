import React from "react";
import { navData } from "../navData";
import NavItem from "../navItem/navItem";
const NavItems = ({from}) => {
  return (
    <div className={`flex ${from==='sidebar'?'flex-col':null} justify-evenly`}>
      {navData?.map((val, i) => {
        return (
          <div key={i} className='bg-green-300 flex' >
            <NavItem  path={val.path} title={val.title}/>
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;
