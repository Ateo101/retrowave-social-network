import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/profile-reducer";

export type ProfilePropsType = {
    profilePage: profilePageType
    addPost: (text: string) => void
    updPostText: (text: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo avatar={props.profilePage.profileInfo.avatar}
                         profileBioText={props.profilePage.profileInfo.profileBioText}/>
            <MyPosts postsData={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updPostText={props.updPostText}
            />
        </div>
    )
};

export default Profile;


