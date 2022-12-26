import {ActionsType, profilePageType} from "./store";

const initialState:profilePageType = {
    profileInfo: {avatar: 'https://i.ibb.co/Gc3qXtB/ava-synthwave.png',profileBioText: `Hey! I'm Ryan and this is my bio`},
    posts: [
        {id: '0', userName: 'Ryan', message: `It's one thing you should know about me`, likesCount: 10},
        {id: '0', userName: 'Ryan', message: `I don't have wheels on my car`, likesCount: 25},
        {id: '0', userName: 'Ryan', message: `I drive.`, likesCount: 8},
    ],
    newPostText: '',
}

const profileReducer = (state=initialState, action: ActionsType) => {

    switch (action.type) {
        case "ADD-POST":
            state.posts.push({ id: '0', userName: 'Ryan', message: action.text, likesCount: 0 })
            return state
        case "UPD-POST-TEXT":
            state.newPostText = action.text
            return state
        default:
            return state
    }

}

export default profileReducer;