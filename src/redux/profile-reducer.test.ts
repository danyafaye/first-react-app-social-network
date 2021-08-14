import profileReducer, {actions} from "./profile-reducer";
import { ProfileType } from '../Types/types';

let state = {
    posts: [{id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: "It's my first post", likesCount: 23},
    ],
    profile: null as ProfileType | null,
    status: "",
    newPostText: ""
}

test('length of posts should be incremented', () => {
    //1.test data
    let action = actions.addPostCreator("blablabla");
    //2.action
    let newState = profileReducer(state,action);
    //3.expectation
    expect(newState.posts.length).toBe(3);
});
test('message of new post should be correct', () => {
    //1.test data
    let action = actions.addPostCreator("blablabla");
    //2.action
    let newState = profileReducer(state,action);
    //3.expectation
    expect(newState.posts[2].message).toBe("blablabla");
});
test('after deleting length of messages should be decremented', () => {
    //1.test data
    let action = actions.deletePost(1);
    //2.action
    let newState = profileReducer(state,action);
    //3.expectation
    expect(newState.posts.length).toBe(1);
});
test(`after deleting length should'nt be decremented if id is incorrect`, () => {
    //1.test data
    let action = actions.deletePost(1000);
    //2.action
    let newState = profileReducer(state,action);
    //3.expectation
    expect(newState.posts.length).toBe(2);
});