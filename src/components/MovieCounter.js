import React, { useState } from 'react'
import MovieDisplay from './MovieDisplay'

function MovieCounter() {
    const [count, setCount] = useState(0)

    const handleClick = () => setCount (count + 1)

    return (
        <div>
            <button onClick={handleClick}>Add movie</button>
            <h2>Number of movies: {count}</h2>
            <MovieDisplay movies = {count} />
            <MovieDisplay movies = {count + 10 } />
            <MovieDisplay movies = {count + 5 } />
            <MovieDisplay movies = {count} />
        </div>
    )
}

export default MovieCounter
