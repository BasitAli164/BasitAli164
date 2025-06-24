"use client";
import React, { useState } from "react";
import { MenuSquare } from "lucide-react";

const Header = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <>
    <header className="w-full flex justify-between md:items-center bg-transparent p-6 border-b-[2px] fixed">
      <div>
        <p className="tracking-[4px] text-[yellowgreen] text-xl cursor-pointer">LOGO</p>
      </div>
      <ul className="hidden md:flex gap-12">
        <li className="text-lg opacity-60 cursor-pointer hover:opacity-100 text-[yellowgreen]">Home</li>
        <li className="text-lg opacity-60 cursor-pointer hover:opacity-100">Prodcuts</li>
        <li className="text-lg opacity-60 cursor-pointer hover:opacity-100">Service</li>
        <li className="text-lg opacity-60 cursor-pointer hover:opacity-100">Contact</li>
      </ul>
      <div className="md:hidden">
        <MenuSquare onClick={()=>setToggle(!toggle)}/>
       
      </div>
    </header>
     {toggle && (
          <div className="w-full absolute top-20  md:hidden">
            <li className="list-none px-5 py-2 text-lg cursor-pointer text-[yellowgreen] hover:text-[yellowgreen]">Home</li>
            <li className="list-none px-5 py-2 text-lg cursor-pointer hover:text-[yellowgreen]">Prodcuts</li>
            <li className="list-none px-5 py-2 text-lg cursor-pointer hover:text-[yellowgreen]">Service</li>
            <li className="list-none px-5 py-2 text-lg cursor-pointer hover:text-[yellowgreen]">Contact</li>
          </div>
        )}
    </>
  );
};

export default Header;
