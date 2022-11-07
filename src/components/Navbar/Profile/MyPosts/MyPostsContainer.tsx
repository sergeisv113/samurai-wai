import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.scss'
import {Post} from "./Post/Post";
import {AllActionType, PostType} from "../../../../Types/types";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profilePageReducer";

type PropsType = {
    profilePage: Array<PostType>
    newPostText: string
    // addPost: (newPostText: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: AllActionType) => void
}


export const MyPosts = (props: PropsType) => {
let addNewPost = () => {
          // props.addPost(props.newPostText)
          // props.dispatch({type: "ADD-POST", newPostText: props.newPostText, likesCount: 0})
    props.dispatch(addPostActionCreator(props.newPostText))
}
let onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {

    // props.updateNewPostText(event.currentTarget.value)
    // props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: event.currentTarget.value})
    props.dispatch(updateNewPostTextActionCreator(event.currentTarget.value))
}
    return (
        <div className={s.contain}>
            <div>
                <div className={s.myPost}>
                    <h3>My post</h3>
                </div>
                <div className={s.writePost}>
                    <textarea
                              value={props.newPostText}
                              onChange={onChange}
                    ></textarea>
                </div>
                <div className={s.buttonAddPost}>
                    <button onClick={addNewPost}>add post</button>
                </div>
            </div>

            <div className={s.PostsMessages}>
                <div className={s.message}>
                    <Post profilePage={props.profilePage}/>
                </div>
            </div>
        </div>
    );
}