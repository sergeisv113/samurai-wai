import { combineReducers, createStore} from "redux";
import UsersReducer from "./siteBarReducer";
import { ProfileReducer} from "./profilePageReducer";
import {DialogsReducer} from "./dialogPageReducer";

const rootReducer = combineReducers({

    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    UsersPage: UsersReducer,
})

export const store = createStore(rootReducer)

export type AppRootState = ReturnType<typeof rootReducer>