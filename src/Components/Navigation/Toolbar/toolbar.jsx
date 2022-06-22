import React,{useState} from "react";
import Side from "../Sidebar/sidebar";
// import { navData } from "../navData";
// import { NavLink } from "react-router-dom";
import NavItems from "../navItems/navItems";
const Toolbar = () => {
  const [Sidebar,setSidebar] = useState(false);
  let model ;
  if (Sidebar){
    model =(
      <div onClick={()=>setSidebar(false)
      }
      style={{
        background: "rgba(0,0,0,0.5)",
      }}
      className="w-full h-screen z-20 absolute">
        <Side/>
      </div>
    )
  }
  return (
    <div className="grid grid-cols-2 bg-blue-200  w-full">
      {model}
      <div onClick={()=>setSidebar(true)} className="bg-red-300 cursor-pointer">Logo</div>
      <div>
       <NavItems />
      </div>
    </div>
  );
};

export default Toolbar;
