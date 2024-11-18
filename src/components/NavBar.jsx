import React from 'react';

// Import des dépendances pour les routes
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

    const location = useLocation();

    const navStyles = {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',

        fontFamily: "\"Courier New\", sans-serif, monospace"
    };

    const ulStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
        listStyle: 'none',
        padding: 0,
        margin: 0,
    };

    const linkStyle = {
        color: '#453F3C',
        textDecoration: 'none',
        fontSize: '1em',
    };

    const activeStyle = {
        color: '#FC7A1E',
        fontWeight: 'bold',
    };


    return (
        <nav style={ navStyles }>
            <ul style={ ulStyles }>
                <li>
                    <Link
                        to="/parcours"
                        style={ {

                            // Style lien par défaut
                            ...linkStyle,

                            // Style lien actif
                            ...(location.pathname === '/parcours' ? activeStyle : {})
                        } }
                    >
                        Parcours
                    </Link>
                </li>
                <li>
                    <Link
                        to="/passions"
                        style={ {
                            ...linkStyle,
                            ...(location.pathname === '/passions' ? activeStyle : {})
                        } }
                    >
                        Passions
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        style={ {
                            ...linkStyle,
                            ...(location.pathname === '/' ? activeStyle : {})
                        } }
                    >
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link
                        to="/projects"
                        style={ {
                            ...linkStyle,
                            ...(location.pathname === '/projects' ? activeStyle : {})
                        } }
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        style={ {
                            ...linkStyle,
                            ...(location.pathname === '/contact' ? activeStyle : {})
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