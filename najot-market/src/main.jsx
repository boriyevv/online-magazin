import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import axios from 'axios'


axios.defaults.baseURL = "https://fakestoreapi.com"
axios.defaults.headers.access_token = localStorage.getItem("token")


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
    <ToastContainer/>
  </Router>,
)
