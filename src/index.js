import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';
import { currentMatch } from './Api';

const UserContext = createContext();

let newObject = {
      currentMatch: currentMatch
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
          <React.StrictMode> 
          <UserContext.Provider value={newObject}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          </UserContext.Provider>
        </React.StrictMode>
);

reportWebVitals();

export {UserContext};