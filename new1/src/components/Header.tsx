"use client";
import React, { useState } from "react";
import { ArrowBigDown, ArrowDown, MenuSquare } from "lucide-react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [serviceToggle,setServiceToggle]=useState(false)

  return (
    <>
      <header className="w-full flex justify-between md:items-center bg-transparent px-16 py-5 border-b-[2px] fixed">
        <div>
          <p className="tracking-[4px] text-[yellowgreen] text-xl cursor-pointer bold transition duration-700 delay-100 ease-in-out">
            LOGO
          </p>
        </div>
        <ul className="hidden md:flex justify-center items-center gap-10">
          <li className="text-lg opacity-60 cursor-pointer hover:opacity-100 text-[yellowgreen] transition delay-100 duration-700 ease-in-out">
            Home
          </li>
          <li className="text-lg opacity-60 cursor-pointer hover:opacity-100  transition delay-100 duration-700 ease-in-out text-white">
            Prodcuts
          </li>
           <div  >
          <div>
             <li className="flex  items-center gap-1 list-none text-lg cursor-pointer opacity-50 hover:opacity-100 transition delay-100 duration-700 ease-in-out text-white" onClick={()=>{setServiceToggle(!serviceToggle)}} >
            Service <ArrowDown size={15} />
            </li>
          </div>
            {
        serviceToggle &&(
          
            <ul className="w-44 bg-[#fff] absolute top-[70px] right-20 shadow-xl rounded-sm"> 
                <li className="px-5  text-lg hover:text-[yellowgreen] transition duration-700 delay-100 ease-in-out cursor-pointer ">Engage</li>
                <li className="px-5 py-0.5 text-lg hover:text-[yellowgreen] transition duration-700 delay-100 ease-in-out cursor-pointer ">Pontificate</li>
                <li className="px-5 py-0.5 text-lg hover:text-[yellowgreen] transition duration-700 delay-100 ease-in-out cursor-pointer ">Synergize</li>

            </ul>
        )
      }

          
         </div>
          <li className="text-lg opacity-60 cursor-pointer hover:opacity-100 transition delay-100 duration-700 ease-in-out text-white">
            Contact
          </li>
        </ul>
        <div className="md:hidden">
          <MenuSquare className="cursor-pointer" onClick={() => setToggle(!toggle)} />
        </div>
      </header>
      {toggle && (
        <div className="w-full absolute top-16  md:hidden bg-white">
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
                <li className="px-8 py-1 text-lg hover:text-[yellowgreen] transition duration-700 delay-100 ease-in-out cursor-pointer opacity-70">Engage</li>
                <li className="px-8 py-1 text-lg hover:text-[yellowgreen] transition duration-700 delay-100 ease-in-out cursor-pointer opacity-70">Pontificate</li>
                <li className="px-8 py-1 text-lg hover:text-[yellowgreen] transition duration-700 delay-100 ease-in-out cursor-pointer opacity-70">Synergize</li>

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
