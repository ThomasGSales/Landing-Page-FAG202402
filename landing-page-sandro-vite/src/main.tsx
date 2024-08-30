import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home.tsx'
import Header from './pages/header.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>
)
