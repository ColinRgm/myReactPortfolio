import React from 'react';

// Import des composants
import MyRightPassion from "../components/MyRightPassion.jsx";
import MyLeftPassion from "../components/MyLeftPassion.jsx";

function Passions() {

    const content = {
        justifyItems: "center",
        marginTop: "150px",
        marginBottom: "50px"
    }


    return (

        <div style={ content }>

            <MyRightPassion
                title="Hockey sur glace"
                description="Dès mon plus jeune âge, j’ai été introduit au hockey sur glace et plus précisément à
            l’équipe du Lausanne Hockey Club, ça a aussi été le premier sport que j’ai eu la chance de pratiquer !
            Il y a une sorte de grande histoire d’amour entre ma famille et cette équipe."
                url="/img/hockey.png"
            />

            <MyLeftPassion
                title="UFC"
                description="Je suis l'UFC depuis un peu plus de deux ans maintenant, j'ai toujours eu un œil sur
            elle mais je ne m'y suis jamais vraiment intéressé plus en détails, c'est lorsque j'ai rencontré un
            collègue actuel qui suit cette organisation de près que j'ai vraiment commencé à m'y intéresser."
                url="/img/mma.png"
            />

            <MyRightPassion
                title="Voyage"
                description="Tout au long de mon enfance j'ai eu la chance de visiter plusieurs pays à travers le monde,
            ce qui m'a permis de voir différentes cultures mais aussi de développer ma passion pour les voyages.
            J'ai notament effectué un voyage linguistique de 6 mois à Brisbane."
                url="/img/trip.jpeg"
            />

            <MyLeftPassion
                title="Tatouage"
                description="J'ai, depuis que je suis tout jeune, eu un œil sur le monde du tatouage j'ai également
            toujours dis vouloir en avoir, c'est le jour de mes 18 ans que je me ferrais faire mon premier tatouage.
            Puis en 2019, j'ai décidé d'acheter ma première machine à tatouer pour m'y essayer."
                url="/img/tattoo.jpeg"
            />

            <MyRightPassion
                title="Déeveloppement web"
                description="J'ai découvert la programmation en avril 2021 lors d'un stage découverte et j'ai tout de suite
            énormément apprécié ce métier, c'est qui m'a, entre autre, donné envie de faire cet apprentissage.
            Malgré quelque difficulté quant à la logique de certains languages, je reste toujours à l'affût
            des nouveauté et vais constemment chercher à apprendre de nouvelles choses"
                url="/img/developpement.jpeg"
            />
        </div>);
}

export default Passions;