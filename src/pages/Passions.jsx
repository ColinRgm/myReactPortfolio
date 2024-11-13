import React from 'react';

import MyRightPassion from "../components/MyRightPassion.jsx";
import MyLeftPassion from "../components/MyLeftPassion.jsx";

function Passions() {
    return (
        <div style={ { justifyItems: "center" } }>

            <MyRightPassion
                title="Hockey sur glace"
                description="Dès mon plus jeune âge, j’ai été introduit au hockey sur glace et plus précisément à l’équipe du Lausanne Hockey Club, ça a aussi été le premier sport que j’ai eu la chance de pratiquer ! Il y a une sorte de grande histoire d’amour entre ma famille et cette équipe."
                url="/img/hockey.png"
            />

            <MyLeftPassion
                title="UFC"
                description="Je suis l'UFC depuis un peu plus de deux ans maintenant, j'ai toujours eu un œil sur elle mais je ne m'y suis jamais vraiment intéressé plus en détails, c'est lorsque j'ai rencontré un collègue actuel qui suit cette organisation de près que j'ai vraiment commencé à m'y intéresser."
                url="/img/mma.png"
            />
        </div>
    );
}

export default Passions;