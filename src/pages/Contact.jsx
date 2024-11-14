import React from 'react';

import Button from "../components/formComponents/button.jsx";
import Input from "../components/formComponents/Input.jsx";

function Contact() {

    const styles = {
        fontFamily: "\"Courier New\", sans-serif, monospace",
    }

    return (
        <div style={ styles }>
            <h1>Contact</h1>
            <Button/>
            <Input/>
        </div>
    );
}

export default Contact;