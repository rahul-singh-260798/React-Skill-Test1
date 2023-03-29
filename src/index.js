import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/index.module.css'
import ExpressionProvider, { ResultProvider } from './Provider/ExpressionProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ExpressionProvider>
        <ResultProvider>
            <App />
        </ResultProvider>
    </ExpressionProvider>
);