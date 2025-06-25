"use client";
import React, { useState } from "react";
import { MenuSquare } from "lucide-react";

const Header = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <>
    <header className="w-full flex justify-between md:items-center bg-transparent p-6 border-b-[2px] fixed">
      <div>
        <p className="tracking-[4px] text-[yellowgreen] text-xl">LOGO</p>
      </div>
      <ul className="hidden md:flex gap-12">
        <li>Home</li>
        <li>Prodcuts</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
      <div className="md:hidden">
        <MenuSquare onClick={()=>setToggle(!toggle)}/>
       
      </div>
    </header>
     {toggle && (
          <div className="w-full bg-red-200 absolute top-14 transition-all md:hidden">
            <li className="list-none border-b px-5 py-2 text-lg text-[yellowgreen]">Home</li>
            <li className="list-none border-b px-5 py-2 text-lg">Prodcuts</li>
            <li className="list-none border-b px-5 py-2 text-lg">Service</li>
            <li className="list-none border-b px-5 py-2 text-lg">Contact</li>
          </div>
        )}
    </>
  );
};

export default Header;
