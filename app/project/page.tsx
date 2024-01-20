import React from "react";
import Link from "next/link";
import All from "../all/page";
export default function Project() {
  return (
    <div>
      <h1 className="text-white font-bold text-2xl text-center">My Project </h1>
      <div className="flex gap-2 justify-center mt-6">
       <Link className=" bg-white px-6 hover:bg-lime-600 hover:text-black rounded-full text-black" href="/all">All</Link>
       <Link className=" bg-white px-6 hover:bg-lime-600 hover:text-black rounded-full text-black" href="/2">Project</Link>
       <Link className=" bg-white px-6 hover:bg-lime-600 hover:text-black rounded-full text-black" href="/4 ">Contact</Link>
      </div>
      <All />

    </div>
  );
}
