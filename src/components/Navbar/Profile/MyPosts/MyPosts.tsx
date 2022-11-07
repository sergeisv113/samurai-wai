import React from 'react';
import s from './MyPosts.module.scss'
import {NewPost} from "./NewPost/NewPost";
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div className={s.myPosts}>
            <div>
                <h1>My posts</h1>
                <div>
                    <NewPost/>
                </div>
                <div>
                    <Post message={'Hello, have are you?'}
                          id={1}
                          likesCount={5}
                    />
                </div>
            </div>
        </div>
    )
}