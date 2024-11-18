// Import des composants
import MyPassion from "../components/MyPassion.jsx";

const myPassions = [
    {
        title: "Hockey sur glace",
        description: "Dès mon plus jeune âge, j’ai été introduit au hockey sur glace et plus précisément à l’équipe du Lausanne Hockey Club, ça a aussi été le premier sport que j’ai eu la chance de pratiquer, à l'âge de seulement 3 ans ! Il y a une sorte de grande histoire d’amour entre ma famille et cette équipe.",
        url: "/img/hockey.png"
    },
    {
        title: "UFC",
        description: "Je suis l'UFC depuis un peu plus de deux ans maintenant, j'ai toujours eu un œil sur elle mais je ne m'y suis jamais vraiment intéressé plus en détails, c'est lorsque j'ai rencontré un collègue actuel qui suit cette organisation de près que j'ai vraiment commencé à m'y intéresser.",
        url: "/img/mma.png"
    },
    {
        title: "Voyage",
        description: "Tout au long de mon enfance j'ai eu la chance de visiter plusieurs pays à travers le monde, ce qui m'a permis de voir différentes cultures mais aussi de développer ma passion pour les voyages. J'ai notament effectué un voyage linguistique de 6 mois à Brisbane.",
        url: "/img/trip.jpeg"
    },
    {
        title: "Tatouage",
        description: "J'ai, depuis que je suis tout jeune, eu un œil sur le monde du tatouage j'ai également toujours dis vouloir en avoir, c'est le jour de mes 18 ans que je me ferrais faire mon premier tatouage. Puis en 2019, j'ai décidé d'acheter ma première machine à tatouer pour m'y essayer.",
        url: "/img/tattoo.jpeg"
    },
    {
        title: "Développement web",
        description: "J'ai, depuis que je suis tout jeune, eu un œil sur le monde du tatouage j'ai également toujours dis vouloir en avoir, c'est le jour de mes 18 ans que je me ferrais faire mon premier tatouage. Puis en 2019, j'ai décidé d'acheter ma première machine à tatouer pour m'y essayer.",
        url: "/img/developpement.jpeg"
    },
]

function Passions() {

    const content = {
        justifyItems: "center",
        marginTop: "150px",
        marginBottom: "50px",
    }


    return (
        <div style={ content }>
            {myPassions.map((item, index) => (
                <MyPassion
                key={ index }
                title={ item.title }
                description={ item.description }
                url={ item.url }
                reverse={index % 2 === 1}
                />
            ))}
        </div>
    )
}

export default Passions;