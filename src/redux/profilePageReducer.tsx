
const ADD_POST = "ADD-POST"
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT"

export type ActionProfileType = AddPostACType | changePostACType

type AddPostACType = ReturnType<typeof addPostAC>
type changePostACType = ReturnType<typeof changeNewPostTextAC>

export type PostType = {
    id: number;
    message: string;
    likesCount: number
}

const initialState = {
    posts: [
        {id: 1, message: 'My first post', likesCount: 123},
        {id: 2, message: 'My second post', likesCount: 15},
        {id: 3, message: 'My third post', likesCount: 12},
    ] as Array<PostType>,
    textPost: ""
}
export type InitialStateType = typeof initialState

export const ProfileReducer = (state: InitialStateType = initialState, action: ActionProfileType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost =  {
                id: new Date().getTime(),
                message: state.textPost,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                textPost: "",
            }
        case CHANGE_NEW_POST_TEXT:
            return {...state, textPost: action.text}
        default: return state
    }
}

export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}

export const changeNewPostTextAC = (text: string) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        text: text
    } as const
}