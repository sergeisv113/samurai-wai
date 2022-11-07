import React from 'react';
import s from './Post.module.scss'
import {PostType} from "../../../../../redux/state";



export function Post(props: PostType) {
    return (
        <div className={s.post} key={props.id}>
            <img src={require('./../../../../img/avatar.png')} alt=""/>
            <div>
                {props.message}
            </div>
            <div>
                <span>Like: {props.likesCount}</span>
            </div>
        </div>
    )
}