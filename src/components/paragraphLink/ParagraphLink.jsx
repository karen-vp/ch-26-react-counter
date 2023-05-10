import '../../styles/paragraphLink/paragraph-link.css'
import PropTypes from 'prop-types';


// props: comunican los componentes padres con los componentes hijos.
const ParagraphLink = ({ url, color = 'violet', children }) => {
    // Esto es para indicarle que es obligatorio poner atributos (en este caso el atributo 'url') a este componente y que tipo de entrada es 
    ParagraphLink.propTypes = {
        url: PropTypes.string.isRequired
    }
    return (
        <>
            <a href={url} target='_blank' style={{ color: color }}>
                <p>{children}</p>
            </a>
        </>
    )
}

export default ParagraphLink;