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

    let avatar = props.profilePage.profilePageData?.photos.small
        ? props.profilePage.profilePageData.photos.small
        : props.profilePage.profileInfo.avatar
    let profileBioText = props.profilePage.profilePageData?.aboutMe
        ? props.profilePage.profilePageData.aboutMe
        : props.profilePage.profileInfo.profileBioText

    return (
        <div className={s.profile}>
            <ProfileInfo avatar={avatar}
                         profileBioText={profileBioText}
            />
            <MyPosts avatar={avatar}
                     posts={props.profilePage.posts}
                     profilePageData={props.profilePage.profilePageData}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updPostText={props.updPostText}
            />
        </div>
    )
};

export default Profile;


