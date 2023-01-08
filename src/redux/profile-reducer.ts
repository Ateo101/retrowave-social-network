export type profileInfoType = {
    avatar: string,
    profileBioText: string,
}
export type postType = {
    id: string,
    userName: string,
    message: string,
    likesCount: number,
}
export type profilePageType = {
    profileInfo: profileInfoType,
    posts: postType[],
    newPostText: string,
}

const ADD_POST = "ADD-POST"
const UPD_POST_TEXT = "UPD-POST-TEXT"

const initialState: profilePageType = {
    profileInfo: {avatar: 'https://i.ibb.co/Gc3qXtB/ava-synthwave.png',profileBioText: `Hey! I'm Ryan and this is my bio`},
    posts: [
        {id: '0', userName: 'Ryan', message: `It's one thing you should know about me`, likesCount: 10},
        {id: '0', userName: 'Ryan', message: `I don't have wheels on my car`, likesCount: 25},
        {id: '0', userName: 'Ryan', message: `I drive.`, likesCount: 8},
    ],
    newPostText: '',
}

const profileReducer = (state=initialState, action: ProfileReducerACType): profilePageType => {

    switch (action.type) {
        case ADD_POST:
            //state.posts.push({ id: '0', userName: 'Ryan', message: action.text, likesCount: 0 })
            return {...state, posts: [...state.posts,{ id: '0', userName: 'Ryan', message: action.payload.text, likesCount: 0 }]}
        case UPD_POST_TEXT:
            //state.newPostText = action.text
            return {...state, newPostText: action.payload.text}
        default:
            return state
    }

}

type ProfileReducerACType = addPostACType | updPostTextACType

type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (text: string) => {
    return {
        type: ADD_POST,
        payload: {
            text
        }
    } as const
}

type updPostTextACType = ReturnType<typeof updPostTextAC>
export const updPostTextAC = (text: string) => {
    return {
        type: UPD_POST_TEXT,
        payload: {
            text
        }
    } as const
}

export default profileReducer;