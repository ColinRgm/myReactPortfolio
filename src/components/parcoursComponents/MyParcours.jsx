// Import des dépendances
import { useState } from "react";

function MyParcours({ information, title, description }) {

    const content = {
        display: 'grid',
        gridTemplateColumns: '40% 60%',

        // Grille de gauche
        leftGrid: {
            textAlign: "right",

            padding: "5px 25px 0 0",
            borderRight: "#FC7A1E 3px solid",

            // Information du parcours / compètences
            informationStyle: {
                fontSize: "15px",
                fontWeight: "bold",
            }
        },

        // Grille de droite
        rightGrid: {
            textAlign: "left",

            padding: "5px 0 10px 25px",

            // Titre du parcours / compètences
            titleStyle: {
                backgroundColor: "transparent",
                border: "none",
                marginTop: "15px",
                fontSize: "15px",
                fontWeight: "bold",
                lineHeight: "1.7",
                cursor: "pointer"
            },

            // Description du parcours / compètences
            descriptionStyle: {
                fontSize: "13px",
                lineHeight: "25px",

                paddingLeft: "20px",
                margin: "10px 0 0 0",

                whiteSpace: "pre-wrap",
            }
        }
    }

    const [isOpen, setIsOpen] = useState(false);

    const dropDown = () => setIsOpen(prevState => !prevState);

    return (
        <div style={ content }>

            {/* Information on the left */ }
            <div style={ content.leftGrid }>
                <p style={ content.leftGrid.informationStyle }>{ information }</p>
            </div>

            {/* Content on the right */ }
            <div style={ content.rightGrid }>

                <button style={ content.rightGrid.titleStyle } onClick={dropDown}>
                    { title }
                    <span style={{ marginLeft: '10px', fontSize: '0.8em' }}>
                        {isOpen ? '▲' : '▼'}
                    </span>
                </button>

                { isOpen && (
                    <div>
                        <p style={ content.rightGrid.descriptionStyle }>{ description }</p>
                    </div>

                ) }
            </div>

        </div>
    )
}

export default MyParcours;
