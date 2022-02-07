import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import Pagination from './Pagination'
import axios from 'axios'
import { TailSpin } from 'react-loader-spinner'

const Movies = () => {
    const [movies, setMovies] = useState([])

    const [page, setPage] = useState(1)

    const goAhead = () => {
        setPage(page + 1)
    }

    const goBack = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/trending/movie/week?api_key=c51ead54fa195e58d0023669954222a3&page=${page}`
            )
            .then((res) => {
                console.table(res.data.results)
                setMovies(res.data.results)
            })
    }, [page])
    return (
        <>
            <div className="mb-8">
                <div className="mt-8 font-bold text-2xl text-center">
                    TRENDING MOVIES
                </div>

                {movies.length === 0 ? (
                    <div className="flex justify-center mt-8 mb-4">
                        <TailSpin color="#00BFFF" height={80} width={80} />
                    </div>
                ) : (
                    <div className="flex flex-wrap justify-center">
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                image={movie.backdrop_path}
                                title={movie.title}
                            />
                        ))}
                    </div>
                )}
            </div>
            <Pagination page={page} goAhead={goAhead} goBack={goBack} />
        </>
    )
}

export default Movies
