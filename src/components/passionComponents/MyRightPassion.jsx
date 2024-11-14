import React from 'react';

function MyRightPassion({ title, description, url }) {

    const style = {
        display: 'grid',
        gridTemplateColumns: 'auto 150px',
        gridTemplateRows: '250px',

        width: '80%',

        fontFamily: "\"Courier New\", sans-serif, monospace",
        textAlign: 'right',
        alignItems: 'center',

        gap: "25px"
    }

    const imgStyle = {
        width: '150px',
        height: '150px',
    }


    return (
        <div style={ style }>

            <div style={ {
                borderRight: "#FC7A1E solid 3px",
                paddingRight: "25px"
            } }>
                <h3 style={ { color: "#FC7A1E" } }>{ title }</h3>
                <p>{ description }</p>
            </div>

            <img src={ url } alt={ title } style={ imgStyle }/>
        </div>
    )
}

export default MyRightPassion;