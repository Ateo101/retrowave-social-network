import React from "react";
import s from './Dialogs.module.css';
import DialogsList from "./DialogsList/DialogsList";
import MessagesWindow from "./MessagesWindow/MessagesWindow";
import {stateType} from "../../redux/state";

type DialogsPropsType = {
    state: stateType['dialogsPage']
}

const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            {/*тут будет поиск*/}
            <div className={s.dialogsContent}>
                <DialogsList dialogsData={props.state.dialogs} />
                <MessagesWindow messagesData={props.state.messages} />
            </div>
        </div>
    )
};

export default Dialogs;