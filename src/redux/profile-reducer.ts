import {ActionsType, profilePageType} from "./store";

const profileReducer = (state: profilePageType, action: ActionsType) => {

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