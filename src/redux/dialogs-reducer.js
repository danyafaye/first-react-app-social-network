const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [{id: 1, message: 'Hi'},
        {id: 2, message: 'How do you do?'},
        {id: 3, message: 'Yo.'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'}
    ],
    dialogs: [{id: 1, name: 'Danya'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Den'},
        {id: 4, name: 'Vlad'},
        {id: 5, name: 'Georgiy'}
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return{...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;