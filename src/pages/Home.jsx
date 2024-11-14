import React, { useEffect } from 'react';

function Home() {

    const Typewriter = ({ text, delay }) => {
        const [currentText, setCurrentText] = React.useState('');
        const [currentIndex, setCurrentIndex] = React.useState(0);

        useEffect(() => {
            if (currentIndex < text.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(prevText => prevText + text[ currentIndex ]);
                    setCurrentIndex(prevIndex => prevIndex + 1);
                }, delay);

                return () => clearTimeout(timeout);
            }
        }, [currentIndex, delay, text]);

        return <h1>{ currentText }</h1>
    }

    const styles = {
        color: "#453F3C",
        fontFamily: "\"Courier New\", sans-serif, monospace",

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
    }

    return (

        <div style={ styles }>
            <h1 style={ { fontSize: 15, fontWeight: 'bold' } }>
                <Typewriter text="Bonjour, je m'appelle Colin Regamey" delay={ 200 }/>
            </h1>
            <h2>Bienvenue sur mon portfolio</h2>
        </div>
    );
}

export default Home;