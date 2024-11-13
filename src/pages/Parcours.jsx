import React from "react";

// Import des composants
import MyParcours from "../components/MyParcours";

function Parcours() {

    const titleStyle = {
        fontSize: "23px",
        fontWeight: "900",
        textAlign: "right",
        borderBottom: "#FC7A1E 3px solid"
    }


    return (
        <div>
            <div>
                <p style={ titleStyle }>Parcours</p>
                <MyParcours
                    date="Depuis Août 2021"
                    description="Apprenti Informaticien"
                />
            </div>
            <div>
                <p style={ titleStyle }>Compètences informatique</p>
                <MyParcours
                    date="HTML - CSS"
                    description="Création d'un site web"
                    />
            </div>
        </div>
    );
}

export default Parcours;