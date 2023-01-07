import style from './Footer.module.css'
import React from "react";
import LogoSocial from "./Elements/LogoSocial";
//TODO исправить косяк с контейнером и гридами
const Footer = (props) => { //TODO добавить компоненты вместо дивов
  return <div className={style.footer_wrapper}>
      <div className={style.container}>
          <div className={style.bottom_menu}>
             <LogoSocial/>
              <div>Other Links
              <div>Team</div>
              <div>Contact</div>
              </div>
              <div>Games
              </div>
              <div>Copyright and other info</div>
          </div>
      </div>
  </div>
}

export default Footer
