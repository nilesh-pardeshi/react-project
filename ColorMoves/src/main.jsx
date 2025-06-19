import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LudoBoard from './LudoBoard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LudoBoard />
  </StrictMode>,
)
