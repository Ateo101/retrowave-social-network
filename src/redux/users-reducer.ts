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
export type userType = {
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
    pageSize: number,
    totalUsersCount: number,
    currPage: number,
    isFetched: boolean,
    pendingFollow: boolean
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_PAGE_SIZE = "SET-PAGE-SIZE"
const SET_TOTAL_USERS = "SET-TOTAL-USERS"
const SET_CURR_PAGE = "SET-CURR-PAGE"
const SET_FETCHED = "SET-FETCHED"
const SET_PENDING_FOLLOW = "SET-PENDING-FOLLOW"

const initialState: userPageType = {
    users: [],
    pageSize: 25,
    totalUsersCount: 25,
    currPage: 1,
    isFetched: false,
    pendingFollow: false,
}

const usersReducer = (state = initialState, action: ProfileReducerACType): userPageType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users].map(u => u.id === action.payload.userID ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users].map(u => u.id === action.payload.userID ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: action.payload.users}
        case SET_PAGE_SIZE:
            return {...state, pageSize: action.payload.pageSize}
        case SET_TOTAL_USERS:
            return {...state, totalUsersCount: action.payload.totalUsers}
        case SET_CURR_PAGE:
            return {...state, currPage: action.payload.currPage}
        case SET_FETCHED:
            return {...state, isFetched: action.payload.fetched}
        case SET_PENDING_FOLLOW:
            return {...state, pendingFollow: action.payload.pendingFollow}
        default:
            return state
    }

}

type ProfileReducerACType =
    followACType
    | unfollowACType
    | setUsersACType
    | setPageSizeACType
    | setTotalUsersACType
    | setCurrPageACType
    | setFetchedACType
    | setPendingFollowACType

type followACType = ReturnType<typeof follow>
export const follow = (userID: number) => {
    return {
        type: FOLLOW,
        payload: {
            userID
        }
    } as const
}

type unfollowACType = ReturnType<typeof unfollow>
export const unfollow = (userID: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userID
        }
    } as const
}

type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: userType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}

type setPageSizeACType = ReturnType<typeof setPageSize>
export const setPageSize = (pageSize: number) => {
    return {
        type: SET_PAGE_SIZE,
        payload: {
            pageSize
        }
    } as const
}

type setTotalUsersACType = ReturnType<typeof setTotalUsers>
export const setTotalUsers = (totalUsers: number) => {
    return {
        type: SET_TOTAL_USERS,
        payload: {
            totalUsers
        }
    } as const
}

type setCurrPageACType = ReturnType<typeof setCurrPage>
export const setCurrPage = (currPage: number) => {
    return {
        type: SET_CURR_PAGE,
        payload: {
            currPage
        }
    } as const
}

type setFetchedACType = ReturnType<typeof setFetched>
export const setFetched = (fetched: boolean) => {
    return {
        type: SET_FETCHED,
        payload: {
            fetched
        }
    } as const
}

type setPendingFollowACType = ReturnType<typeof setPendingFollow>
export const setPendingFollow = (pendingFollow: boolean) => {
    return {
        type: SET_PENDING_FOLLOW,
        payload: {
            pendingFollow
        }
    } as const
}

export default usersReducer;