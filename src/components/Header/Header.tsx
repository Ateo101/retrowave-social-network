import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logoContainer}>
                <NavLink to='/news'>
                    <img className={s.logo}
                         src={'https://i.ibb.co/2k8K6Cc/removal-ai-tmp-6377ddd254878.png'}/>
                </NavLink>
            </div>
            <img className={s.logoSign} src={'https://i.ibb.co/dBDkq49/2synthwave-net-logo.png'}/>
        </header>
    )
};

export default Header;