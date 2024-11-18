import Input from "./formComponents/Input.jsx";
import Button from "./formComponents/Button.jsx";
import React from "react";

function ContactForm() {

    const contactForm = {
        justifyItems: "center",
        alignItems: "center",
        width: "100%",
    }

    return (

        <div style={ contactForm }>
            <Input
                nameInput="Prénom"
                type="text"
            />
            <Input
                nameInput="Nom"
                type="text"
            />
            <Input
                nameInput="E-Mail"
                type="email"
            />
            <Input
                nameInput="Sujet"
                type="text"
            />
            <Input
                nameInput="Message"
                type="longtext"
            />

            <Button
                text="Envoyer"
            />
        </div>
    )
}

export default ContactForm;