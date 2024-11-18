// Import des composants
import AddProject from "../components/projectComponents/AddProject.jsx";
// import MyProject from "../components/projectComponents/MyProject.jsx";

// Import de datas
// import projectsDatas from "../datas/Projects.json";

function ProjectsPage() {

    const content = {
        alignContent: "center",
        justifyItems: "center",
        marginTop: "50px",
        marginBottom: "100px",
    }

    return (

        <div style={ content }>

            <AddProject/>

        </div>

    );
}

export default ProjectsPage;