"use client";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Link from "next/link";

const Repos = ({ reposUrl }) => {
  const [repos, setRepos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(reposUrl);
        const data = await res.json();
        console.log(data);
        setRepos(data);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
    fetchRepos();
  }, [reposUrl]);
  return (
    <div className="justify-center items-center mt-10 mb-96">
      <div>
        <Toaster />
      </div>
      <div className="text-4xl font-semibold text-center mt-20 mb-10 max-sm:text-3xl">
        {" "}
        User Repositories
      </div>
      <div className="grid grid-cols-3 gap-1 lg:mx-64 max-sm:mx-10 max-md:mx-15 max-md:grid-cols-2">
        {repos
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .map((repo, i) => {
            if (i > 5 && !show) return null;
            return (
              <div
                key={repo.id}
                className="px-4 py-3 bg-transparent border border-gray-700 rounded-md w-11/12 mx-auto hover:bg-gray-800 transition-all ease-in mb-4"
              >
                <Link
                  href={repo.html_url}
                  className="text-lg font-bold hover:underline max-md:text-sm"
                >
                  {repo.name}
                </Link>
                {repo.fork ? (
                  <div className="text-sm font-light text-gray-400 max-sm:text-xs">
                    Forked
                  </div>
                ) : null}
                <div
                  className={`text-md mr-2 px-2 py-1 rounded-md bg-blue-700 bg-opacity-30 font-light text-blue-300 max-sm:text-xs w-fit mt-2 ${
                    !repo.language && "bg-red-800 text-red-600"
                  } `}
                >
                  {repo.language ? repo.language : "No language Detected"}
                </div>
              </div>
            );
          })}
        {show && (
          <div
            className="p-2 bg-gray-700 bg-opacity-50 border m-8 border-gray-600 rounded-full text-md h-fit w-fit px-4 text-center max-sm:text-sm text-gray-400 cursor-pointer"
            onClick={() => setShow(false)}
          >
            Show Less
          </div>
        )}
        {!show && repos.length > 5 && (
          <div
            className="p-2 bg-gray-700 bg-opacity-50 border m-8 border-gray-600 rounded-full text-md h-fit w-fit px-4 text-center max-sm:text-sm text-gray-400 cursor-pointer"
            onClick={() => setShow(true)}
          >
            Show More
          </div>
        )}
      </div>
    </div>
  );
};

export default Repos;
