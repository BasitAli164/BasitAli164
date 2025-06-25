"use client";
import React, { useState } from "react";
import { MenuSquare } from "lucide-react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full flex justify-between items-center bg-transparent p-6 border-b-[2px] fixed">
      <div>
        <p className="tracking-[4px]">LOGO</p>
      </div>
      <ul className="hidden lg:flex gap-12">
        <li>Home</li>
        <li>Prodcuts</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
      <div className="md:hidden">
        <MenuSquare />
        {toggle && (
          <div>
            <li>Home</li>
            <li>Prodcuts</li>
            <li>Service</li>
            <li>Contact</li>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
