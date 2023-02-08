import React from "react";
import s from './Dialogs.module.css';
import DialogsList from "./DialogsList/DialogsList";
import MessagesWindow from "./MessagesWindow/MessagesWindow";
import {dialogsPageType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";

type DialogsPropsType = {
    dialogsPage: dialogsPageType
    updMessageText: (text: string) => void
    sendMessage: (text: string) => void
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {

    return !props.isAuth ? <Redirect to={'/login'}/> : (
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