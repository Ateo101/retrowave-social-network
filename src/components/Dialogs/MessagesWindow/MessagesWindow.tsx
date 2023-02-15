import s from "../Dialogs.module.css";
import React from "react";
import Message from "./Message";
import {messageType} from "../../../redux/dialogs-reducer";
import {Field, reduxForm, InjectedFormProps} from "redux-form";

type MessagesWindowPropsType = {
    messagesData: messageType[]
    updMessageText: (text: string) => void
    sendMessage: (text: string) => void
    dialogMessage: string
}

const MessagesWindow = (props: MessagesWindowPropsType) => {

    const messagesElements = props.messagesData.map(m => <Message text={m.text}/>)

    const onSubmit = (formData: DialogueFormDataType) => {
        console.log(formData)
        formData.dialogueTextarea && props.sendMessage(formData.dialogueTextarea)
    }

    return (
        <>
            <div className={s.messagesWindow}>
                <div className={s.h2Dialogs}>Messages</div>
                {messagesElements}
                <ReduxDialogForm onSubmit={onSubmit}/>
            </div>
        </>
    )
}

const DialogForm = (props: InjectedFormProps<DialogueFormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'}
                       placeholder={'Type your amazing message here...'}
                       name={'dialogueTextarea'}
                />
            </div>
            <button>Send</button>
        </form>
    )

}

type DialogueFormDataType = {
    dialogueTextarea: string
}
const ReduxDialogForm = reduxForm<DialogueFormDataType>({form: 'dialogueForm'})(DialogForm)

export default MessagesWindow;