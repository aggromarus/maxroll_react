import React from "react";
import style from './Header.module.css'
import {ReactComponent as SvgLogo} from "../../../Assets/logo.svg";

const Header = (props) => {
    return <div>
        <div className={style.headerMenu}>
            <div>
                <h1>
                    <a href="/">
                       <SvgLogo className={style.logo}/>
                    </a>
                </h1>
            </div>
            <div className={style.navMenu}>
                <button>Games</button>
                <button>Team</button>
                <button>Contact</button>
            </div>
        </div>
    </div>
}

export default Header

