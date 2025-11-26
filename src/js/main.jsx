import React from 'react'
import ReactDOM from 'react-dom/client'


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap"
import SecondsCounter from './components/SecondsCounter';

// index.css'
import '../styles/index.css'

// components
import Home from "./components/Home";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SecondsCounter/>
  </React.StrictMode>,
)
