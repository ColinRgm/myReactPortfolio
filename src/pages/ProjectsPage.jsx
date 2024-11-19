// Import des composants
import AddProject from "../components/projectComponents/AddProject.jsx";
import MyProject from "../components/projectComponents/MyProject.jsx";

// Import de datas
import projectsDatas from "../datas/Projects.json";

function ProjectsPage() {

    const content = {
        justifyItems: "center",
        marginTop: "50px",
        marginBottom: "100px",
    }

    return (

        <div style={ content }>

            { projectsDatas.map((item, index) => (
                <MyProject
                    key={ index }
                    title={ item.title }
                    description={ item.description }
                    url={ item.url }
                />
            )) }

            <AddProject/>

        </div>

    )
}

export default ProjectsPage;