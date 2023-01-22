import './index.css';
import store from "./Components/BLL/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderTree = () => {
    root.render(
        <BrowserRouter>
                <App store={store}/>
        </BrowserRouter>
    );
}

renderTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderTree(state);
});