// Import des composants
import AddProject from "../components/projectComponents/AddProject.jsx";
import MyProject from "../components/projectComponents/MyProject.jsx";

// Import de datas
import projectsDatas from "../datas/Projets/Projects.json";

function ProjectsPage() {

    const content = {
        justifyItems: "center",
        marginTop: "150px",
        marginBottom: "100px",
    }

    // Récupérer les projets dans le localStorage
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];

    return (

        <div style={ content }>

            { /* Affichage des projets venant du fichier JSON */ }
            {
                projectsDatas.map((item, index) => (
                    <MyProject
                        key={ index }
                        title={ item.title }
                        description={ item.description }
                        url={ item.url }
                    />
                )) }

            { /* Affichage des projets ajouté via le bouton */ }
            {
                savedProjects.map((project, index) => (
                    <MyProject
                        key={ `saved-${ index }` } // Clé unique pour éviter les conflits
                        title={ project.title }
                        description={ project.description }
                        url={ project.imageProjectFileBase64 }
                    />
                )) }

            { /* Bouton d'ajout de projets */ }
            <AddProject/>

        </div>

    )
}

export default ProjectsPage;