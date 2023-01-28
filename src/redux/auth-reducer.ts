import {Dispatch} from "redux";
import {API} from "../api/api";
import {follow, setPendingFollow} from "./users-reducer";

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
        id: null,
        login: null,
        email: null,
    },
    isAuth: false
}

const SET_AUTH_DATA = "SET-AUTH-DATA"

const authReducer = (state=initialState, action: authReducerActionsType):authDataType => {

    switch (action.type) {
        case SET_AUTH_DATA:
            return {...state, data: action.payload.data, isAuth: true}
        default:
            return state
    }

}

type authReducerActionsType = setAuthDataACType

type setAuthDataACType = ReturnType<typeof setAuthDataAC>
export const setAuthDataAC = (data: { id: number, login: string, email: string }) => {
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
            data.resultCode === 0 && dispatch(setAuthDataAC(data.data))
        })
    }

}

export default authReducer;