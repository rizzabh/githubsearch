"use strict";
import React, { useState } from "react";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  return (
    <div className="">
    <div className="content-between p-6 sm:px-16 flex justify-between items-center">
      <div><a href="https://github.com/rizzabh" className="flex"><img src="/github.svg" className="mr-1" alt="" height={30} width={30} /><div className="text-xl font-bold cursor-pointer">rizzabh</div></a> </div>
      <div className="bg-gray-600 bg-opacity-20 hover:bg-gray-700 border border-gray-600 text-white font-medium py-2 px-4 rounded-xl cursor-pointer" onClick={toggleModal}>Search History</div>
      
    </div>
    {modal && <div className="modal p-4 bg-gray-800 left-1/4 rounded-md border shadow-2xl backdrop-blur-lg bg-opacity-40 border-gray-700 z-10 w-6/12 m-auto absolute h-80">
      <div className="flex justify-between"><div className="text-2xl font-semibold">Search History</div><div className="bg-gray-600 bg-opacity-20 hover:bg-gray-700 border border-gray-600 px-2 py-1 rounded-lg cursor-pointer h-fit w-fit" onClick={toggleModal}>close</div></div>
      <div className="text-gray-400">Working on this sorry, Learning about Local storage and Session Storage. I will implement this as soon as im free</div>
    </div>


      }
    </div>
  );
};

export default Navbar;
