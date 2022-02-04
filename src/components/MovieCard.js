import React from 'react';
import BannerImage from '../assests/nowayhome.jpg';

const MovieCard = () => {
  return <>
     <div className="flex px-8 py-8">
            <div
              className={`bg-[url(${BannerImage})] h-[30vh] w-[200px] bg-center bg-cover rounded-xl flex items-end hover:scale-110 ease-out duration-300`}
            >
                <div className='text-white p-2 bg-black w-full text-center rounded-b-xl'>Spider-Man : No Way Home</div>
            </div>
          </div>
  </>;
};

export default MovieCard;
