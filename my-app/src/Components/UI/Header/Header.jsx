import React from "react";
import style from './Header.module.css'
import {ReactComponent as SvgLogo} from "../../../Assets/logo.svg";

const Header = (props) => {
    return <div className={style.header_wrapper}>
        <div className={style.floating_menu}>
            <div className={`${style.app_header} ${style.container}`}>
                <div>
                    <h1>
                        <a href="/">
                            <SvgLogo className={style.logo}/>
                        </a>
                    </h1>
                </div>
                <div className={style.nav_menu}>
                    <div className={style.nav_menu_item}>Games</div>
                    <div className={style.nav_menu_item}>Team</div>
                    <div className={style.nav_menu_item}>Contact</div>
                </div>
            </div>
        </div>
    </div>
}

export default Header

