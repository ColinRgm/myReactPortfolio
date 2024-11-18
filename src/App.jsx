import React from 'react';

// Import des dépendances pour les routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import des composants
import Navbar from './components/NavBar.jsx';

// Import des pages
import Home from './pages/Home';
import Parcours from "./pages/Parcours";
import Passions from "./pages/Passions";
import Projects from "./pages/Projects";
import Contact from './pages/Contact';

function App() {

    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                    <Route path="/parcours" element={ <Parcours/> }/>
                    <Route path="/passions" element={ <Passions/> }/>
                    <Route path="/projects" element={ <Projects/> }/>
                    <Route path="/contact" element={ <Contact/> }/>
                </Routes>
            </Router>
        </>
    );
}

export default App;