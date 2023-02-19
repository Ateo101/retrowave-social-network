import {Dispatch} from "redux";
import {API} from "../api/api";

export type profileInfoType = {
    userId: number,
    userName: string,
    avatar: string,
    profileBioText: string,
}
export type postType = {
    id: number,
    avatar: string
    userName: string,
    message: string,
    likesCount: number,
}
export type profilePageType = {
    profileInfo: profileInfoType,
    posts: postType[],
    newPostText: string,
    //profilePageData: profilePageDataType | null
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
const SET_USER_PROFILE_PAGE = "SET-USER-PROFILE-PAGE"
const SET_USER_STATUS = "SET-USER-STATUS"

const initialState: profilePageType = {
    profileInfo: {
        userId: 20140,
        userName: 'Ryan',
        avatar: 'https://i.ibb.co/Gc3qXtB/ava-synthwave.png',
        profileBioText: `Hey! I'm Ryan and this is my bio`,
    },
    posts: [
        {
            id: 20140,
            avatar: 'https://i.ibb.co/Gc3qXtB/ava-synthwave.png',
            userName: 'Ryan',
            message: `It's one thing you should know about me`,
            likesCount: 10
        },
        {
            id: 20140,
            avatar: 'https://i.ibb.co/Gc3qXtB/ava-synthwave.png',
            userName: 'Ryan',
            message: `I don't have wheels on my car`,
            likesCount: 25
        },
        {
            id: 20140,
            avatar: 'https://i.ibb.co/Gc3qXtB/ava-synthwave.png',
            userName: 'Ryan',
            message: `I drive.`,
            likesCount: 8
        },
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action: ProfileReducerACType): profilePageType => {

    switch (action.type) {
        case ADD_POST:
            //state.posts.push({ id: '0', userName: 'Ryan', message: action.text, likesCount: 0 })
            return {
                ...state,
                posts: [...state.posts, {
                    id: 20140,
                    avatar: 'https://i.ibb.co/Gc3qXtB/ava-synthwave.png',
                    userName: 'Ryan',
                    message: action.payload.text,
                    likesCount: 0
                }]
            }
        case SET_USER_PROFILE_PAGE:
            let avatar = action.payload.profile?.photos.small
                ? action.payload.profile.photos.small
                : 'https://i.ibb.co/Gc3qXtB/ava-synthwave.png'
            /*let profileBioText = action.payload.profile?.aboutMe
                ? action.payload.profile.aboutMe
                : 'No bio text'*/
            let userName = action.payload.profile?.fullName
                ? action.payload.profile.fullName
                : 'Ryan'
            let userId = action.payload.profile?.userId
                ? action.payload.profile.userId
                : 20140
            return {
                ...state, profileInfo: {...state.profileInfo, avatar, userName, userId}
            }
        case SET_USER_STATUS:
            return {...state, profileInfo: {...state.profileInfo, profileBioText: action.payload.status}}
        default:
            return state
    }

}

/* --- Action Creators --- */

type ProfileReducerACType = addPostACType | setUserProfileACType | setUserStatusACType

type addPostACType = ReturnType<typeof addPost>
export const addPost = (text: string) => {
    return {
        type: ADD_POST,
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

type setUserStatusACType = ReturnType<typeof setUserStatus>
export const setUserStatus = (status: string) => {
    return {
        type: SET_USER_STATUS,
        payload: {
            status
        }
    } as const
}

/* --- Thunks --- */

export const setUserProfileThunkCreator = (userId: number) => {

    //if(!userId) userId = 20140

    return (dispatch: Dispatch<ProfileReducerACType>) => {
        API.getUserProfile(userId).then(data => {
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

export const setUserStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch<ProfileReducerACType>) => {
        API.updStatus(status).then(() => {
            dispatch(setUserStatus(status))
        }).catch(reason => {
            console.log(reason)
        })
    }
}

export const getUserStatusThunkCreator = (userId: number) => {

    //if(!userId) userId = 20140

    return (dispatch: Dispatch<ProfileReducerACType>) => {
        API.getStatus(+userId).then((res) => {
            dispatch(setUserStatus(res.data))
        }).catch(reason => {
            console.log(reason)
        })
    }
}

export default profileReducer;