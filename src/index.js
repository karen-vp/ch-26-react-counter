import React from 'react';
import ReactDOM from 'react-dom/client';
import ParagraphLink  from './components/paragraphLink/ParagraphLink';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParagraphLink url='https://es.react.dev/'>Pagina React</ParagraphLink>
    <ParagraphLink url='https://es.react.dev/' color='green'> Pagina Linkedin </ParagraphLink>
    <ParagraphLink url='https://es.react.dev/' color= 'blue'> Pagina Facebook </ParagraphLink>
  </React.StrictMode>
);

