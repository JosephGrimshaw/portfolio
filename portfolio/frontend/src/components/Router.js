import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';

function PageRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    )
}

export default PageRouter;