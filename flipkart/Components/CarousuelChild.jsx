import React from 'react'

function CarousuelChild(props){
    return (
        <div>
            <img
                src={`../images/Carosuel/img${props.cnt}.webp`}
                alt={`image ${props.cnt}`}
                className="h-full w-full object-cover"
            />
        </div>
    )
}

export default CarousuelChild

