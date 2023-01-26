import React, {useContext} from "react";
import style from './Content.module.css'
import GameItem from "./GameItem/GameItem";
import {StoreContext} from "../../Logic/redux-store";


const Content = () => {
    const contextState = useContext(StoreContext).getState().content.game
    let renderItem = contextState.map((game) => {
        return <GameItem key={game.id} name={game.name} img={game.img}/>
    });

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div><span className={style.textSpan}>Under construction</span></div>
                <div className={style.gameSelection}>
                    {renderItem}
                </div>
            </div>
        </div>
    );
};

export default Content;
