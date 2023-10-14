import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ViewRecipeDetails from './pages/viewRecipeDetails.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ViewRecipeDetails />
  </React.StrictMode>,
)
