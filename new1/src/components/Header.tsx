"use client";
import React, { useState } from "react";
import { ArrowBigDown, ArrowDown, MenuSquare } from "lucide-react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [serviceToggle,setServiceToggle]=useState(false)

  return (
    <>
      <header className="w-full flex justify-between md:items-center bg-transparent p-6 border-b-[2px] fixed">
        <div>
          <p className="tracking-[4px] text-[yellowgreen] text-xl cursor-pointer opacity-60 hover:opacity-100 transition duration-700 delay-100 ease-in-out">
            LOGO
          </p>
        </div>
        <ul className="hidden md:flex gap-12">
          <li className="text-lg opacity-60 cursor-pointer hover:opacity-100 text-[yellowgreen] transition delay-100 duration-700 ease-in-out">
            Home
          </li>
          <li className="text-lg opacity-60 cursor-pointer hover:opacity-100  transition delay-100 duration-700 ease-in-out">
            Prodcuts
          </li>
          <li className=" flex gap-5 justify-center items-center text-lg opacity-60 cursor-pointer hover:opacity-100 transition delay-100 duration-700 ease-in-out">
            Service <ArrowDown size={20}/>
          </li>
          <li className="text-lg opacity-60 cursor-pointer hover:opacity-100 transition delay-100 duration-700 ease-in-out">
            Contact
          </li>
        </ul>
        <div className="md:hidden">
          <MenuSquare className="cursor-pointer" onClick={() => setToggle(!toggle)} />
        </div>
      </header>
      {toggle && (
        <div className="w-full absolute top-20  md:hidden">
          <li className="list-none px-5 py-2 text-lg cursor-pointer text-[yellowgreen] hover:text-[yellowgreen]  transition delay-100 duration-700 ease-in-out">
            Home
          </li>
          <li className="list-none px-5 py-2 text-lg cursor-pointer hover:text-[yellowgreen]  transition delay-100 duration-700 ease-in-out">
            Prodcuts
          </li>
         <div>
          <div>
             <li className="flex  items-center gap-1 list-none px-5 py-2 text-lg cursor-pointer hover:text-[yellowgreen]  transition delay-100 duration-700 ease-in-out" onClick={()=>{setServiceToggle(!serviceToggle)}} >
            Service <ArrowDown size={15} />
            </li>
          </div>
            {
        serviceToggle &&(
          
            <ul className="w-full"> 
                <li className="px-8 py-1 text-lg hover:text-[yellowgreen] transition duration-700 delay-100 ease-in-out cursor-pointer">Engage</li>
                <li className="px-8 py-1 text-lg hover:text-[yellowgreen] transition duration-700 delay-100 ease-in-out cursor-pointer">Pontificate</li>
                <li className="px-8 py-1 text-lg hover:text-[yellowgreen] transition duration-700 delay-100 ease-in-out cursor-pointer">Synergize</li>

            </ul>
        )
      }

          
         </div>
          <li className="list-none px-5 py-2 text-lg cursor-pointer hover:text-[yellowgreen]  transition delay-100 duration-700 ease-in-out">
            Contact
          </li>
        </div>
      )}

      
    </>
  );
};

export default Header;
