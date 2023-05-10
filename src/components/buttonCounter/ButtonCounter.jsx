import React from 'react'

export const ButtonCounter = ({ children, setCounter, newValue}) => {

    return (
        <>
            <button style={{ color: 'blue' }} onClick={()=>setCounter(newValue)}>{children}</button>
        </>
    )
}
