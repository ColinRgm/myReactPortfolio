function MyPassion({ title, description, url, reverse }) {

    const content = {
        display: 'grid',
        gridTemplateColumns: reverse ? '150px auto' : "auto 150px",
        gridTemplateRows: '250px',

        width: '80%',

        textAlign: reverse ? 'left' : 'right',
        alignItems: 'center',

        gap: "25px",

        // Titre passion
        title: {
            color: "#FC7A1E"
        },

        // Description passion
        description: {
            fontSize: "15px"
        },

        // Image passion
        imgStyle: {
            width: '150px',
            height: '150px'
        }
    }

    return (
        <div style={ content }>
            { reverse && <img src={ url } alt={ title } style={ content.imgStyle }/> }

            <div style={ {
                borderLeft: !reverse ? "none" : "#FC7A1E solid 3px",
                borderRight: !reverse ? "#FC7A1E solid 3px" : "none",
                paddingLeft: !reverse ? "0" : "25px",
                paddingRight: !reverse ? "25px" : "0"
            } }>
                <h3 style={ content.title }>{ title }</h3>
                <p style={ content.description }>{ description }</p>
            </div>

            { !reverse && <img src={ url } alt={ title } style={ content.imgStyle }/> }

        </div>
    )
}

export default MyPassion;