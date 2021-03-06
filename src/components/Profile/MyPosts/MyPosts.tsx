import React from "react";
import s from './MyPosts.module.css';
import Post from './../../../components/Profile/MyPosts/Post/Post';
import AddPostForm, { AddPostFormValuesType } from '../../../components/Profile/MyPosts/AddPostForm/AddPostForm';
import { PostType } from '../../../Types/types';

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h1 className={s.postsDev}>IN DEVELOPMENT STAGE</h1>
            <h3>My posts</h3>
            <AddPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>

                {postsElements}

            </div>
        </div>
    )}

const MyPostsMemorized = React.memo(MyPosts)

export default MyPostsMemorized;