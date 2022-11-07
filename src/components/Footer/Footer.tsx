import React from 'react';
import s from './Footer.module.scss'
import {TheHeader} from "../Ava/TheHeader/TheHeader";

export function Footer() {
    return (
        <div className={s.footer}>
            <div>
                <TheHeader />
            </div>
        </div>
    )
}