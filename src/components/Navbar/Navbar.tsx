import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/profile" activeClassName={s.active} >
                <div className={s.navItem}>
                    Profile
                </div>
            </NavLink>
            <NavLink to="/dialogs" activeClassName={s.active}>
                <div className={s.navItem}>
                    Messages
                </div>
            </NavLink>
            <NavLink to="/users" activeClassName={s.active}>
                <div className={s.navItem}>
                    Users
                </div>
            </NavLink>
            <div className={s.navItem}>
                News
            </div>
            <div className={s.navItem}>
                Music
            </div>
            <div className={s.navItem}>
                Settings
            </div>
        </nav>
    )
};

export default Navbar;