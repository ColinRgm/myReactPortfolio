import React from 'react';

function Button({ text }) {
const styles = {
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
        <button style={ styles }>{ text }</button>
    )

}

export default Button;