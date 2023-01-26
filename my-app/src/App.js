import React from "react";
import './App.css';
import Header from "./UI/Header/Header";
import Footer from "./UI/Footer/Footer";
import Slider from "./UI/Components/Slider/Slider";
import CustomRouteMap from "./UI/CustomRouteMap";

function App() {
    return (
        //TODO ре рендер хедера в зависимости от компонента. Руками или динамически?
        //TODO добавить общий класс контейнер для элементов страницы-css
        <div className="App">
            <Header/>
            <Slider/>
            <CustomRouteMap/>
            <Footer/>
        </div>
    );
}

export default App;
