import React from "react";
import style from '../Comments/Post.module.css'
import {NavLink, Route, Routes} from "react-router-dom";
import Runes from "../Runes";
import Comments from "../Comments/Comments";
/*import CommentsContainer from "../Comments/CommentsContainer";*/
//TODO починить route для d2 и comments
//{D2} используем как презентационную компоненту для {Comments}
const Diablo2 = () => {
    return (
        <div className={style.wrapper}>
{/*            <div>
                <NavLink to={'/d2/comments'}>
                <img className={style.small__img} src={process.env.PUBLIC_URL + '/img/logo1.png'} alt="img"/>
            </NavLink>
            </div>*/}
            <NavLink to={'runes'}>
                <img className={style.small__img} src={process.env.PUBLIC_URL + '/img/logo1.png'} alt="img"/>
            </NavLink>
            <Routes>
                <Route path="runes" element={<Runes/>}/>
                {/*<Route path=":comments" element={<Comments/>}/>*/}
            </Routes>
        </div>
    );
};

export default Diablo2;