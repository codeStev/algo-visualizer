import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./components/App/App";

import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import {render} from "@testing-library/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
render(
  <React.StrictMode>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
  </React.StrictMode>,
    root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
