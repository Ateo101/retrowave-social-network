import React from "react";
import s from './Dialogs.module.css';
import DialogsList from "./DialogsList/DialogsList";
import MessagesWindow from "./MessagesWindow/MessagesWindow";
import {ActionsType, dialogsPageType} from "../../redux/store";

type DialogsPropsType = {
    state: dialogsPageType
    dispatch: (action: ActionsType) => void
}

const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            {/*тут будет поиск*/}
            <div className={s.dialogsContent}>
                <DialogsList dialogsData={props.state.dialogs}/>
                <MessagesWindow messagesData={props.state.messages}
                                dispatch={props.dispatch}
                                dialogMessage={props.state.dialogMessage}/>
            </div>
        </div>
    )
};

export default Dialogs;