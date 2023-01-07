import style from './Footer.module.css'
import React from "react";
import {NavLink} from "react-router-dom";
import {ReactComponent as LogoSocial} from "../../../Assets/mxr-logo-1color-01.svg";

const Footer = (props) => { //TODO добавить компоненты вместо дивов
    return <div className={style.footer_wrapper}>
        <div className={style.container}>
            <div className={style.bottom_menu}>
                <NavLink to="/">
                    <LogoSocial className={style.logo}/>
                </NavLink>
                <div>Other Links
                    <div>Team</div>
                    <div>Contact</div>
                </div>
                <div>Games
                    <div className={style.game_list}><NavLink to="/d2">D2</NavLink></div>
                </div>
            </div>
        </div>
    </div>
}

export default Footer
