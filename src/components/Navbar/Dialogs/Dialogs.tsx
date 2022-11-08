import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.scss'
import {addMessageTextAC, DialogsPageType} from "../../../redux/dialogPageReducer";
import {store} from "../../../redux/reduxStore";
import Message from "./MessageUser/MessagesUser";
import DialogItem from "./DialogItem/DialogItem";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    changeTextMessageHandler: (newText: string) => void
    addMessageTextHandler: () => void
}

const Dialogs = (props: DialogsPropsType) => {

    const changeTextMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.changeTextMessageHandler(newText)
    }

    const addMessageTextHandler = () => {
        store.dispatch(addMessageTextAC())
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>Dialogs
                {props.dialogsPage.dialogs.map(dialogItem => {
                    return <DialogItem key={dialogItem.id} name={dialogItem.name} id={dialogItem.id}/>
                })}
            </div>
            <div>
                <div className={s.messages}>Messages
                    {props.dialogsPage.messages.map(messageItem => {
                        return <Message key={messageItem.id} message={messageItem.message}/>
                    })}
                </div>
                <div className={s.sender}>
                    <textarea value={props.dialogsPage.messageText}
                              onChange={changeTextMessageHandler}></textarea>
                    <button onClick={addMessageTextHandler}>send the message</button>
                </div>
            </div>
        </div>

    );
};

export default Dialogs;