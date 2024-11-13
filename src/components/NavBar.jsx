import React from 'react';
import {Link} from "react-router-dom";

function NavBar() {

    const styles = {
        display: 'flex',
        justifyContent: "space-around"
    }

    const textStyle = {
        textDecoration: 'none',
        color: 'orange',
    }


    return (
        <nav style={styles}>
           <ul>
               <li style={textStyle}><Link to="/Home"/>Accueil</li>
               <li style={textStyle}><Link to="/Contact"/>Contact</li>
               <li style={textStyle}><Link to="/Parcours"/>Parcours</li>
               <li style={textStyle}><Link to="/Passion" href=""/>Passion</li>
               <li style={textStyle}><Link to="/Project" href=""/>Project</li>
           </ul>
        </nav>
    )
}



export default NavBar;