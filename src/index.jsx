import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Supports weights 100-900
import '@fontsource-variable/geist-mono';
import './index.css'
import App from './app'

createRoot(document.getElementById('main'))
    .render(<StrictMode><App /></StrictMode>)
