import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './fonts/fonts.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { AuthContextProvider } from './components/AuthContext';
import { GuildsContextProvider } from './components/GuildsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <GuildsContextProvider>
            <HashRouter>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </HashRouter>
        </GuildsContextProvider>
    </AuthContextProvider>
);
