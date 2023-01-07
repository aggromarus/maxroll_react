import React from 'react';
import style from './LogoSocial.module.css'
import {ReactComponent as SvgLogo} from "../../../../Assets/mxr-logo-1color-01.svg";

const LogoSocial = () => {
    return (
        <div className={style.logo_col}>
            <a href="/">
                <SvgLogo className={style.logo}/>
            </a>
        </div>
    );
};

export default LogoSocial;