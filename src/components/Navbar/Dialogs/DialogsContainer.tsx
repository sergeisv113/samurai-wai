import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.scss'
import {DialogUser} from "./DialogUser/DialogUser";
import {MessagesUser} from "./MessageUser/MessagesUser";
import {AllActionType, dataUsersType, DialogsMessagesType} from "../../../Types/types";
import {addMessActionCreator, updateNewMessTextActionCreator} from "../../../redux/dialogPageReducer";

type PropsType = {
    dataUsers: Array<dataUsersType>
    dataMessage: Array<DialogsMessagesType>
    // addMess: (newDialogText: string) => void
    newDialogText: string
    // updateNewMessText: (newMessText: string) => void
    dispatch: (action: AllActionType) => void
}
export function Dialogs(props: PropsType) {
    let addMess = () => {
            // props.addMess(props.newDialogText)
            // props.dispatch({type: "ADD-MESS", newDialogText: props.newDialogText})
        props.dispatch(addMessActionCreator(props.newDialogText))
    }
    let onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {

            // props.updateNewMessText(event.currentTarget.value)
            // props.dispatch({type: "UPDATE-NEW-MESS-TEXT", newMessText: event.currentTarget.value})
        props.dispatch(updateNewMessTextActionCreator(event.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
               <DialogUser dataUsers={props.dataUsers}/>
            </div>
            <div className={s.messages}>
               <MessagesUser dataMessage={props.dataMessage}/>
            </div>
            <div>
                <div><textarea
                               value={props.newDialogText}
                               onChange={onChange}
                ></textarea></div>
                <div><button onClick={addMess}>add message</button></div>
            </div>
        </div>
    )
}