import React from 'react';
import s from './Profile.module.scss'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export function Profile() {
    return (
        <div className={s.profile}>
          <div>
              <img src={require('./../../../img/images.jpg')} alt=""/>
          </div>

            <MyPostsContainer/>
        </div>
    )
}