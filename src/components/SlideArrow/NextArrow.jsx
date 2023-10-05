import React from "react";

import { AiOutlineRight } from "react-icons/ai";


function NextArrow({className, style, onClick}) {
    return (
       <div className="hidden xl:block">
          <div 
          className={`${className} absolute top-1/2 -translate-y-1/2 right-5 z-5 w-16 h-16 rounded-[5px] flex justify-center items-center bg-primary text-white `}
          onClick={onClick}
        > <AiOutlineRight size={25}/>
      
        </div>
       </div>
    );
  }

  export default NextArrow