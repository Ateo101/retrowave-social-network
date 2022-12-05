import rerenderEntireTree from "../render";

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

export type stateType = {
    profilePage: {
        profileInfo: profileInfoType,
        posts: postType[],
    },
    dialogsPage: {
        dialogs: dialogsType[],
        messages: messagesType[],
    },
}

export const state:stateType = {
    profilePage: {
        profileInfo: {avatar: 'https://i.ibb.co/Gc3qXtB/ava-synthwave.png',profileBioText: `Hey! I'm Ryan and this is my bio`},
        posts: [
    {id: '0', userName: 'Ryan', message: `It's one thing you should know about me`, likesCount: 10},
    {id: '0', userName: 'Ryan', message: `I don't have wheels on my car`, likesCount: 25},
    {id: '0', userName: 'Ryan', message: `I drive.`, likesCount: 8},
],
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
}

export const addPost = (message: string) => {
    state.profilePage.posts.push( { id: '0', userName: 'Ryan', message, likesCount: 0 } )
    rerenderEntireTree(state)
}