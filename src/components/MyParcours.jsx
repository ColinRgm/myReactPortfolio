function MyParcours({ information, title, description }) {

    {/* Information on the left */ }
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '30% 70%',

        fontFamily: "\"Courier New\", sans-serif, monospace"
    }

    const leftGrid = {
        textAlign: "right",

        padding: "5px 25px 0 0",
        borderRight: "#FC7A1E 3px solid"
    }

    const informationStyle = {
        fontSize: "18px",
        fontWeight: "bold",
    }


    {/* Content on the right */ }
    const rightGrid = {
        textAlign: "left",

        padding: "5px 0 10px 25px",
    }

    const titleStyle = {
        fontSize: "16px",
        fontWeight: "bold",
        lineHeight: "1.7",
    }

    const descriptionStyle = {
        fontSize: "14px",
        lineHeight: "1.5",

        paddingLeft: "20px",
        margin: "10px 0 0 0",

        whiteSpace: "pre-wrap",
    }


    return (
        <div style={ gridStyle }>

            {/* Information on the left */ }
            <div style={ leftGrid }>
                <p style={ informationStyle }>{ information }</p>
            </div>

            {/* Content on the right */ }
            <div style={ rightGrid }>
                <p style={ titleStyle }>{ title }</p>
                <p style={ descriptionStyle }>{ description }</p>
            </div>

        </div>
    )
}

export default MyParcours;
