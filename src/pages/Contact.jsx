// Import des composants
import ContactInformations from "../components/ContactInformations";
import ContactForm from "../components/ContactForm";

function Contact() {

    const content = {
        display: "grid",
        gridTemplateColumns: '50% 50%',
        gap: "25px",

        width: "80%",
        height: "400px",

        justifyItems: 'center',
        alignItems: "center",
        margin: "150px auto 50% auto",
    }

    return (
        <div style={ content }>

            <ContactInformations/>

            <ContactForm/>

        </div>
    );
}

export default Contact;