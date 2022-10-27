import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { AnimatePresence } from 'framer-motion';
import { AuthContext } from './components/AuthContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import Sidebar from './components/Sidebar';

function App() {
    const user = useContext(AuthContext);

    const location = useLocation();

    const ProtectedRoute = ({ children }) => {
        if (!user) {
            return <Navigate to="/login" />;
        } else {
            console.log('your authenticated');
            return children;
        }
    };

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
                <Route
                    path="/:guildId/:channelId"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/:guildId"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </AnimatePresence>
    );
}

export default App;
