import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMuddleWare from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMuddleWare));