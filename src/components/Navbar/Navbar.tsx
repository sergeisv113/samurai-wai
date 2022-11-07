import React from 'react';
import s from './Navbar.module.scss'
import {NavLink} from "react-router-dom";


export function Navbar() {

    return (
        <nav className={s.navbar}>
                <div className={s.item}>
                    <NavLink to={'/profile'} className={({isActive}) => isActive ? s.active : ''}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/dialogs'}  className={({isActive}) => isActive ? s.active : ''}>Message</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/news'}  className={({isActive}) => isActive ? s.active : ''}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/friends'}  className={({isActive}) => isActive ? s.active : ''}>Friends</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/music'}  className={({isActive}) => isActive ? s.active : ''}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/settings'}  className={({isActive}) => isActive ? s.active : ''}>Settings</NavLink>
                </div>
        </nav>
    )
}
{/*<NavLink to={'*'}>404</NavLink>*/}
