import Input from "./Input.jsx";
import Button from "./button.jsx";
import React from "react";

function ContactForm() {

    const contactForm = {
        backgroundColor: "white",
        justifyItems: "center",
        alignItems: "center",
        width: "100%",
        display: "grid",
    }

    return (

        <div style={ contactForm }>
            <Input
                type="text"
                placeholder="Prénom"
            />
            <Input
                type="text"
                placeholder="Nom"
            />
            <Input
                type="email"
                placeholder="E-Mail"
            />
            <Input
                type="text"
                placeholder="Sujet"
            />
            <Input
                type="text"
                placeholder="Message"
            />

            <Button
                text="Envoyer"
            />
        </div>
    )
}

export default ContactForm;