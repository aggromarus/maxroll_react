import React from 'react';
import style from './GameItem.module.css'
import {NavLink} from "react-router-dom";
/*import Diablo2 from "./Diablo2/Diablo2";
import Diablo3 from "./Diablo3/Diablo3";
import PathOfExile from "./PathOfExile/PathOfExile";*/
const GameItem = (props) => {
    {/* <Route path={`/` + props.name} render={() => <Diablo2 />} />
            <Route path={`/` + props.name} render={() => <Diablo3 />} />
            <Route path={`/` + props.name} render={() => <PathOfExile />} />*/}
    return (
        <div className={style.game}>
            <NavLink to ={`/` + props.name} >
                <img src={props.img} alt=""/>
            </NavLink>
        </div>
    );
};

export default GameItem;