export type dialogType = {
    id: string,
    name: string,
    lastMsg: string,
    isSeen: boolean,
}
export type messageType = {
    text: string,
}
export type dialogsPageType = {
    dialogs: dialogType[],
    messages: messageType[],
    dialogMessage: string,
}

const SEND_MESSAGE = "SEND-MESSAGE"

const initialState: dialogsPageType = {
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

const dialogsReducer = (state=initialState, action: DialogsReducerACType):dialogsPageType => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {...state, messages: [...state.messages,{text: action.payload.text}]}
        default:
            return state
    }

}

export type DialogsReducerACType = sendMessageACType
type sendMessageACType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (text: string) => {
    return {
        type: SEND_MESSAGE,
        payload: {
            text
        }
    } as const
}

export default dialogsReducer;