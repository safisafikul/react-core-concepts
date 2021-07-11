import React from 'react'

function MovieDisplay(props) {
    return (
        <div>
            <h4>Movies I have acted: {props.movies}</h4>
        </div>
    )
}

export default MovieDisplay
