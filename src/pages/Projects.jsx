import React from 'react';

// Import des composants
import MyProject from '../components/MyProject';

function Projects() {

    const styles = {
        fontFamily: "\"Courier New\", sans-serif, monospace",
    }


    return (
        <div style={ styles }>
            <MyProject/>
        </div>
    );
}

export default Projects;