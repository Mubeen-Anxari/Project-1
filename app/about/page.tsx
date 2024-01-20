import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <div>
      <div className="grid grid-cols-2 border mb-2">
        <div className="1">
        <Image
            className="ml-48 rounded-full mb-28 mt-16 "
            src="/Mubeen1.jpg"
            width={300}
            height={500}
            alt="pic"
          ></Image>
        </div>
        <div className="2">
          <h1 className="text-white font-bold text-4xl mt-24">About Me</h1>
          <p className=" text-white mt-4 w-[60] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ab mollitia voluptatem, reiciendis veritatis nobis sunt veniam, illum quibusdam corporis obcaecati ipsa sit. Accusamus rerum saepe ipsa quo odit, perspiciatis numquam sapiente veritatis! Impedit dolor praesentium omnis, deserunt enim ratione facere, consequatur totam adipisci necessitatibus animi cum sapiente quam ad accusamus. Quae iusto culpa aliquam laborum et asperiores, expedita voluptates quos quasi possimus nemo nihil fuga blanditiis, ratione magni earum!</p>
        </div>
      </div>
    </div>
  );
}
