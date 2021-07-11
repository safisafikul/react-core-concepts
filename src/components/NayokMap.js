import React from 'react'
import Nayok from './Nayok'

function NayokMap() {
    const nayoks = [
        { name: 'SAFI', age: 28 },
        { name: 'LARK', age: 38 },
        { name: 'JACK', age: 40 },
        { name: 'MONA', age: 38 },
        { name: 'MARK', age: 55 },
        { name: 'ARMAN', age: 60 },
        { name: 'LUMAN', age: 84 },
        { name: 'ROKS', age: 100}
    ]
    
    return (
        <div>
            {
                nayoks.map(nk => <Nayok name={nk.name} age={nk.age} /> )
            }
        </div>
    )
}

export default NayokMap
