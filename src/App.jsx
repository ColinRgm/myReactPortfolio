import React from 'react';

// Import des dépendances pour les routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar.jsx';
import Home from './pages/Home';
import Parcours from "./pages/Parcours.jsx";
import Passions from "./pages/Passions.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from './pages/Contact';

function App() {


    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                    <Route path="/parcours" element={ <Parcours/> }/>
                    <Route path="/passion" element={ <Passions/> }/>
                    <Route path="/project" element={ <Projects/> }/>
                    <Route path="/contact" element={ <Contact/> }/>
                </Routes>
            </Router>
        </>
    );
}

export default App;