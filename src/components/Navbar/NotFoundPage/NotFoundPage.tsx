import React from 'react';
import s from './NotFoundPage.module.scss'

export function NotFoundPage() {
    return (
        <div className={s.notFoundPage}>
            Page 404
            <img src={require('./../../../img/404.jpg')} alt=""/>
        </div>
    )
}