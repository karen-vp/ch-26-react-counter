import React, { useState } from 'react'
import { ButtonCounter } from '../buttonCounter/ButtonCounter'


export const Counter = ({initialValue = 100, increment=1, decrement=1}) => {

    const [count, setCounter] = useState(initialValue)
    return (
        <>
            <h1>Counter</h1>
            <h2>{count}</h2>
           
            <ButtonCounter funcionCallback={()=>setCounter((count) => count + increment)} > + </ButtonCounter>
            <ButtonCounter funcionCallback={()=>setCounter((count) => count - decrement)} > - </ButtonCounter>
            <ButtonCounter funcionCallback={() => setCounter(initialValue)} > Reset </ButtonCounter>
        </>
    )
}

