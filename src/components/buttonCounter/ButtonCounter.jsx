import React from 'react'

export const ButtonCounter = ({ children, setCounter, newValue}) => {

const handleOnClick = ()=>{
    setCounter(newValue)
}

    return (
        <>
            <button style={{ color: 'blue' }} onClick={handleOnClick}>{children}</button>
        </>
    )
}
