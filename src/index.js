import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './fonts/fonts.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/Discord-Clone">
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
);
