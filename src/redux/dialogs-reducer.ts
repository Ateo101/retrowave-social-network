import {ActionsType, dialogsPageType} from "./store";

const initialState:dialogsPageType = {
    dialogs: [
        {id: '0', name: 'Irene', lastMsg: 'Both of the following properties are required for text-overflow', isSeen: false},
        {id: '1', name: 'Benicio', lastMsg: 'The ellipsis, also known as ellipsis points', isSeen: false},
        {id: '2', name: 'Shannon', lastMsg: `That's why we put together this list of 66 sample text messages to customers`, isSeen: true},
        {id: '3', name: 'Bernie Rose', lastMsg: 'simple short message!', isSeen: false},
    ],
    messages: [
        {text: 'message 1'},
        {text: 'message 2'},
        {text: 'message 3'},
    ],
    dialogMessage: '',
}

const dialogsReducer = (state=initialState, action: ActionsType) => {

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