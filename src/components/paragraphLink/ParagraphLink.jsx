// props: comunican los componentes padres con los componentes hijos.

const ParagraphLink = ({ url, color = 'violet', children }) => {
    return (
        <>
            <a href={url} target='_blank' style={{ textDecoration: 'none', color: color }}>
                <p>{children}</p>
            </a>
        </>
    )
}

export default ParagraphLink;