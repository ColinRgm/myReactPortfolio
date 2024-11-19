// Import des composants
import ContactInformations from "../components/contactComponents/ContactInformations.jsx";
import ContactForm from "../components/contactComponents/ContactForm.jsx";

function ContactPage() {

    const content = {
        display: "grid",
        gridTemplateColumns: '50% 50%',
        gap: "25px",

        width: "80%",
        height: "400px",

        justifyItems: 'center',
        alignItems: "center",
        margin: "150px auto 100px auto",
    }

    return (
        <div style={ content }>

            <ContactInformations/>

            <ContactForm/>

        </div>
    );
}

export default ContactPage;