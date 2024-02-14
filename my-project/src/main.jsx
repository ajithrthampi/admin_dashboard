import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MaterialTailwindControllerProvider } from './context/index.jsx'
import { NavbarContext } from './context/NavbarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MaterialTailwindControllerProvider>    
          <App />
      </MaterialTailwindControllerProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
