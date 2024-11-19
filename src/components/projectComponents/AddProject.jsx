import Swal from "sweetalert2";
import Button from "../globalComponents/Button.jsx";

function AddProject() {

    // Fonction pour afficher l'alerte
    const buttonAddProject = () => {
        Swal.fire({
            title: 'Ajouter un projet',
            html: `
                <div style="display: grid; gap: 100px">
                <!-- Titre du projet -->
                    <div>             
                        <label for="swal-title">Titre du project</label>
                        <input id="swal-title" class="swal2-input"">
                    </div>
                    
                <!-- Description du projet  -->
                    <div>
                        <label for="swal-description">Petite description</label>
                        <input id="swal-description" class="swal2-input">
                    </div>
                
                <!-- Image du projet -->
                    <div>
                        <label for="swal-image">Ajouter une image</label>
                        <input id="swal-image" type="file" accept="image/*" class="swal2-file">
                    </div>
                </div>
            `,
            confirmButtonText: 'Enregistrer',

            preConfirm: () => {

                // Récupérer les valeurs des inputs
                const titleProject = document.getElementById('swal-title').value;
                const descriptionProject = document.getElementById('swal-description').value;
                const imageProjectFile = document.getElementById('swal-image').files[ 0 ];

                if (!titleProject || !descriptionProject || !imageProjectFile) {
                    Swal.showValidationMessage('Tout les champs sont obligatoires !');
                    return;
                }

                return new Promise((resolve) => {
                    const reader = new FileReader();

                    reader.onload = () => {
                        resolve({
                            titleProject,
                            descriptionProject,
                            imageProjectFileBase64: reader.result
                        });
                    };
                    reader.readAsDataURL(imageProjectFile);
                })
            },

        }).then((result) => {
            if (result.isConfirmed) {
                const { titleProject, descriptionProject, imageProjectFileBase64 } = result.value;

                const existingProjects = JSON.parse(localStorage.getItem('projects')) || [];

                const newProjects = {
                    title: titleProject,
                    description: descriptionProject,
                    imageProjectFileBase64: imageProjectFileBase64
                };

                // Ajout du nouveau projet dans le tableau de projet existant
                existingProjects.push(newProjects);

                // Sauvegarde du tableau
                localStorage.setItem('projects', JSON.stringify(existingProjects));

                // Afficher une alerte de succès
                Swal.fire({
                    icon: 'success',
                    title: 'Parfait !',
                    text: 'Vous avez bien ajouté un projet',
                }).then(() => {
                    // Recharger la page
                    window.location.reload();
                });
            }
        });
    };

    return (

        <>
            <Button
                text="Ajouter un project"
                onClick={ buttonAddProject }
            />


        </>

    );
}

export default AddProject;