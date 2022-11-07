import React from 'react';
import s from './Navbar.module.scss'
import {NavLink, Outlet} from "react-router-dom";


export function Navbar(props: any) {
    return (
        <>
        <nav className={s.navbar}>
            <ul>
                <li>
                    <NavLink to={'/profile'}>Profile</NavLink>

                </li>
                <li>
                    <NavLink to={'/dialogs'}>Message</NavLink>
                </li>
                <li>
                    <NavLink to={'/news'}>News</NavLink>

                </li>
                <li>
                    <NavLink to={'/music'}>Music</NavLink>

                </li>
                <li>
                    <NavLink to={'/settings'}>Settings</NavLink>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}
{/*<NavLink to={'*'}>404</NavLink>*/}
