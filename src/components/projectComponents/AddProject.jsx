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
                const title = document.getElementById('swal-title').value;
                const description = document.getElementById('swal-description').value;
                const imageFile = document.getElementById('swal-image').files[ 0 ];

                if (!title || !description || !imageFile) {
                    Swal.showValidationMessage('Tout les champs sont obligatoires !');
                    return;
                }

                return { title, description, imageFile };
            },

        }).then((result) => {
            if (result.isConfirmed) {
                const { title, description, imageFile } = result.value;

                // Exemple : traiter les données du formulaire
                console.log('Title:', title);
                console.log('Description:', description);
                console.log('Image File:', imageFile);

                // Afficher une alerte de succès
                Swal.fire({
                    icon: 'success',
                    title: 'Parfait !',
                    text: 'Vous avez bien ajouté un projet',
                });
            }
        });
    };

    return (

        <Button
            text="Ajouter un project"
            onClick={ buttonAddProject }
        />

    );
}

export default AddProject;