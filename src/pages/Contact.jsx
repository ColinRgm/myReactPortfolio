import React from 'react';

import Button from "../components/formComponents/button.jsx";
import Input from "../components/formComponents/Input.jsx";
import MyInformations from "../components/formComponents/MyInformations.jsx";
import ContactForm from "../components/formComponents/ContactForm.jsx";

function Contact() {

    const content = {
        fontFamily: "\"Courier New\", sans-serif, monospace",

        display: "grid",
        gridTemplateColumns: '50% 50%',

        width: "80%",
        height: "400px",

        alignItems: "center",
        marginTop: "150px",
        marginBottom: "50px",
    }







    return (
        <div style={ content }>

            <MyInformations />

            <ContactForm />
        </div>
    );
}

export default Contact;