import React from "react";
import {storeType} from "../../redux/store";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type DialogsContainerPropsType = {
    store: storeType
}

const DialogsContainer = () => {

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
};

export default DialogsContainer;