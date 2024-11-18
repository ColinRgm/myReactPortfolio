import React from 'react';

import ContactInformations from "../components/ContactInformations.jsx";
import ContactForm from "../components/ContactForm.jsx";

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