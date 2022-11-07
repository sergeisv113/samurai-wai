import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootState} from "../../../redux/reduxStore";
import {addMesageTextAC, changeMessageTextAC, DialogsPageType} from "../../../redux/dialogPageReducer";
import Dialogs from "./Dialogs";


type MapStateToPropsType = {
    DialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    changeTextMessageHandler: (newText: string) => void;
    addMessageTextHandler: () => void;
}

let mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        DialogsPage: state.DialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        changeTextMessageHandler: (newText: string) => {
            dispatch(changeMessageTextAC(newText))
        },
        addMessageTextHandler: () => {
            dispatch(addMesageTextAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

