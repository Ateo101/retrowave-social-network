export type dialogsType = {
    id: string,
    name: string,
    lastMsg: string,
    isSeen: boolean,
}
export type profileInfoType = {
    avatar: string,
    profileBioText: string,
}
export type messagesType = {
    text: string,
}
export type postType = {
    id: string,
    userName: string,
    message: string,
    likesCount: number,
}
type profilePageType = {
    profileInfo: profileInfoType,
    posts: postType[],
    newPostText: string,
}
type dialogsPageType = {
    dialogs: dialogsType[],
    messages: messagesType[],
}
export type stateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType,
}
export type storeType = {
    _state: stateType
    _callSubscriber: (state: stateType) => void
    subscribe: (observer: (props: stateType) => void) => void
    getState: () => stateType
    dispatch: (action: any) => void
}

type AddPostActionType = {
    type: 'ADD-POST',
    text: string
}
type UpdatePostActionType = {
    type: 'UPD-POST-TEXT',
    text: string
}
type ActionsType = AddPostActionType | UpdatePostActionType

const store:storeType = {

    _state: {
        profilePage: {
            profileInfo: {avatar: 'https://i.ibb.co/Gc3qXtB/ava-synthwave.png',profileBioText: `Hey! I'm Ryan and this is my bio`},
            posts: [
                {id: '0', userName: 'Ryan', message: `It's one thing you should know about me`, likesCount: 10},
                {id: '0', userName: 'Ryan', message: `I don't have wheels on my car`, likesCount: 25},
                {id: '0', userName: 'Ryan', message: `I drive.`, likesCount: 8},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionsType) {
        if(action.type === 'ADD-POST') {
            this._state.profilePage.posts.push({ id: '0', userName: 'Ryan', message: action.text, likesCount: 0 })
            this._callSubscriber(this._state)
        } else if(action.type === 'UPD-POST-TEXT') {
            this._state.profilePage.newPostText = action.text
            this._callSubscriber(this._state)
        }
    }

}

export default store;

/*
export const addPost = (message: string) => {
    state.profilePage.posts.push(  )
    rerenderEntireTree(state)
}*/
/*    addPost() {
        this._state.profilePage.posts.push({ id: '0', userName: 'Ryan', message: 'ssss', likesCount: 0 })
    },*/
/*subscribe(observer) {rerenderEntireTree = observer},*/
/*export const subscribe = (observer: (state: stateType) => void) => rerenderEntireTree = observer*/
/*let rerenderEntireTree = (state: stateType) => console.log('Page rendered')*/