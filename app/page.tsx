import React from "react";
import Link from "next/link";
import Image from "next/image";
import About from "./about/page";
import Project from "./project/page";
import Contact from "./contact/page";
import All from "./all/page";
import Button from "./components/button/button";
export default function Home() {
  return (
    <div>
      <nav className="bg-black p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-white  font-bold text-3xl">Mubeen Ansari</div>
            <div className=" flex decoration space-x-4">
              <Link className="text-white" href="/about">
                About
              </Link>
              <Link className="text-white" href="/project">
                Project
              </Link>
              <Link className="text-white" href="/contact">
                Contact
              </Link>
              <Link className=" text-white " href="/blog">Blogs</Link>
            </div>
          </div>
        </div>
      </nav>
      <hr />
      <div className="grid grid-cols-2">
        <div className="1">
          <h1 className=" text-2xl text-yellow-400  mt-9 ml-12 font-bold">
            Hello please check my work
          </h1>
          <h1 className="text-white font-bold text-3xl m-4 ml-16">
            Becoming a Developer
          </h1>
          <p className=" text-white  w-[96] m-4 ml-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            provident non et ex dicta blanditiis, iure sequi, sit quo minus ipsa
            corporis deleniti veniam incidunt saepe quod voluptatem? Enim,
            fugiat!
          </p>
          <div className=" flex ">
            {/* <button  className="bg-red-900 text-white ml-24 w-20 rounded-xl py-2 hover:bg-blue-950">
              Apply
            </button> */}
            <Button title="Apply" />
            {/* <button    className="bg-red-900 text-white ml-4 w-20 rounded-xl py-2 hover:bg-blue-950">
              Submit
            </button> */}
            <Button  title="Submit" />
          </div>
        </div>
        <div className="2">
          <Image
            className="ml-48 rounded-full mb-28 "
            src="/Mubeen1.jpg"
            width={300}
            height={500}
            alt="pic"
          ></Image>
        </div>
      </div>
      <hr />
      <About />
      
      <Project />
      <All />
    <Contact />
    
    </div>
  );
}
