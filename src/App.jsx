import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar.jsx";

// Import des pages
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Parcours from "./pages/Parcours.jsx";
import Passion from "./pages/Passion.jsx";
import Project from "./pages/Project.jsx";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Parcours" element={<Parcours />} />
                <Route path="/Passion" element={<Passion />} />
                <Route path="/Project" element={<Project />} />
            </Routes>
        </Router>
    );
}

export default App
