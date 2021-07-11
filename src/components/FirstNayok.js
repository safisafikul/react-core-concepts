import React from 'react'
import Nayok from './Nayok'


function FirstNayok() {
    const nayoks = ['SAFI', 'LARK', 'JACK', 'MONA']
    return (
        <div>
            <Nayok name={nayoks[0]} age="25" />
            <Nayok name={nayoks[1]} />
            <Nayok name={nayoks[2]} />
            <Nayok name={nayoks[3]} />
        </div>
    )
}

export default FirstNayok
