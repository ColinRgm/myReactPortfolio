import React from "react";

// Import des composants
import MyParcours from "../components/MyParcours";

function Parcours() {

    const content = {
        justifyItems: "center",
        marginTop: "150px",
        marginBottom: "50px",
    }

    const grid = {
        width: "80%",

    }

    const titleStyle = {
        fontSize: "23px",
        fontWeight: "900",
        textAlign: "right",
        borderBottom: "#FC7A1E 3px solid",
        paddingBottom: "25px",
        marginBottom: "0"
    }


    return (
        <div style={ content }>

            { /* Grid concernant mon parcours */ }
            <div style={ grid }>

                <p style={ titleStyle }>Parcours</p>

                <MyParcours
                    information="Depuis Août 2021"
                    title="Apprenti Informaticien développement d'application"
                    description={
                        "Jobtrek School, Lausanne (1ère année) \n" +
                        "E-Novinfo, Marin-Epagnier (2ème et 3ème année) \n" +
                        "Solutions KLÄY, Chavornay (3ème année) \n" +
                        "Jobtrek School, Lausanne (4ème année)"
                    }
                />

                <MyParcours
                    information="Janvier 2019 - Juillet 2021"
                    title="Mesure d'insertion"
                    description="Jobtrek, Yverdon-les-Bains"
                />

                <MyParcours
                    information="Août 2017 - Avril 2018"
                    title="Apprenti Carrossier peintre"
                    description="Crrosserie David Piguet, Le Brassus"
                />

                <MyParcours
                    information="Septembre 2016 - Février 2017"
                    title="Séjour linguistique"
                    description="EF, Brisbane"
                />

                <MyParcours
                    information="Août 2015 - Juin 2016"
                    title="Apprenti Dessinateur en michrotechnique"
                    description="ETVJ, Le Sentier"
                />

                <MyParcours
                    information="Juin 2015"
                    title="Fin de scolarité"
                    description="École secondaire, Le Sentier (VSO)"
                />

            </div>

            { /* Grid concernant mes compètences en informatique */ }
            <div style={ grid }>

                <p style={ titleStyle }>Compètences informatique</p>

                <MyParcours
                    information="HTML - CSS"
                    title="Création d'un site web"
                    description={
                        "Mise en page responsive \n" +
                        "Animation CSS \n" +
                        "Design \n"
                    }
                />

                <MyParcours
                    information="JavaScript"
                    title="Réalisation d'un calculateur de moyennes"
                    description={
                        "Animation \n" +
                        "Interaction HTML"
                    }
                />

                <MyParcours
                    information="PHP"
                    title="Introduction via vidéo et tutoriels"
                    description={
                        "Récupération de données d'un formulaire"
                    }
                />

                <MyParcours
                    information="Git"
                    title="Versionning de projet"
                    description={
                        "Hébergement de code sources \n" +
                        "Animation CSS \n" +
                        "Design \n"
                    }
                />

                <MyParcours
                    information="WordPress"
                    title="Gestion de site web"
                    description={
                        "Mise à jour des plugins \n" +
                        "Backup \n" +
                        "Gestion des sauvegardes"
                    }
                />

                <MyParcours
                    information="Rust"
                    title="Création d'une application console"
                    description={
                        "Gestion des entrées utilisateurs \n" +
                        "Création de drapeaux personnalisés \n" +
                        "Utilisation de fichier JSON pour le stockage de données"
                    }
                />

            </div>

        </div>
    );
}

export default Parcours;