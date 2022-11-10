import React from 'react';
import s from './Users.module.scss'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from './../../../img/user.png'

export function Users(props: UsersPropsType) {
let getUsers = () => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)//user[]
        })
    }
}

    return (
        <div className={s.users}>
            <button onClick={getUsers}>getUsers</button>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div className={s.usersPhoto}><img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="User photo"/></div>
                        <div>
                            {u.followed ?
                                     <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                                     <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                            <div>{u.uniqueUrlName}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>
    )
}