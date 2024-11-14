import React from "react";

function MyInformations() {

    const myInformation = {
        textAlign: "center",
        width: "100%",
        height: "100%",
        display: "grid",
        alignItems: "center",
        justifyContent: "space-between",
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
        myLink: {
            display: "inline-grid",
            gridTemplateColumns: "max-content max-content max-content",
            gap: "70px",
            justifyContent: "center",
            logos: {
                width: "50px",
                height: "50px",
                filter: "invert(1)"
            },
            cv: {
                backgroundColor: "#453F3C",
                color: "#DADADA",
                border: "none",
                height: "50px",
                padding: "0 13px",
                borderRadius: "7px",
                fontSize: "18px",
                cursor: "pointer",
            }
        }
    }


    return (

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

        <div style={ myInformation.myLink }>
            <a href="https://www.linkedin.com/in/colin-regamey-916710179/" target="_blank">
                <img src="/img/linkedin.svg" alt="linkedin" style={ myInformation.myLink.logos }/>
            </a>

            <a href="https://github.com/ColinRgm" target="_blank">
                <img src="/img/github.svg" alt="github" style={ myInformation.myLink.logos }/>
            </a>

            <a href="/docs/curriculumVitae.pdf" download>
                <button style={ myInformation.myLink.cv }><b>Télécharger mon CV</b></button>
            </a>
        </div>
    </div>
    )
}

export default MyInformations;