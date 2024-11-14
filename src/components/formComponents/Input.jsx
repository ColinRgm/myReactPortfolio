import React from 'react';

function Input({type, placeholder}) {

    const styles = {
        width: '30%',
    }


    return (
        <input type={type} placeholder={placeholder} style={styles}/>
    )
}

export default Input;