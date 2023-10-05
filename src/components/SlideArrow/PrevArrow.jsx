import React, { useState } from "react";

import { AiOutlineLeft } from "react-icons/ai";

function PrevArrow({className, onClick}) {
    
    return (
      <div className="hidden xl:block">
        <div
        className={`${className} absolute top-1/2 -translate-y-1/2 left-5 z-30 w-16 h-16 rounded-[5px] flex justify-center items-center bg-primary text-white `}
        onClick={onClick}
      >    <AiOutlineLeft  size={25}/>
     
      </div>
      </div>
    );
  }

  export default PrevArrow