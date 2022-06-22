import React, { useState, useEffect } from "react";
import axios from "axios";
const Newfile = () => {
  const [first, setfirst] = useState();
  const [second, setSecond] = useState([]);
  // {
  //   console.log("two");
  // }

  useEffect(() => {
    // console.log("THREE");
    getAnimal();
    // setfirst("useeffect");
  }, []);
  const getAnimal = () => {
    axios
      .get("https://anime-facts-rest-api.herokuapp.com/api/v1")
      .then((res) => {
        setSecond(res.data.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="grid grid-cols-4 gap-0">
      {/* {first} */}
      {/* {console.log("omne")} */}
      {second?.map((val, i) => {
        return (
          <div key={i} className=" w-full mb-20 h-full text-center ">
            <div className="h-80 w-56  m-auto bg-red-400  overflow-hidden m">
              <img
                src={val.anime_img}
                className="h-full w-full transition all duration-300  ease-in-out hover:scale-125"
                alt=""
              />
           
            </div>
            <div className="text-2xl text-blue-500 ">
              {val.anime_name}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Newfile;
