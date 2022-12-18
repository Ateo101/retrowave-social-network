import s from "../Dialogs.module.css";
import React, {ChangeEvent, RefObject} from "react";
import Message from "./Message";
import {ActionsType, messagesType} from "../../../redux/store";

type MessagesWindowPropsType = {
    messagesData: messagesType[]
    dispatch: (action: ActionsType) => void
    dialogMessage: string
}

const MessagesWindow: React.FC<MessagesWindowPropsType> = ({messagesData,dispatch,dialogMessage}) => {

    const messagesElements = messagesData.map( m => <Message text={m.text}/> )

    const NewMessageTextarea:RefObject<HTMLTextAreaElement> = React.createRef()
    const sendMessage = () => {
       let text = NewMessageTextarea.current?.value
        text && dispatch({type: "SEND-MESSAGE", text})
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget?.value
        text && dispatch({type: "UPD-MESSAGE-TEXT", text});
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
                    <button title={'Send message'} onClick={sendMessage}>Send</button>
                    <button title={'Clear text'}>Clear</button>
                </div>
            </div>

        </>
    )
}

export default MessagesWindow;