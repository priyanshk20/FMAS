import React from 'react'
import BannerImage from '../assests/nowayhome.jpg'

const Banner = () => {
    return (
        <>
            <div
                className={`bg-[url(${BannerImage})] h-[30vh] md:h-[50vh] bg-center bg-cover flex items-end`}
            >
                <div className="text-xl md:text-3xl text-white p-4 bg-black bg-opacity-50 w-full text-center">
                    Spider-Man : No Way Home
                </div>
            </div>
        </>
    )
}

export default Banner
