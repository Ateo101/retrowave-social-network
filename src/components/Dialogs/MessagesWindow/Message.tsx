import s from "../Dialogs.module.css";
import React from "react";
import {messagesType} from "../../../redux/store";

const Message = (props: messagesType) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

export default Message;