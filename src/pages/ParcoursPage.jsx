// Import des composants
import MyParcours from "../components/parcoursComponents/MyParcours.jsx";

//Import de datas
import skills from "../datas/Parcours/Skills.json";
import parcours from "../datas/Parcours/Parcours.json";

function ParcoursPage() {

    const content = {
        justifyItems: "center",
        marginTop: "150px",
        marginBottom: "100px",

        grid: {
            width: "80%",

            // Titre de la grille
            titleStyle: {
                fontSize: "20px",
                fontWeight: "900",
                textAlign: "right",
                borderBottom: "#FC7A1E 3px solid",
                paddingBottom: "25px",
                marginBottom: "0"
            }
        },
    }

    return (
        <div style={ content }>

            { /* Grid concernant mon parcours */ }
            <div style={ content.grid }>

                <p style={ content.grid.titleStyle }>PARCOURS</p>

                {
                    parcours.map((parcour, index) => (
                        <MyParcours
                            key={ index }
                            information={ parcour.information }
                            title={ parcour.title }
                            description={ parcour.description }
                        />
                    ))
                }


            </div>

            { /* Grid concernant mes compètences en informatique */ }
            <div style={ content.grid }>

                <p style={ content.grid.titleStyle }>COMPETENCES INFORMATIQUE</p>

                {
                    skills.map((skill, index) => (
                        <MyParcours
                            key={ index }
                            information={ skill.information }
                            title={ skill.title }
                            description={ skill.description }
                        />
                    ))
                }

            </div>

        </div>
    );
}

export default ParcoursPage;