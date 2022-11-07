import React from 'react';
import {addPostAC, changeNewPostTextAC, PostType,} from "../../../../redux/profilePageReducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppRootState} from "../../../../redux/reduxStore";
import MyPosts from "./MyPosts";


type mapStateToPropsType = {
    posts: Array<PostType>,
    textPost: string
}


type mapDispatchToPropsType = {
    addPost: () => void
    changeNewPostTextHandler: (text: string) => void
}

const mapStateToProps = (state: AppRootState): mapStateToPropsType => {
    return {
        posts: state.ProfilePage.Posts,
        textPost: state.ProfilePage.textPost
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        changeNewPostTextHandler: (text: string) => {
            dispatch(changeNewPostTextAC(text))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
