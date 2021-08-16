import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField, Input } from '../../components/common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import React from 'react';
import { NewMessageFormValuesType } from '../../components/Dialogs/Dialogs';
const maxLength50 = maxLengthCreator(50);

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

const AddMessageForm:React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            {createField<NewMessageFormValuesKeysType>("Enter your message",
                'newMessageBody',
                [required, maxLength50],
                Input)}
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

export default reduxForm<NewMessageFormValuesType & PropsType>({form: "dialogAddMessageForm"})
(AddMessageForm)