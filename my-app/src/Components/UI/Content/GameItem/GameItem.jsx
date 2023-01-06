import React from 'react';
import style from './GameItem.module.css'
import {NavLink, Route, Routes} from "react-router-dom";
import Diablo2 from "./Diablo2/Diablo2";
import Diablo3 from "./Diablo3/Diablo3";
import PathOfExile from "./PathOfExile/PathOfExile";
const GameItem = (props) => {
/*let sourseRoutes = [
    {
        title: 'd2',
        path: '/',
        component: <Diablo2/>,
        exact: true
    },
    {
        title: 'd3',
        path: '/',
        component: <Diablo3/>,
        exact: true
    },
    {
        title: 'Poe',
        path: '/',
        component: <PathOfExile/>,
        exact: true
    }
]
    let sourceNew = sourseRoutes.map(item =>{
        <Route exact={item.exact} path={item.path} component={item.component}/>
    })*/
    return (
        <div className={style.game}>
            <NavLink to ={`/` + props.name} >
                <img src={props.img} alt=""/>
            </NavLink>
        </div>
    );
};

export default GameItem;