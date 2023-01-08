/*export type userTypeOLD = {
    id: string,
    avatarURL: string
    userName: string,
    status: string,
    location: {
        city: string,
        country: string
    },
    followed: boolean
}*/
export type userType= {
    name: string,
    id: number,
    uniqueUrlName: string,
    photos: {
        small: string,
        large: string
    },
    status: string,
    followed: boolean
}
export type userPageType = {
    users: userType[],
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

const initialState: userPageType = {
    users: [],
}

const usersReducer = (state=initialState, action: ProfileReducerACType): userPageType => {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: [...state.users].map( u => u.id === action.payload.userID ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: [...state.users].map( u => u.id === action.payload.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.payload.users]}
        default:
            return state
    }

}

type ProfileReducerACType = followACType | unfollowACType | setUsersACType

type followACType = ReturnType<typeof followAC>
export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        payload: {
            userID
        }
    } as const
}

type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userID
        }
    } as const
}

type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: userType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}

export default usersReducer;