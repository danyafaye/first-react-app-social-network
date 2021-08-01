import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: 'Hi, how are you?', likesCount: 0},
                {id: 2, message: "It's my first post", likesCount: 23},
            ],
            newPostText: "it-kamasutra.com"
        },
        dialogsPage: {
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
            ],
            newMessageBody: ""
        },
        sidebar: {
            friends: [{name: "Vlad"},
                {name: "Georgiy"},
                {name: "Den"}]
        }
    },
    _callSubscriber() {
        console.log('жопа');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;