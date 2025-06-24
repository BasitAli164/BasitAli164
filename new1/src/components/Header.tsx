"use client";
import React, { useState } from "react";
import { MenuSquare } from "lucide-react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="w-full flex justify-between md:items-center bg-transparent p-6 border-b-[2px] fixed">
        <div>
          <p className="tracking-[4px] text-[yellowgreen] text-xl cursor-pointer opacity-60 hover:opacity-100 transition duration-700 delay-500 ease-in-out">
            LOGO
          </p>
        </div>
        <ul className="hidden md:flex gap-12">
          <li className="text-lg opacity-60 cursor-pointer hover:opacity-100 text-[yellowgreen] transition delay-500 duration-700 ease-in-out">
            Home
          </li>
          <li className="text-lg opacity-60 cursor-pointer hover:opacity-100  transition delay-500 duration-700 ease-in-out">
            Prodcuts
          </li>
          <li className="text-lg opacity-60 cursor-pointer hover:opacity-100 transition delay-500 duration-700 ease-in-out">
            Service
          </li>
          <li className="text-lg opacity-60 cursor-pointer hover:opacity-100 transition delay-500 duration-700 ease-in-out">
            Contact
          </li>
        </ul>
        <div className="md:hidden">
          <MenuSquare className="cursor-pointer" onClick={() => setToggle(!toggle)} />
        </div>
      </header>
      {toggle && (
        <div className="w-full absolute top-20  md:hidden">
          <li className="list-none px-5 py-2 text-lg cursor-pointer text-[yellowgreen] hover:text-[yellowgreen]  transition delay-500 duration-700 ease-in-out">
            Home
          </li>
          <li className="list-none px-5 py-2 text-lg cursor-pointer hover:text-[yellowgreen]  transition delay-500 duration-700 ease-in-out">
            Prodcuts
          </li>
          <li className="list-none px-5 py-2 text-lg cursor-pointer hover:text-[yellowgreen]  transition delay-500 duration-700 ease-in-out">
            Service
          </li>
          <li className="list-none px-5 py-2 text-lg cursor-pointer hover:text-[yellowgreen]  transition delay-500 duration-700 ease-in-out">
            Contact
          </li>
        </div>
      )}
    </>
  );
};

export default Header;
