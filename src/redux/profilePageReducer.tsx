
const ADD_POST = "ADD-POST"
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT"

export type ActionProfileType = AddPostACType | changePostACType

type AddPostACType = ReturnType<typeof addPostAC>
type changePostACType = ReturnType<typeof changeNewPostTextAC>

export type ProfilePageType = {
    Posts: Array<PostType>
    textPost: string
}

export type PostType = {
    id: number;
    message: string;
    likesCount: number
}

const initialState: ProfilePageType = {
    Posts: [
        {id: 1, message: 'My first post', likesCount: 123},
        {id: 2, message: 'My second post', likesCount: 15},
        {id: 3, message: 'My third post', likesCount: 12},
    ],
    textPost: ""
}
export const ProfileReducer = (state: ProfilePageType = initialState, action: ActionProfileType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = state.textPost
            return {
                ...state, textPost: "",
                Posts: [...state.Posts, {
                    id: new Date().getTime(),
                    message: newPost,
                    likesCount: 0
                }]}

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