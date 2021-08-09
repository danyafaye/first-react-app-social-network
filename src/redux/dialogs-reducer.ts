const SEND_MESSAGE = 'SEND_MESSAGE';

export type InitialStateType = typeof initialState;
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

const dialogsReducer = (state = initialState, action:any):InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return{...state,
                messages: [...state.messages, {id: 6, message: body}],
            }
        default:
            return state
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

//action creator
export const sendMessageCreator = (newMessageBody: string):SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer