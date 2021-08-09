export type InitialStateType = typeof initialState;
type FriendsType = {
    name: string
}

let initialState = {
    friends: [{name: "Vlad"},
        {name: "Georgiy"},
        {name: "Den"}] as Array <FriendsType>
}

const sidebarReducer = (state = initialState, action:any):InitialStateType => {

    return state;
}

export default sidebarReducer;