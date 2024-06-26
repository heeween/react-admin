import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reset-css'
import 'assets/styles/global.scss'
import App from "./App"
import Home from "components/Home/Home"
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

