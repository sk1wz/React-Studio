import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
}

export default AppRouter;
