import React from "react";
import Logo from "../assests/Logo.svg";

const Navbar = () => {
  return (
    <>
      <div className=" border flex px-6 space-x-8 items-center py-2">
        <img alt="Logo" src={Logo}></img>
        <div className="text-orange-500 font-bold text-xl md:text-3xl">Movies</div>
        <div className="text-orange-500 font-bold text-xl md:text-3xl">Favourites</div>
      </div>
    </>
  );
};

export default Navbar;
