import React from "react";

import Button from "./formComponents/Button.jsx";

function ContactInformations() {

    const myInformation = {
        textAlign: "center",
        width: "100%",
        height: "100%",
        display: "grid",
        alignItems: "center",
        justifyContent: "space-between",

        // Ligne de séparation
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

        // Bouton et liens
        myLink: {
            display: "inline-grid",
            gridTemplateColumns: "max-content max-content max-content",
            gap: "70px",
            justifyContent: "center",

            // Linkedin / GitHub
            logos: {
                width: "50px",
                height: "50px",
                filter: "invert(1)"
            },
        }
    }


    return (

            <div style={ myInformation }>

                <div>
                    <p><strong>Colin</strong> Regamey</p>
                    <p>Suisse, Vaud</p>
                    <p>25 ans</p>
                </div>

                <hr style={ myInformation.separator.small }></hr>

                <div>
                    <p>Je suis un jeune en quatrième année d'apprentissage
                        en tant qu'
                        <span style={ { color: "#FC7A1E" } }>informaticien développement d'application.</span>
                    </p>
                </div>

                <hr style={ myInformation.separator.large }></hr>

                <div style={ myInformation.myLink }>
                    <a href="https://www.linkedin.com/in/colin-regamey-916710179/" target="_blank">
                        <img src="/img/linkedin.svg" alt="linkedin" style={ myInformation.myLink.logos }/>
                    </a>

                    <a href="https://github.com/ColinRgm" target="_blank">
                        <img src="/img/github.svg" alt="github" style={ myInformation.myLink.logos }/>
                    </a>

                    <a href="/docs/curriculumVitae.pdf" download>
                        <Button text="Télécharger mon CV"/>
                    </a>
                </div>
            </div>
    )
}

export default ContactInformations;