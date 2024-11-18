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
            fontSize: "12px",
        },

        // Image du projet
        imgStyle: {
            width: '100%'
        }
    }

    return (

        <div style={ content }>
            <h1 style={ content.titleStyle }>{ title }</h1>
            <p style={ content.descriptionStyle }>{ description }</p>
            <img style={ content.imgStyle } src={ url } alt={ title }/>
        </div>

    )
}

export default MyProject;