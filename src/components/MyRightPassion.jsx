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
            <div style={ style }>

                <div style={ { borderRight: "#FC7A1E solid 3px", paddingRight: "25px" } }>
                    <h3 style={ { color: "#FC7A1E" } }>{ title }</h3>
                    <p>{ description }</p>
                </div>

                <img src={ url } alt={ title } style={imgStyle}/>
            </div>
        </>
    )
}

export default MyRightPassion;