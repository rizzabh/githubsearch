import React from "react";

const Navbar = () => {
  return (
    <div className="content-between p-6 sm:px-16 flex justify-between items-center">
      <div><a href="https://github.com/rizzabh" className="flex"><img src="/github.svg" className="mr-1" alt="" height={30} width={30} /><div className="text-xl font-bold cursor-pointer">rizzabh</div></a> </div>
      <div className="bg-gray-600 bg-opacity-20 hover:bg-gray-700 border border-gray-600 text-white font-medium py-2 px-4 rounded-xl cursor-pointer">Search History</div>
    </div>
  );
};

export default Navbar;
