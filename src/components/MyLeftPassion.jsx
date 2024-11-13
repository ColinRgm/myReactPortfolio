import React from 'react';

function MyRightPassion({ title, description, url }) {

    const style = {
        display: 'grid',
        gridTemplateColumns: '200px auto',
        gridTemplateRows: '200px',

        width: '80%',

        textAlign: 'left',
        alignItems: 'center',

        gap: "25px"
    }

    const imgStyle = {
        width: '200px',
        height: '200px',
    }

    return (
        <>
            {/* Left text and right image */ }
            <div style={ style }>

                <img src={ url } alt={ title } style={ imgStyle } />

                <div style={ { borderLeft: "3px solid orange", paddingLeft: "25px" } }>
                    <h3  style={ { color: "orange" } }>{ title }</h3>
                    <p>{ description }</p>
                </div>
            </div>
        </>
    )
}

export default MyRightPassion;