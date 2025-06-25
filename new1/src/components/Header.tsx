"use client";
import React, { useState } from "react";
import { MenuSquare } from "lucide-react";

const Header = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <>
    <header className="w-full flex justify-between items-center bg-transparent p-6 border-b-[2px] fixed">
      <div>
        <p className="tracking-[4px] text-[yellowgreen]">LOGO</p>
      </div>
      <ul className="hidden lg:flex gap-12">
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
          <div className="w-full bg-red-200 absolute top-14 transition-all">
            <li className="list-none border-b p-2 text-[yellowgreen]">Home</li>
            <li className="list-none border-b p-2">Prodcuts</li>
            <li className="list-none border-b p-2">Service</li>
            <li className="list-none border-b p-2">Contact</li>
          </div>
        )}
    </>
  );
};

export default Header;
