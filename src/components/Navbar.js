import React from 'react';
import Logo from '../assests/Logo.svg'

const Navbar = () => {
  return (
    <div className=" border flex px-8 space-x-8 items-center py-2">
    <img src={Logo}></img>
    <div className="text-orange-500 font-bold text-3xl">Movies</div>
    <div className="text-orange-500 font-bold text-3xl">Favourites</div>
  </div>
  )
};

export default Navbar;
