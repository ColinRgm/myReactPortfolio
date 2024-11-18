// Import des dépendances
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

        // Style pour le curseur clignotant
        const cursorStyle = {
            display: 'inline-block',
            width: '0',
            backgroundColor: '#453F3C',
            animation: 'blink 1.2s steps(1) infinite',
            fontWeight: '100',
        };

        return (
            <h1>
                { currentText }
                <span style={ cursorStyle }>|</span>
            </h1>
        );
    };

    const content = {
        color: "#453F3C",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',

        titleStyle: {
            fontSize: 15,
            fontWeight: 'bold'
        }
    };

    return (
        <>
            <style>
                {`
                    @keyframes blink {
                        0%, 50% { opacity: 1; }
                        50%, 100% { opacity: 0; }
                    }
                `}
            </style>

            <div style={ content }>
                <h1 style={ content.titleStyle }>
                    <Typewriter text="Bonjour, je m'appelle Colin Regamey" delay={ 150 }/>
                </h1>
                <h2>Bienvenue sur mon portfolio</h2>
            </div>
            );
        </>
    )
}

export default Home;
