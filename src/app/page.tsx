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
      {<Navbar user={{
        avatar_url: "https://api.github.com/users/rizzabh/avatar_url",
        name: "https://api.github.com/users/rizzabh/name",
        public_repos: 0,
        bio: "https://api.github.com/users/rizzabh/bio",
        followers: 0,
        html_url: "https://api.github.com/users/rizzabh/html_url",
        following: 0,
        blog: "https://api.github.com/users/rizzabh/blog",
        login: "https://api.github.com/users/rizzabh/login",
        repos_url: "https://api.github.com/users/rizzabh/repos_url"
      }} />}
      <Searchbar setUser={(res: any) => setUser(res)} setLoader={setLoader} />
      {user && <UserProfile user={user} />}
    </main>
  );
}
