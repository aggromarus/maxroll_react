import React from "react";
import style from './Content.module.css'
import GameItem from "./GameItem/GameItem";

const Content = (props) => {
    let renderItem = props.gameArr.game.map((game) => {
        return <GameItem id={game.id} name={game.name} title={game.title} img={game.img}/>
    });

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div><span className={style.textSpan}>Choose a game</span></div>
                <div className={style.gameSelection}>
                    {renderItem}
                </div>
            </div>
        </div>
    );
};

export default Content;
