import React from "react";
import style from './Header.module.css'

const Header = (props) => {
    return <div>
        <div className={style.wrapper}>
            <div>
                <h1>
                    <a href="/">
                        <img src="https://about.gitlab.com/images/press/logo/preview/gitlab-logo-200-preview.png"
                             alt="logo"
                             className={style.headerLogo}/>
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

