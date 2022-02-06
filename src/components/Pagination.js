import React, { useState } from 'react'

const Pagination = () => {
    const [page, setPage] = useState(1)

    const goAhead = () => {
        setPage(page + 1)
    }

    const goBack = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    return (
        <>
            <div className="w-full flex justify-center mb-8">
                <button
                    onClick={goBack}
                    className="p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl"
                >
                    Previous
                </button>
                <button className="p-2 border-2 border-indigo-500 text-indigo-500 bg-gray-300">
                    {page}
                </button>
                <button
                    onClick={goAhead}
                    className="p-2 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl"
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default Pagination
