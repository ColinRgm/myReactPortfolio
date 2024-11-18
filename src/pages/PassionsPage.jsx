// Import des composants
import MyPassion from "../components/passionsComponents/MyPassion.jsx";

// Import de datas
import passionsDatas from "../datas/Passions.json";

function PassionsPage() {

    const content = {
        justifyItems: "center",
        marginTop: "150px",
        marginBottom: "50px",
    }


    return (
        <div style={ content }>

            { passionsDatas.map((item, index) => (
                <MyPassion
                    key={ index }
                    title={ item.title }
                    description={ item.description }
                    url={ item.url }
                    reverse={ index % 2 === 1 }
                />
            )) }

        </div>
    )
}

export default PassionsPage;