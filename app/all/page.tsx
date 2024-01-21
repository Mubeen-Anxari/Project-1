import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function All() {
  return (
    <div>
     <div className=" mbn mt-3 mx-10 grid grid-cols-3">
     <Link href="/blog/1">
        <div >
        <div>
          <Image src="/card1.jpg" width={400} height={300} alt="pic"></Image>
        </div>
        <p  className=" text-white">About blog-1</p  >
        </div>
      </Link>  
      <Link href="/blog/2">
        <div >
        <div>
          <Image src="/card2.jpg" width={400} height={280} alt="pic"></Image>
        </div>
        <p  className=" text-white">About blog-2</p  >
        </div>
      </Link>
      <Link href="/blog/3">
        <div >
        <div>
          <Image src="/card3.jpg" width={400} height={300} alt="pic"></Image>
        </div>
        <p  className=" text-white">About blog-3</p >
        </div>
      </Link>
      <Link href="/blog/4">
        <div >
        <div>
          <Image src="/card-3.jpg" width={400} height={300} alt="pic"></Image>
        </div>
        <p  className=" text-white">About blog-4</p  >
        </div>
      </Link>
     </div>
    </div>
  );
}
