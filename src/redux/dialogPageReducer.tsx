


const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT"
const ADD_MESSAGE_TEXT = "ADD-MESSAGE-TEXT"


export type ActionDialogsType = ChangeMessageTextType | AddMessageTextType
export type ChangeMessageTextType = ReturnType<typeof changeMessageTextAC>
export type AddMessageTextType = ReturnType<typeof addMessageTextAC>


export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
    messageText: string
}

export type DialogItemType = {
    id: number
    name: string
}

export type MessageItemType = {
    id: number;
    message: string;
}

const initialState  = {
    dialogs: [
        {id: 1, name: 'Dymych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Andrey'},
    ] as Array<DialogItemType>,
    messages: [
        {id: 1, message: 'How is your it-kamasutra'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Hi Andrey!'},
    ] as Array<MessageItemType>,
    messageText: "",
}
export type InitialStateType = typeof initialState

export const DialogsReducer = (state: InitialStateType = initialState, action: ActionDialogsType): InitialStateType => {
    {
        switch (action.type) {
            case CHANGE_MESSAGE_TEXT:
                return {
                    ...state,
                    messageText: action.messageText}
            case ADD_MESSAGE_TEXT:
                let newMessage = state.messageText
                return {
                    ...state,
                    messageText: "",
                    messages: [...state.messages, {
                        id: new Date().getTime(),
                        message: newMessage
                    }]
                }
            default: return state
        }
    }
}

export const changeMessageTextAC = (messageText: string) => {
    return {
        type: CHANGE_MESSAGE_TEXT,
        messageText: messageText
    } as const
}

export const addMessageTextAC = () => {
    return {
        type: ADD_MESSAGE_TEXT,
    } as const
}
