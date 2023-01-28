import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean,
    login: string | null
}

const Header: React.FC<HeaderPropsType> = ({isAuth, login}) => {
    return (
        <header className={s.header}>
            <div className={s.headerContent}>
                <NavLink to='/news' className={s.logoContainer}>
                    <img className={s.logo}
                         src={'https://i.ibb.co/2k8K6Cc/removal-ai-tmp-6377ddd254878.png'}/>

                </NavLink>
                <NavLink to='/news' className={s.logoSignContainer}>
                    <img className={s.logoSign}
                         src={'https://i.ibb.co/dBDkq49/2synthwave-net-logo.png'}/>
                </NavLink>
                <NavLink to={isAuth ? '/logout' : '/login'} className={s.loginBtn}>
                    {/*<button>{isAuth ? login : 'Login'}</button>*/}
                    {isAuth
                        ? <><span>{`Welcome, ${login}`}</span><button>Log out</button></>
                        : <button>Log in</button>
                    }
                </NavLink>
            </div>
        </header>
    )
};

export default Header;