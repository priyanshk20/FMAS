import React from 'react'
import MovieCard from './MovieCard'

const Movies = () => {
    return (
        <>
            <div className="mb-8">
                <div className="mt-8 font-bold text-2xl text-center">
                    TRENDING MOVIES
                </div>
                <div className="flex flex-wrap justify-center">
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
        </>
    )
}

export default Movies
