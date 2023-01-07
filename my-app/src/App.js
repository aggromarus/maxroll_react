import React from "react";
import './App.css';
import Header from "./Components/UI/Header/Header";
import Footer from "./Components/UI/Footer/Footer";
import Slider from "./Components/UI/Slider/Slider";
import {Route, Routes} from "react-router-dom";
import Content from "./Components/UI/Content/Content";
import Diablo2 from "./Components/UI/Content/GameItem/Diablo2/Diablo2";
import PathOfExile from "./Components/UI/Content/GameItem/PathOfExile/PathOfExile";
import Diablo3 from "./Components/UI/Content/GameItem/Diablo3/Diablo3";

function App(props) {
    return (
        //TODO ререндер хедера в зависимости от компонента. Руками или динамически?
        //TODO добавить общий класс контейнер для элементов страницы
        <div className="App">
            <Header/>
            <Slider/>
            <Routes>
                <Route path="/d2" element={<Diablo2 state={props.state}
                                                    dispatch={props.dispatch}/>}/>
                <Route path="/d3" element={<Diablo3/>}/>
                <Route path="/Poe" element={<PathOfExile/>}/>
                <Route path="/" element={<Content gameArr={props.state}/>}/>
            </Routes>
            <Footer state={props.state}
                    dispatch={props.dispatch}/>
        </div>
    );
}

export default App;
