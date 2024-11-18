// Import des composants
import Input from "./formComponents/Input";
import Button from "./formComponents/Button";

function ContactForm() {

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