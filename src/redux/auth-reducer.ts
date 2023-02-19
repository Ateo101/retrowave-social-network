import {Action, AnyAction, Dispatch} from "redux";
import {API} from "../api/api";
import {follow, setPendingFollow} from "./users-reducer";
import {stopSubmit} from "redux-form";

export type authDataType = {
    data: {
        id: number | null;
        login: string | null;
        email: string | null;
    },
    isAuth: boolean
    //messages: [];
    //fieldsErrors: [];
    //resultCode: number;
}

const initialState:authDataType = {
    data: {
        id: 20140,
        login: 'ateo101',
        email: null,
    },
    isAuth: false
}

const SET_AUTH_DATA = "SET-AUTH-DATA"

const authReducer = (state=initialState, action: authReducerActionsType):authDataType => {

    switch (action.type) {
        case SET_AUTH_DATA:
            debugger
            return {...state, data: {...state.data}, isAuth: action.payload.data.isAuth}
        default:
            return state
    }

}

type authReducerActionsType = setAuthDataACType

type setAuthDataACType = ReturnType<typeof setAuthDataAC>
export const setAuthDataAC = (data: { id: number | null, login: string | null, email: string | null, isAuth: boolean }) => {
    return {
        type: SET_AUTH_DATA,
        payload: {
            data
        }
    } as const
}


export const setAuthDataThunkCreator = () => {

    return (dispatch: Dispatch<authReducerActionsType>) => {
        API.getAuthData().then(data => {
            debugger
            const {id, login, email} = data.data
            data.resultCode === 0 && dispatch(setAuthDataAC({id, login, email, isAuth: true}))
            //
        })
    }

}

/*type loginACType = ReturnType<typeof loginAC>
export const loginAC = (data: { id: number, login: string, email: string }) => {
    return {
        type: SET_AUTH_DATA,
        payload: {
            data
        }
    } as const
}*/

export const loginTC = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<any>) => {
        API.login(email,password,rememberMe).then(res => {
            debugger
            if(res.data.resultCode === 0){
                debugger
                dispatch(setAuthDataThunkCreator())
            }
            else {
                dispatch(stopSubmit('login',{_error: res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'}))
            }
        })
    }
}
export const logoutTC = () => {
    return (dispatch: Dispatch<any>) => {
        API.logout().then(res => {
            if(res.data.resultCode === 0){
                dispatch(setAuthDataAC({id: null, login: null, email: null, isAuth: false}))
            }
        })
    }
}

export default authReducer;