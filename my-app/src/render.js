import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from "./Components/BLL/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
 export let renderTree = (state) => {
    root.render(
        <BrowserRouter>
            <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
    );
}
