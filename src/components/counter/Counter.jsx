import React, { useState } from 'react'
import { ButtonCounter } from '../buttonCounter/ButtonCounter'


export const Counter = ({ initialValue = 100, increment = 1, decrement = 1 }) => {

    const [count, setCounter] = useState(initialValue)
    return (
        <>
            <h1>Counter</h1>
            <h2>{count}</h2>

            <ButtonCounter setCounter={setCounter} newValue={count + increment}> + </ButtonCounter>
            <ButtonCounter setCounter={setCounter} newValue={count - decrement}> - </ButtonCounter>
            <ButtonCounter setCounter={setCounter} newValue={initialValue}> Reset </ButtonCounter>
        </>
    )
}

