import React from 'react'
import ParagraphLink  from '../paragraphLink/ParagraphLink';

export const SocialNetworks = () => {
    return (
        <>
            <h1>Social Networks</h1>
            <ParagraphLink url='https://es.react.dev/'>Pagina React</ParagraphLink>
            <ParagraphLink url='https://es.react.dev/' color='green'> Pagina Linkedin </ParagraphLink>
            <ParagraphLink url='https://es.react.dev/' color='blue'> Pagina Facebook </ParagraphLink>
        </>
    )
}
