import { InferActionsTypes } from '../redux/redux-store';

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    messages: [{id: 1, message: 'Hi'},
        {id: 2, message: 'How do you do?'},
        {id: 3, message: 'Yo.'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'}
    ] as Array<MessageType>,
    dialogs: [{id: 1, name: 'Danya'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Den'},
        {id: 4, name: 'Vlad'},
        {id: 5, name: 'Georgiy'}
    ] as Array<DialogType>
}

const dialogsReducer = (state = initialState, action:ActionsType):InitialStateType => {

    switch (action.type) {
        case 'SN/DIALOGS/SEND_MESSAGE':
            let body = action.newMessageBody
            return{...state,
                messages: [...state.messages, {id: 6, message: body}],
            }
        default:
            return state
    }
}

//action creator
export const actions = {
    sendMessageCreator: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody} as const)
}

export default dialogsReducer

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
