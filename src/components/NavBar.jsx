import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const styles = {
        display: 'flex',
        justifyContent: "space-around"
    }

    const textStyle = {
        color: 'orange',
    }

    return (
        <nav style={ styles }>
            <ul>
                <li>
                    <Link to="/" style={ textStyle }>Accueil</Link>
                </li>
                <li>
                    <Link to="/parcours" style={ textStyle }>Parcours</Link>
                </li>
                <li>
                    <Link to="/passion" style={ textStyle }>Passions</Link>
                </li>
                <li>
                    <Link to="/project" style={ textStyle }>Projects</Link>
                </li>
                <li>
                    <Link to="/contact" style={ textStyle }>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;