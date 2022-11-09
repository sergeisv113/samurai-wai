import { combineReducers, createStore} from "redux";
import { ProfileReducer} from "./profilePageReducer";
import {DialogsReducer} from "./dialogPageReducer";
import {UsersReducer} from "./usersPageReducer";

const rootReducer = combineReducers({

    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    UsersPage: UsersReducer,
})

export const store = createStore(rootReducer)

export type AppRootState  = ReturnType<typeof rootReducer>