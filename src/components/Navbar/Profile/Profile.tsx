import React from 'react';
import s from './Profile.module.scss'
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div className={s.profile}>
          <div>
              <img src={require('./../../img/images.jpg')} alt=""/>
          </div>
          <MyPosts/>
        </div>
    )
}