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
      <Navbar />
      <Searchbar setUser={(res: any) => setUser(res)} setLoader={setLoader} />
      {user && <UserProfile user={user} />}
    </main>
  );
}
