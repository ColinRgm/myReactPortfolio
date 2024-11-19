// Import des dépendances
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

    const location = useLocation();

    const navStyles = {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#DADADA',
        zIndex: 1000,


        // Contenu de la NavBar
        ulStyles: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '50%',
            listStyle: 'none',
            padding: 0,
            margin: 0,

            // Lien de la NavBar
            linkStyle: {
                color: '#453F3C',
                textDecoration: 'none',
                fontSize: '1em',
            },

            // Lien actif de la NavBar
            activeStyle: {
                color: '#FC7A1E',
                fontWeight: 'bold',
            }
        }
    };

    return (

        <nav style={ navStyles }>
            <ul style={ navStyles.ulStyles }>
                <li>
                    <Link
                        to="/parcours"
                        style={ {

                            // Style lien par défaut
                            ...navStyles.ulStyles.linkStyle,

                            // Style lien actif
                            ...(location.pathname === '/parcours' ? navStyles.ulStyles.activeStyle : {})
                        } }
                    >
                        Parcours
                    </Link>
                </li>
                <li>
                    <Link
                        to="/passions"
                        style={ {
                            ...navStyles.ulStyles.linkStyle,
                            ...(location.pathname === '/passions' ? navStyles.ulStyles.activeStyle : {})
                        } }
                    >
                        Passions
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        style={ {
                            ...navStyles.ulStyles.linkStyle,
                            ...(location.pathname === '/' ? navStyles.ulStyles.activeStyle : {})
                        } }
                    >
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link
                        to="/projects"
                        style={ {
                            ...navStyles.ulStyles.linkStyle,
                            ...(location.pathname === '/projects' ? navStyles.ulStyles.activeStyle : {})
                        } }
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        style={ {
                            ...navStyles.ulStyles.linkStyle,
                            ...(location.pathname === '/contact' ? navStyles.ulStyles.activeStyle : {})
                        } }
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>

    );
}

export default Navbar;