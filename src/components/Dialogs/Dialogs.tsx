import React from "react";
import s from './Dialogs.module.css';
import DialogsList from "./DialogsList/DialogsList";
import MessagesWindow from "./MessagesWindow/MessagesWindow";
import {dialogsPageType} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    dialogsPage: dialogsPageType
    updMessageText: (text: string) => void
    sendMessage: (text: string) => void
}

const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            {/*тут будет поиск сообщений*/}
            <div className={s.dialogsContent}>
                <DialogsList dialogsData={props.dialogsPage.dialogs}/>
                <MessagesWindow messagesData={props.dialogsPage.messages}
                                updMessageText={props.updMessageText}
                                sendMessage={props.sendMessage}
                                dialogMessage={props.dialogsPage.dialogMessage}/>
            </div>
        </div>
    )
};

export default Dialogs;