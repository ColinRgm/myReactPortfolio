// Import des dépendances pour les routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import des composants
import Navbar from './components/globalComponents/NavBar.jsx';

// Import des pages
import HomePage from './pages/HomePage.jsx';
import ParcoursPage from "./pages/ParcoursPage.jsx";
import PassionsPage from "./pages/PassionsPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ContactPage from './pages/ContactPage.jsx';

function App() {

    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={ <HomePage/> }/>
                    <Route path="/parcours" element={ <ParcoursPage/> }/>
                    <Route path="/passions" element={ <PassionsPage/> }/>
                    <Route path="/projects" element={ <ProjectsPage/> }/>
                    <Route path="/contact" element={ <ContactPage/> }/>
                </Routes>
            </Router>
        </>
    );
}

export default App;