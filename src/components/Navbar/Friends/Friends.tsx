import React from 'react';
import s from './Friends.module.scss'

export function Friends() {
/*const myFriends = props.friend.friends.map(f => {
    return (
        <div key={f.id}>
            <img src="" alt=""/>
            <p>{f.name}</p>
            <p>{f.city}</p>
            <p>{f.site}</p>
            <p>{f.birthDay}</p>
            <p>{f.education}</p>
        </div>
    )
})*/
    return (
        <div className={s.friends}>
            {/*{myFriends}*/}
            friends
        </div>
    )
}