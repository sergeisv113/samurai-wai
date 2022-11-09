import React from 'react';
import s from './Users.module.scss'
import {UsersPropsType} from "./UsersContainer";


export function Users(props: UsersPropsType) {
    return (
        <div className={s.users}>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div className={s.usersPhoto}><img src={u.photoUrl} alt="User photo"/></div>
                        <div>
                            {u.followed ?
                                     <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                                     <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>
    )
}