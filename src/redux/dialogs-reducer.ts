import {ActionsType, dialogsPageType} from "./store";

const dialogsReducer = (state: dialogsPageType, action: ActionsType) => {

    switch (action.type) {
        case "SEND-MESSAGE":
            state.messages.push({text: action.text})
            return state
        case "UPD-MESSAGE-TEXT":
            state.dialogMessage = action.text
            return state
        default:
            return state
    }

}

export default dialogsReducer;