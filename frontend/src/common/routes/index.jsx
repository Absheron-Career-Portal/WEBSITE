import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../../components/layout/navbar';
import Home from '../../components/pages/home';
import Vacancies from '../../components/elements/vacancies'; 
import Error from '../../components/pages/error';

const AppRoutes = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vacancies" element={<Vacancies />} />
                <Route path="/vacancies/:jobSlug" element={<Vacancies />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;