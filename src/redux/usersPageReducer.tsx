
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

export type actionUsersPropsType = followACType | unfollowACType | setUsersACType

type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>


export type UserType = {
    id: number,
    photos: {small: string, large: string}
    followed: boolean,
    name: string,
    uniqueUrlName: string
    status: string,
    location: {country: string, city: string}
}

const initialState = {
    users: [
       /* {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVX9gs9cJfYpN9OOGOqRnHfhwk8qcGxL1SBg&usqp=CAU',  followed: false, fullName: 'Dmitry K', status: 'I am a boss', location: {country: 'Belarus', city: 'Minsk'} },
        {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVX9gs9cJfYpN9OOGOqRnHfhwk8qcGxL1SBg&usqp=CAU',  followed: true, fullName: 'Sergey D', status: 'My positive', location: {country: 'Ukraine', city: 'Kiev'} },
        {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVX9gs9cJfYpN9OOGOqRnHfhwk8qcGxL1SBg&usqp=CAU',  followed: true, fullName: 'Anna', status: 'I lowe world', location: {country: 'Russian', city: 'Moscow'} },
        {id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVX9gs9cJfYpN9OOGOqRnHfhwk8qcGxL1SBg&usqp=CAU',  followed: false, fullName: 'Taras C', status: 'Hello post', location: {country: 'Belarus', city: 'Minsk'} },*/
    ] as Array<UserType>
}
export type InitialStateType = typeof initialState

export const UsersReducer = (state: InitialStateType = initialState, action: actionUsersPropsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId) {
                        return{...u, followed: true}
                    }
                    return u
                })  //copy all state(state+users) users: [...state.users]
            }

        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId) {
                        return{...u, followed: false}
                    }
                    return u
                })  //copy all state(state+users) users: [...state.users]
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}

        default: return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
