function Button({ text, onClick }) {

    const buttonStyles = {
        backgroundColor: "#453F3C",
        color: "#DADADA",
        border: "none",
        height: "50px",
        padding: "0 13px",
        borderRadius: "7px",
        fontSize: "17px",
        fontWeight: "bold",
        cursor: "pointer",
    }

    return (
        <button style={ buttonStyles } onClick={onClick}>{ text }</button>
    )

}

export default Button;