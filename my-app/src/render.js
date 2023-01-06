import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./Components/BLL/state";


 export let renderTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <App appState={state} addPost={addPost}/>
        </BrowserRouter>
    );
}
