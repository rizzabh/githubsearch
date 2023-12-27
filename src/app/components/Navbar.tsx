"use strict";
import React, { useState } from "react";
import Repos from "./Repos";
import html2canvas from 'html2canvas';

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
      const res = await fetch(`https://api.github.com/users/rizzabh`);
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
          className="bg-gray-600 bg-opacity-20 hover:bg-gray-700 border border-gray-600 text-white font-medium py-2 px-4 rounded-xl cursor-pointer z-[9999]"
          onClick={toggleModal}
        >
          <div className="flex justify-center items-start">
            <img src="/badge.png" alt="" height={30} width={30} />
            <div className="ml-2 my-auto">Featured Devs</div>
          </div>
        </div>
      </div>
      {modal && (
        <div className="w-full h-full bg-gray-950 bg-opacity-60 backdrop-blur-md absolute top-0 z-[999]">
           <div className="items-center justify-center">
      <div id="capture" className="flex max-[433px]:flex-col max-[433px]:ml-7 mx-auto my-9 p-5 bg-gray-900  border border-gray-700 w-fit h-fit max-sm:mx-20 max-sm:w-10/12 max-sm:ml-10">
        <img
          src={user.avatar_url}
          alt={user.name}
          className="w-3/12 rounded-xl shadow-xl object-cover max-sm:mb-36 max-[476px]:mb-48 max-sm:w-40 max-[1079px]:w-48 max-[433px]:mb-2"
        />
        <div className="ml-6 max-[433px]:ml-2">
          <div className="text-4xl font-bold text-gray-200 max-sm:text-2xl mb-1">
            {user.name}
          </div>
          <div className="text-gray-400 text-md mb-1">@{user.login}</div>
          <div className="text-gray-400 text-lg mb-3 max-sm:text-sm">
            {user.bio ? user.bio : "-No Bio Provided-"}
          </div>
          <div className="flex mt-2 max-sm:flex-col">
            <div className="repos text-md mr-2 px-2 py-1 rounded-md bg-blue-700 bg-opacity-30 font-light text-blue-300 max-sm:text-xs w-fit">
              Public Repos: {user.public_repos}
            </div>
            <div className="text-md px-2 py-1 mr-2 rounded-md bg-green-700 bg-opacity-30 font-light text-green-300 max-sm:text-xs w-fit max-sm:mt-2">
              Followers: {user.followers}
            </div>
            <div className="text-md px-2 py-1 rounded-md bg-purple-700 bg-opacity-30 font-light text-purple-300 max-sm:text-xs max-sm:mt-2 w-fit">
              Following: {user.following}
            </div>
          </div>
          <div className="mt-2 text-gray-400 px-2 py-1 w-fit rounded-md bg-gray-800 max-sm:text-xs ">
            Website:{" "}
            <a href={user.blog} className="bold" target="_blank">
              {user.blog ? user.blog : "No Website Provided"}
            </a>
          </div>
          <div data-html2canvas-ignore="true" className="mt-4 text-md flex px-2 py-2 rounded-md w-fit  max-sm:-ml-14 max-[440px]:-ml-24 max-[433px]:ml-0">
            <a
              href={user.html_url}
              target="_blank"
              className="text-md font-normal bg-gray-900 bg-opacity-50 hover:bg-opacity-100"
            >
              View Profile
            </a>
            <img src="/arrow.svg" alt="" height={30} width={25} />
          </div>
        </div>
        <div></div>
        
      </div>
      <div className="flex text-center px-2 py-1 border w-fit mx-auto border-gray-700 rounded-md text-gray-400 cursor-pointer hover:bg-gray-800"  onClick={() => {
            html2canvas(document.querySelector("#capture")!, { imageTimeout: 20000, proxy:user.avatar_url }).then(canvas => {
              var link = document.createElement('a');
              link.download = `${user.name}.png`;
              link.href = canvas.toDataURL()
              
              link.click();
            });
          }}>
          Download as .png <img src="/down.svg" alt="" className="ml-1" height={30} width={25}/>
        </div>
      
      
    </div>
        
        </div>
      )}
    </div>
  );
};

export default Navbar;
