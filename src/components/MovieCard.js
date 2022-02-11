import React, { useState } from 'react'

const MovieCard = ({ movie, title, key, image }) => {
    const [hover, setHover] = useState('')
    const [favourites, setFavourites] = useState([])

    const addToFav = (mov) => {
        let fav = [...favourites, mov]
        setFavourites(...fav)
        console.log(fav)
    }
    return (
        <>
            <div className="flex px-8 py-8">
                <div
                    className={`bg-[url(https://image.tmdb.org/t/p/w500${image})]  h-[25vh] w-[125px]  md:h-[30vh] md:w-[250px] bg-center bg-cover rounded-xl flex items-end hover:scale-110 ease-out duration-300 relative`}
                    onMouseEnter={() => {
                        setHover(key)
                    }}
                    onMouseLeave={() => {
                        setHover('')
                    }}
                >
                    {hover === key && (
                        <div
                            className="text-xl absolute top-2 right-2 bg-black p-2 rounded-xl"
                            onClick={() => addToFav(movie)}
                        >
                            😍
                        </div>
                    )}
                    <div className="text-white p-2 bg-black w-full text-center font-bold rounded-b-xl">
                        {title}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard
