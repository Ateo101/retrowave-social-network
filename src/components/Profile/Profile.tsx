import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/store";

export type ProfilePropsType = {
    state: profilePageType
    sendPost: (text: string) => void
    updPostText: (text: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo avatar={props.state.profileInfo.avatar}
                         profileBioText={props.state.profileInfo.profileBioText}/>
            <MyPosts postsData={props.state.posts}
                     newPostText={props.state.newPostText}
                     sendPost={props.sendPost}
                     updPostText={props.updPostText}
            />
        </div>
    )
};

export default Profile;


