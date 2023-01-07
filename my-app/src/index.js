import './index.css';
import store from "./Components/BLL/store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderTree = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
    );
}
//blablabla
renderTree(store.getState());
store.subscribe(renderTree);