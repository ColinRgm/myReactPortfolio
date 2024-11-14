import React from 'react';

function MyRightPassion({ title, description, url }) {

    const style = {
        display: 'grid',
        gridTemplateColumns: '150px auto',
        gridTemplateRows: '150px',

        width: '80%',

        fontFamily: "\"Courier New\", sans-serif, monospace",
        textAlign: 'left',
        alignItems: 'center',

        gap: "25px"
    }

    const imgStyle = {
        width: '150px',
        height: '150px',
    }


    return (
        <div style={ style }>

            <img src={ url } alt={ title } style={ imgStyle }/>

            <div style={ {
                borderLeft: "#FC7A1E solid 3px",
                paddingLeft: "25px"
            } }>
                <h3 style={ { color: "#FC7A1E" } }>{ title }</h3>
                <p>{ description }</p>
            </div>
        </div>
    )
}

export default MyRightPassion;