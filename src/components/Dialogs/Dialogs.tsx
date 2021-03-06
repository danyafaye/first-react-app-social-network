import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { InitialStateType } from '../../redux/dialogs-reducer'
import AddMessageForm from '../../components/AddMessageForm/AddMessageForm';

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}

export type NewMessageFormValuesType = {
    newMessageBody: string
}


const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);

    let addNewMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div>
            <h1 className={s.dialogsDev}>IN DEVELOPMENT STAGE</h1>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>{dialogsElements}</div>
                <div className={s.messages}>

                    <div>{messagesElements}</div>
                </div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

export default Dialogs;