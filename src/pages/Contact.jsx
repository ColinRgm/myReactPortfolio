import React from 'react';

import Button from "../components/formComponents/button.jsx";
import Input from "../components/formComponents/Input.jsx";

function Contact() {

    const content = {
        fontFamily: "\"Courier New\", sans-serif, monospace",

        display: "grid",
        gridTemplateColumns: '50% 50%',

        width: "80%",

        alignItems: "center",
        marginTop: "150px",
        marginBottom: "50px",
    }


    {/* My infromation side */
    }
    const myInformation = {
        separator: {
            small: {
                border: "none",
                borderTop: "3px solid #FC7A1E",
                margin: "auto",
                width: "20%"
            },
            large: {
                border: "none",
                borderTop: "3px solid #FC7A1E",
                margin: "auto",
                width: "50%"
            },
        },
        backgroundColor: "white",
        textAlign: "center",
        width: "100%",
        myLink: {

        }
    }


    {/* Contact form side */
    }
    const contactForm = {
        backgroundColor: "white",
        justifyItems: "center",
        alignItems: "center",
        width: "100%",
        display: "grid",
    }

    return (
        <div style={ content }>

            {/* My infromation side */ }
            <div style={ myInformation }>

                <div>
                    <p>Colin Regamey</p>
                    <p>Suisse, Vaud</p>
                    <p>25 ans</p>
                </div>

                <hr style={ myInformation.separator.small }></hr>

                <div>
                    <p>Je suis un jeune en quatrième année d'apprentissage
                        en tant qu'informaticien développement d'application.</p>
                </div>

                <hr style={ myInformation.separator.large }></hr>

                <div style={ myLink }>

                </div>
            </div>


            {/* Contact form side */ }
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
        </div>
    );
}

export default Contact;