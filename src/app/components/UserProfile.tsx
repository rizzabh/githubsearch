import React from "react";
interface UserProfileProps {
  user: {
    avatar_url: string;
    name: string;
    public_repos: number;
    bio: string;
    followers: number;
    html_url: string;
    following: number;
  };
}

const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <>
    <div className="flex mx-auto my-9 p-5 bg-gray-700 bg-opacity-30 border border-gray-700 rounded-lg w-fit h-fit max-sm:mx-20 max-sm:w-10/12 max-sm:ml-10">
      <img
        src={user.avatar_url}
        alt={user.name}
        className="w-3/12 rounded-xl shadow-xl object-cover max-sm:mb-24 max-sm:w-40 max-[1079px]:w-48"
      />
      <div className="ml-6">
        <div className="text-4xl font-bold text-gray-200 max-sm:text-2xl mb-1">
          {user.name}
        </div>
        <div className="text-gray-400 text-md mb-1">@{user.name}</div>
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
        <div className="mt-6 text-md flex px-2 py-2 rounded-md border border-gray-500 hover:bg-gray-900 w-fit  max-sm:-ml-14" >
          <a href={user.html_url} target="_blank" className="text-md font-normal">View Profile</a> 
          <img src="/arrow.svg" alt="" height={30} width={25}/>
        </div>
      </div>

    </div>
    
    </>
  );
};

export default UserProfile;
