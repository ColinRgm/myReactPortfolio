function MyParcours({ date, description }) {

    const dateStyle = {
        textAlign: "right",
        fontSize: "18px",

        padding: "25px 25px 0 0",
        borderRight: "#FC7A1E 3px solid"
    }

    const descriptionStyle = {
        fontSize: "16px",
        lineHeight: "1.7",

        padding: "25px 25px 10px 0",
    }


    return (
        <div>
            <div>
                <div style={ dateStyle }>
                    <p>{ date }</p>
                </div>
                <div style={ descriptionStyle }>
                    <p>{ description }</p>
                </div>
            </div>
        </div>
    )
}

export default MyParcours;
