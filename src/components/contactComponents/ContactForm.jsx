// Import des composants
import Input from "./Input";
import Button from "../globalComponents/Button";
import { useState } from "react";

function ContactForm() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const submitForm = (event) => {

        event.preventDefault();

        const formData = {
            firstname,
            lastname,
            email,
            subject,
            message
        };

        const savedData = JSON.parse(localStorage.getItem("Forms"));

        savedData.push(formData);

        localStorage.setItem("Forms", JSON.stringify(savedData));

        setFirstname("");
        setLastname("");
        setEmail("");
        setSubject("");
        setMessage("");

    }

    const content = {
        justifyItems: "center",
        alignItems: "center",
        width: "100%",
    }

    return (

        <div style={ content }>
            <form onSubmit={ submitForm }>
                <Input
                    nameInput="Prénom"
                    type="text"

                    value={ firstname }
                    onChange={ (e) => setFirstname(e.target.value) }
                />
                <Input
                    nameInput="Nom"
                    type="text"

                    value={ lastname }
                    onChange={ (e) => setLastname(e.target.value) }
                />
                <Input
                    nameInput="E-Mail"
                    type="email"

                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <Input
                    nameInput="Sujet"
                    type="text"

                    value={ subject }
                    onChange={ (e) => setSubject(e.target.value) }
                />
                <Input
                    nameInput="Message"
                    type="longtext"

                    value={ message }
                    onChange={ (e) => setMessage(e.target.value) }
                />

                <Button
                    type="submit"
                    text="Envoyer"
                />
            </form>

        </div>

    )
}

export default ContactForm;