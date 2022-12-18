import s from "../Dialogs.module.css";
import React from "react";
import DialogsItem from "./DialogsItem";
import {dialogsType} from "../../../redux/store";

type DialogsListPropsType = {
    dialogsData: dialogsType[]
}

const DialogsList: React.FC<DialogsListPropsType> = ({dialogsData}) => {

    const dialogsElements = dialogsData.map( d => <DialogsItem id={d.id} name={d.name} lastMsg={d.lastMsg} isSeen={d.isSeen} /> )

    return (
        <div className={s.dialogsList}>
            <h2 className={s.h2Dialogs}>Dialogs list</h2>
            {dialogsElements}
        </div>
    )
}

export default DialogsList;