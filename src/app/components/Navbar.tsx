import React from "react";

const Navbar = () => {
  return (
    <div className="content-between p-6 sm:px-16 flex justify-between items-center">
      <span className="text-xl font-bold cursor-pointer">rizzabh</span> 
      <div className="bg-gray-600 bg-opacity-30 hover:bg-gray-700 border border-gray-600 text-white font-medium py-2 px-4 rounded-xl cursor-pointer">Search History</div>
    </div>
  );
};

export default Navbar;
