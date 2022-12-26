import React from "react";
import s from './Dialogs.module.css';
import DialogsList from "./DialogsList/DialogsList";
import MessagesWindow from "./MessagesWindow/MessagesWindow";
import {dialogsPageType} from "../../redux/store";

type DialogsPropsType = {
    state: dialogsPageType
    updMessageText: (text: string) => void
    sendMessage: (text: string) => void
}

const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            {/*тут будет поиск сообщений*/}
            <div className={s.dialogsContent}>
                <DialogsList dialogsData={props.state.dialogs}/>
                <MessagesWindow messagesData={props.state.messages}
                                updMessageText={props.updMessageText}
                                sendMessage={props.sendMessage}
                                dialogMessage={props.state.dialogMessage}/>
            </div>
        </div>
    )
};

export default Dialogs;