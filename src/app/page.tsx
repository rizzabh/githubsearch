"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import UserProfile from "./components/UserProfile";

export default function Home() {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);
  console.log(user);

  return (
    <main className="min-h-screen ">
      {user? <Navbar user={user} /> : <Navbar user={{
        avatar_url: "",
        name: "",
        public_repos: 0,
        bio: "",
        followers: 0,
        html_url: "",
        following: 0,
        blog: "",
        login: "",
        repos_url: ""
      }} />}
      <Searchbar setUser={(res: any) => setUser(res)} setLoader={setLoader} />
      {user && <UserProfile user={user} />}
    </main>
  );
}
