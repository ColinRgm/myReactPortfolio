function Input({ type, nameInput }) {

    const content = {
        textAlign: "center",
        position: "relative",
        width: "100%",

        // Label du placeholder
        label: {
            position: "absolute",
            top: "0",
            left: "0",
            transform: "translate(60px, 0px)",
            color: "#453F3C",
            backgroundColor: "#DADADA",
            padding: "5px 20px",
        },

        // Placeholder
        input: {
            height: "25px",
            width: "80%",
            border: "2px white solid",
            borderRadius: "7px",
            margin: "20px 0",
            padding: "10px",
            font: "inherit",
            color: "#453F3C",
            backgroundColor: "transparent",
            fontSize: "15px"
        }
    }

    return (
        <div style={ content }>
            <label style={ content.label }>{ nameInput }</label>
            <input type={ type } style={ content.input }/>
        </div>
    )
}

export default Input;