import React from 'react'

export const ButtonCounter = ({ funcionCallback, children }) => {

/*
    Hacer un componente para el boton.
    atributo: increment = {5}
    atributo: increment = {-5}
    atributo: onClick = {fncCallback}
    color text: blue;
*/
    return (
        <>
            <button style={{ color: 'blue' }} onClick={funcionCallback}>{children}</button>
        </>
    )
}
