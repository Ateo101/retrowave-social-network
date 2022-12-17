import s from "../Dialogs.module.css";
import React from "react";
import Message from "./Message";
import {messagesType} from "../../../redux/store";

type MessagesWindowPropsType = {
    messagesData: messagesType[]
}

const MessagesWindow: React.FC<MessagesWindowPropsType> = ({messagesData}) => {

    const messagesElements = messagesData.map( m => <Message text={m.text}/> )

    return (
        <div className={s.messagesWindow}>
            <div className={s.h2Dialogs}>Messages</div>
            {messagesElements}
            <textarea placeholder={'Type your amazing message here...'}/>
        </div>
    )
}

export default MessagesWindow;