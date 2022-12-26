import s from "../Dialogs.module.css";
import React, {ChangeEvent, RefObject} from "react";
import Message from "./Message";
import {messagesType} from "../../../redux/store";

type MessagesWindowPropsType = {
    messagesData: messagesType[]
    updMessageText: (text: string) => void
    sendMessage: (text: string) => void
    dialogMessage: string
}

const MessagesWindow: React.FC<MessagesWindowPropsType> = ({messagesData,updMessageText,sendMessage,dialogMessage}) => {

    const messagesElements = messagesData.map( m => <Message text={m.text}/> )

    const NewMessageTextarea:RefObject<HTMLTextAreaElement> = React.createRef()
    const sendMessageHandler = () => {
       let text = NewMessageTextarea.current?.value
        text && sendMessage(text)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget?.value
        text && updMessageText(text);
    }

    return (
        <>
            <div className={s.messagesWindow}>
                <div className={s.h2Dialogs}>Messages</div>
                {messagesElements}
                <textarea placeholder={'Type your amazing message here...'}
                          value={dialogMessage}
                          onChange={onChangeHandler}
                          ref={NewMessageTextarea}
                />
                <div>
                    <button title={'Send message'} onClick={sendMessageHandler}>Send</button>
                    <button title={'Clear text'}>Clear</button>
                </div>
            </div>

        </>
    )
}

export default MessagesWindow;