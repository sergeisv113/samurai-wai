import React from 'react';
import s from "../Dialogs.module.scss";

type DialogsMessagesType = {
    id: number
    message: string
}
export function MessagesUser(props: DialogsMessagesType) {

    return (
        <div>
            <div key={props.id} className={s.message}>{props.message}</div>
        </div>
    )
}