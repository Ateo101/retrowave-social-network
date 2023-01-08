import s from "../Dialogs.module.css";
import React from "react";
import {messageType} from "../../../redux/dialogs-reducer";

const Message = (props: messageType) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

export default Message;