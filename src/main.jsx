import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gris from '../components/Gris.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <Gris />
  </StrictMode>,
)
