import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {dialogsPageType, sendMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    dialogsPage: dialogsPageType
}
const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsReducer,
    }
}

type mapDispatchToPropsType = {
    sendMessage: (text: string) => void,
    updMessageText: (text: string) => void,
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        sendMessage: (text: string) => {
            dispatch(sendMessageAC(text))
        },
        updMessageText: (text: string) => {
            dispatch(updateMessageAC(text))
        },
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;

/*
type DialogsContainerPropsType = {
    store: storeType
}
/!*const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
                const state = store.getState().dialogsPage
                const sendMessage = (text: string) => {
                    store.dispatch({type: "SEND-MESSAGE", text})
                    store.dispatch({type: "UPD-MESSAGE-TEXT", text: ''})
                }
                const updMessageText = (text: string) => {
                    store.dispatch({type: "UPD-MESSAGE-TEXT", text})
                }

                return <Dialogs state={state}
                                updMessageText={updMessageText}
                                sendMessage={sendMessage}/>
            }
        }
    </StoreContext.Consumer>
};*!/*/
