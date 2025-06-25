import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-transparent p-6 border-b-[2px]">
      <div>
        <p className="">LOGO</p>
      </div>
      <ul className="flex gap-10">
        <li>Home</li>
        <li>Prodcuts</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
