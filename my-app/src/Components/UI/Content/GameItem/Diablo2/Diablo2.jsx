import React from "react";
import style from '../Comments/Post.module.css'
import {NavLink, Route, Routes} from "react-router-dom";
import Comments from "../Comments/Comments";
//TODO починить route для d2 и comments
//{D2} используем как презентационную компоненту для {Comments}
const Diablo2 = (props) => {
    console.log(props)
    return (
        <div className={style.wrapper}>
            <NavLink to={'/d2/comments'}>
                comments
                <img src="https://assets.maxroll.gg/wp-content/assets/img/d2r-banner-240x320.jpg" alt="123"/>
            </NavLink>
            <Routes><Route path="/comments" element={<Comments state={props.store.getState()}
                                                               dispatch={props.store.dispatch}/>
            }/></Routes>
        </div>
    );
};

export default Diablo2;