import React from 'react'
import Logo from '../assests/Logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className=" border flex px-6 space-x-8 items-center py-2">
                <img alt="Logo" src={Logo}></img>
                <Link
                    to="/"
                    className="text-orange-500 font-bold text-xl md:text-3xl"
                >
                    Movies
                </Link>
                <Link
                    to="/favourites"
                    className="text-orange-500 font-bold text-xl md:text-3xl"
                >
                    Favourites
                </Link>
            </div>
        </>
    )
}

export default Navbar
