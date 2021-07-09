import React, { useEffect, useState } from 'react'
import Nayok from './Nayok'

function NayokUseEffect() {
    const [nayoks, setNayoks] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setNayoks(data))
    }, [])
    
    return (
        <div>
            {
                nayoks.map(nk => <Nayok name={nk.name} key={nk.id} age={nk.age} /> )
            }
        </div>
    )
}

export default NayokUseEffect
