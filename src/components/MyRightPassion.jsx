import React from 'react';

function MyRightPassion({ title, description, url }) {

    const style = {
        display: 'grid',
        gridTemplateColumns: 'auto 200px',
        gridTemplateRows: '200px',

        width: '80%',

        textAlign: 'right',
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

                <div style={ { borderRight: "3px solid orange", paddingRight: "25px" } }>
                    <h3 style={ { color: "orange" } }>{ title }</h3>
                    <p>{ description }</p>
                </div>

                <img src={ url } alt={ title } style={imgStyle}/>
            </div>
        </>
    )
}

export default MyRightPassion;