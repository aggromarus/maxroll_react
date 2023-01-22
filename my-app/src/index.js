import './index.css';
import store from "./Components/BLL/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App state={store.getState()}/>
            </Provider>
        </BrowserRouter>
    )