import React from 'react';
import s from './ProfileInfo.module.scss'

export function ProfileInfo() {
    return (
        <div className={s.profileInfo}>
            <div>
                <img src="https://proprikol.ru/wp-content/uploads/2020/06/krasivye-kartinki-zakaty-27.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}