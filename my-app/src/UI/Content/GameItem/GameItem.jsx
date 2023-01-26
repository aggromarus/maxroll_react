import React from 'react';
import style from './GameItem.module.css'
import {NavLink} from "react-router-dom";

const GameItem = (props) => {
    return (
        <div className={style.game}>
            <NavLink to ={`/` + props.name} >
                <img src={props.img} alt=""/>
            </NavLink>
        </div>
    );
};

export default GameItem;