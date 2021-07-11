import React from 'react'

function Nayok(props) {
    
    const nayokStyle = {
        border: '2px solid red',
        margin: '20px'
    }

    return (
        <div style={nayokStyle}>
            <h1> I am a movie star {props.name}</h1>
            <h3>I have sold 5 books in {props.age || 30 } years</h3>
        </div>
    )
}

export default Nayok
