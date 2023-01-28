import {Dispatch} from "redux";
import {API} from "../api/api";
import {setAuthDataAC} from "./auth-reducer";

export type profileInfoType = {
    avatar: string,
    profileBioText: string,
}
export type postType = {
    id: string,
    avatar: string
    userName: string,
    message: string,
    likesCount: number,
}
export type profilePageType = {
    profileInfo: profileInfoType,
    posts: postType[],
    newPostText: string,
    profilePageData: profilePageDataType | null
}
export type profilePageDataType = {
    aboutMe: string
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string,
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

const ADD_POST = "ADD-POST"
const UPD_POST_TEXT = "UPD-POST-TEXT"
const SET_USER_PROFILE_PAGE = "SET-USER-PROFILE-PAGE"

const initialState: profilePageType = {
    profileInfo: {avatar: 'https://i.ibb.co/Gc3qXtB/ava-synthwave.png',profileBioText: `Hey! I'm Ryan and this is my bio`},
    posts: [
        {id: '0', avatar: 'https://i.ibb.co/Gc3qXtB/ava-synthwave.png', userName: 'Ryan', message: `It's one thing you should know about me`, likesCount: 10},
        {id: '0', avatar: 'https://i.ibb.co/Gc3qXtB/ava-synthwave.png', userName: 'Ryan', message: `I don't have wheels on my car`, likesCount: 25},
        {id: '0', avatar: 'https://i.ibb.co/Gc3qXtB/ava-synthwave.png', userName: 'Ryan', message: `I drive.`, likesCount: 8},
    ],
    newPostText: '',
    profilePageData: null
}

const profileReducer = (state=initialState, action: ProfileReducerACType): profilePageType => {

    switch (action.type) {
        case ADD_POST:
            //state.posts.push({ id: '0', userName: 'Ryan', message: action.text, likesCount: 0 })
            return {...state, posts: [...state.posts,{ id: '0', avatar: 'https://i.ibb.co/Gc3qXtB/ava-synthwave.png', userName: 'Ryan', message: action.payload.text, likesCount: 0 }]}
        case UPD_POST_TEXT:
            //state.newPostText = action.text
            return {...state, newPostText: action.payload.text}
        case SET_USER_PROFILE_PAGE:
            return  {...state, profilePageData: action.payload.profile === null
                    ? null
                    : action.payload.profile}
        default:
            return state
    }

}

type ProfileReducerACType = addPostACType | updPostTextACType | setUserProfileACType

type addPostACType = ReturnType<typeof addPost>
export const addPost = (text: string) => {
    return {
        type: ADD_POST,
        payload: {
            text
        }
    } as const
}

type updPostTextACType = ReturnType<typeof updPostText>
export const updPostText = (text: string) => {
    return {
        type: UPD_POST_TEXT,
        payload: {
            text
        }
    } as const
}

type setUserProfileACType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: profilePageDataType | null) => {
    return {
        type: SET_USER_PROFILE_PAGE,
        payload: {
            profile
        }
    } as const
}

export const setUserProfileThunkCreator = (userId: string) => {

    return (dispatch: Dispatch<ProfileReducerACType>) => {
        if (!userId) {
            userId = '20140'
        }
        API.getUserProfile(+userId).then(data => {
            dispatch(setUserProfile(data))
        }).catch(reason => {
            console.log(reason)
        })
    }

}

export const addPostThunkCreator = (text: string) => {
    return (dispatch: Dispatch<ProfileReducerACType>) => {
        dispatch(addPost(text))
    }
}

export const updPostTextThunkCreator = (text: string) => {
    return (dispatch: Dispatch<ProfileReducerACType>) => {
        dispatch(updPostText(text))
    }
}

export default profileReducer;