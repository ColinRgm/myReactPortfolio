// Import des composants
import Input from "./Input.jsx";
import Button from "../globalComponents/Button.jsx";
import { useState } from "react";

function ContactForm() {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");

    const submitForm = (event) => {
        event.preventDefault();
    }

    const formData = {
        firstname,
        lastname,
        email,
        subject,
        message
    };

    const savedData = JSON.parse

    const content = {
        justifyItems: "center",
        alignItems: "center",
        width: "100%",
    }

    return (

        <div style={ content }>

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