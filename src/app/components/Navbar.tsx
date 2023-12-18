"use strict";
import React, { useState } from "react";
interface UserProfileProps {
  user: {
    avatar_url: string;
    name: string;
    public_repos: number;
    bio: string;
    followers: number;
    html_url: string;
    following: number;
    blog: string;
    login: string;
    repos_url: string;
  };
}
const Navbar = ({ user }: UserProfileProps) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  //randomly fetching users from github api
  const fetchUsers = async () => {
     try {
      const res = await fetch(`https://api.github.com/users?since=${Math.floor(Math.random() * 100)}`);
      const data = await res.json();
      console.log(data);
     }
      catch(err){
        console.log(err);
      }
  };
  return (
    <div className="">
      <div className="content-between p-6 sm:px-16 flex justify-between items-center">
        <div>
          <a href="https://github.com/rizzabh" className="flex">
            <img
              src="/github.svg"
              className="mr-1"
              alt=""
              height={30}
              width={30}
            />
            <div className="text-xl font-bold cursor-pointer">rizzabh</div>
          </a>{" "}
        </div>
        <div
          className="bg-gray-600 bg-opacity-20 hover:bg-gray-700 border border-gray-600 text-white font-medium py-2 px-4 rounded-xl cursor-pointer"
          onClick={toggleModal}
        >
          <div className="flex justify-center items-start">
            <img src="/badge.png" alt="" height={30} width={30} />
            <div className="ml-2 my-auto">Featured Devs</div>
          </div>
        </div>
      </div>
      {modal && (
        <div className="modal p-4 bg-gray-950 left-1/4 rounded-md border shadow-2xl backdrop-blur-lg bg-opacity-40 border-gray-800 z-10 w-6/12 m-auto absolute h-80">
          <div className="flex justify-between mb-4">
            <div className="text-2xl font-semibold">Featured User</div>
            <div
              className="bg-gray-600 bg-opacity-20 hover:bg-gray-700 border border-gray-600 px-2 py-1 rounded-lg cursor-pointer h-fit w-fit"
              onClick={toggleModal}
            >
              <img src="/cross.svg" alt="cross" />
            </div>
          </div>
          {/* showing the avatar url name and total number of contributions fetched users in this modal */}
          <div className="flex justify-between mt-2">
            <div className="w-11/12 px-2 py-1 h-fit bg-gray-900 rounded-md mx-auto">
              <img
                src="https://avatars.githubusercontent.com/u/1?v=4"
                alt=""
                className="w-1/4 rounded-full mx-auto"
              />
              <div className="text-center text-gray-400 text-sm mt-2">
                <div className="font-semibold">mojombo</div>
                <div className="font-light">Total Contributions: 1,000,000</div>
              </div>

            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
