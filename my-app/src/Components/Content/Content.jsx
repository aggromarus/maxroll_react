import React from "react";
import style from './Content.module.css'
import GameItem from "./GameItem/GameItem";
const Content = (props) => {
    let img = 'https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs'
    return (
        <div className={style.wrapper}>
            <div><span className={style.textSpan}>Choose a game</span></div>
            <div className={style.gameSelection}>
                <GameItem name='d2' title='Diablo II' id='1' img ={img}/>
                <GameItem name='d3' title='Diablo III' id='2' img ={img}/>
                <GameItem name='PoE' title='Path of Exile' id='3' img ={img}/>
            </div>
        </div>
    );
};

export default Content;