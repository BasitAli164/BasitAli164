"use client";
import { useEffect, useState } from "react";
import { ArrowDown, MenuSquare } from "lucide-react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [serviceToggle, setServiceToggle] = useState(false);
  const [scroll , setScroll]=useState(false)

  useEffect(()=>{
    const handleScroll=()=>{
      const offset=window.scrollY;
      if(offset>50){
        setScroll(true)
      }else{
        setScroll(false)
      }
    }
    window.addEventListener('scroll',handleScroll)
    
  },[])



  return (
    <>
      <header className="w-full flex justify-between md:items-center bg-transparent px-16 py-5 border-b-[2px] fixed z-50">
        <div>
          <p className="tracking-[3px] text-[yellowgreen] text-xl cursor-pointer font-bold transition duration-700 delay-100 ease-in-out">
            LOGO
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center gap-10 relative">
          <li className="text-lg opacity-60 cursor-pointer hover:opacity-100 text-[yellowgreen] transition delay-100 duration-700 ease-in-out">
            Home
          </li>
          <li className="text-lg opacity-60 cursor-pointer hover:opacity-100 transition delay-100 duration-700 ease-in-out text-white">
            Products
          </li>

          {/* Service Dropdown */}
          <li
            className="relative flex items-center gap-1 text-lg cursor-pointer opacity-50 hover:opacity-100 transition delay-100 duration-700 ease-in-out text-white"
            onClick={() => setServiceToggle(!serviceToggle)}
          >
            Service <ArrowDown size={15} />
            {serviceToggle && (
              <ul className="w-44 bg-white absolute top-12 left-0 shadow-xl rounded-sm z-100">
                <li className="px-5 py-2 text-lg hover:text-[yellowgreen] cursor-pointer transition duration-700 delay-100 ease-in-out text-black">Engage</li>
                <li className="px-5 py-2 text-lg hover:text-[yellowgreen] cursor-pointer transition duration-700 delay-100 ease-in-out text-black">Pontificate</li>
                <li className="px-5 py-2 text-lg hover:text-[yellowgreen] cursor-pointer transition duration-700 delay-100 ease-in-out text-black">Synergize</li>
              </ul>
            )}
          </li>

          <li className="text-lg opacity-60 cursor-pointer hover:opacity-100 transition delay-100 duration-700 ease-in-out text-white">
            Contact
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <MenuSquare
            className="cursor-pointer"
            color="#e9e9e9"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </header>

      {/* Mobile Menu - Fixed so it shows even if you're in the middle or bottom of the page */}
      {toggle && (
        <ul className="w-full fixed top-[70px] left-0 md:hidden bg-white shadow-lg z-40">
          <li className="list-none px-5 py-2 text-lg cursor-pointer text-[yellowgreen] hover:text-[yellowgreen] transition delay-100 duration-700 ease-in-out">
            Home
          </li>
          <li className="list-none px-5 py-2 text-lg cursor-pointer hover:text-[yellowgreen] transition delay-100 duration-700 ease-in-out">
            Products
          </li>

          {/* Mobile Service Dropdown */}
          <li
            className="flex items-center gap-1 list-none px-5 py-2 text-lg cursor-pointer hover:text-[yellowgreen] transition delay-100 duration-700 ease-in-out"
            onClick={() => setServiceToggle(!serviceToggle)}
          >
            Service <ArrowDown size={15} />
          </li>
          {serviceToggle && (
            <ul className="w-full px-5">
              <li className="py-1 text-lg opacity-70 hover:text-[yellowgreen] transition duration-700 delay-100 ease-in-out cursor-pointer">Engage</li>
              <li className="py-1 text-lg opacity-70 hover:text-[yellowgreen] transition duration-700 delay-100 ease-in-out cursor-pointer">Pontificate</li>
              <li className="py-1 text-lg opacity-70 hover:text-[yellowgreen] transition duration-700 delay-100 ease-in-out cursor-pointer">Synergize</li>
            </ul>
          )}

          <li className="list-none px-5 py-2 text-lg cursor-pointer hover:text-[yellowgreen] transition delay-100 duration-700 ease-in-out">
            Contact
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;
