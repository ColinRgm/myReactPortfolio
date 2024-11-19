function MyProject({ title, description, url }) {

    const content = {
        display: 'grid',
        width: '80%',
        textAlign: 'center',

        // Titre du projet
        titleStyle: {
            color: '#FC7A1E',
        },

        // Description du projet
        descriptionStyle: {
            fontSize: "14px",
        },

        // Image du projet
        imgStyle: {
            width: '70%'
        },

        separator: {

            // Grande ligne
            large: {
                border: "none",
                borderTop: "3px solid #FC7A1E",
                margin: "30px auto 60px auto",
                width: "50%"
            },
        },
    }

    return (

        <div style={ content }>
            <div>
                <h1 style={ content.titleStyle }>{ title }</h1>
                <p style={ content.descriptionStyle }>{ description }</p>
                <img style={ content.imgStyle } src={ url } alt={ title }/>
            </div>
            <hr style={ content.separator.large }></hr>
        </div>

    )
}

export default MyProject;