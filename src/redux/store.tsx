import {StorePropsType} from "../Types/types";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import siteBarReducer from "./siteBarReducer";

let store: StorePropsType  = {
    _state:  {
        profilePage: {
            posts: [
                {id: 1, message: 'This is post text', likesCount: 12},
                {id: 2, message: 'Post text my blogs', likesCount: 22},
                {id: 3, message: 'My blogs', likesCount: 2},
                {id: 4, message: 'Text my', likesCount: 62}
            ],
            newPostText: '',
        },
        dialogPage: {
            dataUsers: [
                {id: 1, dialog: 'Dimych'},
                {id: 2, dialog: 'Andrey'},
                {id: 3, dialog: 'Sveta'},
                {id: 4, dialog: 'Sasha'},
                {id: 5, dialog: 'Victor'},
                {id: 6, dialog: 'Valera'},
            ],
            dataMessage: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Hello'},
                {id: 5, message: 'Nice'},
                {id: 6, message: 'Cool'},
            ],
            newDialogText: '',
        },
        siteBar: {
            friends: [
                {
                    id: 1,
                    name: 'Dimych Kuzuberdin',
                    birthDay: '20 May',
                    education: 'BelGU 2012',
                    city: 'Minsk',
                    site: 'https://it-kamasutra.com'
                },
                {
                    id: 2,
                    name: 'Andrey Pawlow',
                    birthDay: '5 Febrary',
                    education: 'KGU 2000',
                    city: 'Kiev',
                    site: 'https://www.pawlow-life.com'
                },
                {
                    id: 3,
                    name: 'Sveta Petrova',
                    birthDay: '1 August',
                    education: 'HNURE 2003',
                    city: 'Kharkov',
                    site: 'https://www.swit.com.ua'
                },
            ]
        }
    },
    getState() {
        return this._state
    },
    rerenderT() {
        console.log('State rerendre')
    },
    subscribe(observer) {
        this.rerenderT = observer
    },


    addPost() {

    },
    updateNewPostText(newText: string) {

    },
    addMess() {

    },
    updateNewMessText(newMessText: string) {

    },
    dispatch(action) {
             this._state.profilePage =  profilePageReducer(this._state.profilePage, action)
            this._state.dialogPage =  dialogPageReducer(this._state.dialogPage, action)
            this._state.siteBar =  siteBarReducer(this._state.siteBar, action)
             this.rerenderT()
        /*if (action.type === ADD_POST){
            const newP: PostType = {
                id: new Date().getTime(),
                // message: this._state.profilePage.newPostText,
                message: action.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newP)
            this._state.profilePage.newPostText = ''
            this.rerenderT()
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText
            this.rerenderT()
        } else  if (action.type === ADD_MESS){
            const newM: DialogsMessagesType = {
                id: new Date().getTime(),
                // message: this._state.dialogPage.newDialogText,
                message: action.newDialogText,
            }
            this._state.dialogPage.dataMessage.push(newM)
            this._state.dialogPage.newDialogText = ''
            this.rerenderT()
        } else if (action.type === UPDATE_NEW_MESS_TEXT){
            this._state.dialogPage.newDialogText = action.newMessText
            this.rerenderT()
        }*/

    }
}

export default store