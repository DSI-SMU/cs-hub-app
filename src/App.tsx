import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/password" element={<ForgetPasswordPage />} />
                <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
            </Routes>
        </Router>
    );
}

export default App;
