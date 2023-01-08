import s from "../Dialogs.module.css";
import React from "react";
import {dialogType} from "../../../redux/dialogs-reducer";

const DialogsItem = (props: dialogType) => {
    return (
        <>
            <div className={s.dialogsItem}>{props.name}</div>
            <div className={props.isSeen ? s.dialogsItemLastMsg + ' ' + s.seen : s.dialogsItemLastMsg + ' ' + s.new}>{props.lastMsg}</div>
        </>
    )
}

export default DialogsItem;