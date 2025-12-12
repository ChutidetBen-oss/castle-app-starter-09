// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MassageProvider from './context/MessageProvider.jsx'

createRoot(document.getElementById('root')).render(
  <MassageProvider>
    <App />
  </MassageProvider>
);
