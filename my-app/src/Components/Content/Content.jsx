import React from "react";
import style from './Content.module.css'
import GameItem from "./GameItem/GameItem";

const Content = (props) => {
    let renderItem = props.gameArr.map((game) => {
        return <GameItem id={game.id} name={game.name} title={game.title} img={game.img}/>
    });

    return (
        <div className={style.wrapper}>
            <div><span className={style.textSpan}>Choose a game</span></div>
            <div className={style.gameSelection}>
                {renderItem}
            </div>
        </div>
    );
};

export default Content;
