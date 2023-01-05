import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Slider from "./Components/Slider/Slider";
import {BrowserRouter} from "react-router-dom";
import Content from "./Components/Content/Content";

function App() {
    return (
        <BrowserRouter>
            <div className="App container">
                <Header/>
                <Slider/>
                <Content/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
