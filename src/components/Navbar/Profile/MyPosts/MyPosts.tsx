import React, {ChangeEvent, createRef} from 'react';
import s from './MyPosts.module.scss'
import Post from "./Post/Post";

type ProfilePageType = {
    posts: Array<PostType>
    textPost: string
    addPost: () => void
    changeNewPostTextHandler: (text: string) => void
}

type PostType = {
    id: number
    message: string
    likesCount: number
}


const MyPosts = (props: ProfilePageType) => {

    const newPostElement = createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        if (newPostElement.current) {
            props.addPost()
        }
    }

    const changeNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.changeNewPostTextHandler(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={changeNewPostTextHandler} value={props.textPost} ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.posts.map(postItem => {
                    return <Post key={postItem.id} message={postItem.message} likesCount={postItem.likesCount}/>
                })}
            </div>
        </div>
    );
};

export default MyPosts;