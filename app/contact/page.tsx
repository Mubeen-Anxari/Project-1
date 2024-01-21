"use client";
import * as yup from "yup";
const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  message: yup
    .string()
    .min(18, "Password must be at least 18 characters")
    .required("Password is required"),
});
import React from "react";

import { useState } from "react";
import Link from "next/link";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const onChangeHandle = (e: any) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChange = (e: any) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="m-9">
      <span className="border p-2 border-white text-white text-3xl font-bold  ">
        Mubeen Ansari
      </span>
      <div className="grid grid-cols-2 mb-28">
        <div className="1 m-4">
          <h1 className="text-white text-2xl font-bold ml-24 mt-24">
            Lets Connect:
          </h1>
          <p className=" w-[450px] text-gray-600 mt-2 ml-24">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            doloribus molestiae. Sunt maxime commodi reiciendis consequatur!
            Repellat quam sequi soluta ea, quo a! Explicabo fugiat excepturi ut,
            exercitationem unde voluptatem.
          </p>
        </div>
        <div className="2 ">
          <form onSubmit={handleChange} className="max-w-md mx-auto mt-8">
            <div className="mb-4">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Your Name:
              </label>
              <input
                onChange={onChangeHandle}
                className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your Name"
                name="name"
                value={form.name}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Your Email:
              </label>
              <input
                onChange={onChangeHandle}
                className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={form.email}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Message:
              </label>
              <textarea
                onChange={onChangeHandle}
                className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                placeholder="Leave a Message"
                name="message"
                value={form.message}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full  rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div className=" flex justify-between mx-20">
        <div className="1">
          <h1 className="text-white ">Mubeen Ansari</h1>
        </div>
        <p className="text-gray-600">All rights reserved.</p>
      </div>
    </div>
  );
}
