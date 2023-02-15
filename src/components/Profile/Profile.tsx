import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/profile-reducer";

export type ProfilePropsType = {
    profilePage: profilePageType
    addPost: (text: string) => void
    setUserStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {

    let profileInfo = props.profilePage.profileInfo

    return (
        <div className={s.profile}>
            <ProfileInfo userId={profileInfo.userId}
                         userName={profileInfo.userName}
                         avatar={profileInfo.avatar}
                         profileBioText={profileInfo.profileBioText}
                         setUserStatus={props.setUserStatus}
            />
            <MyPosts avatar={profileInfo.avatar}
                     posts={props.profilePage.posts}
                     profilePage={props.profilePage}
                     addPost={props.addPost}
            />
        </div>
    )
};

export default Profile;

/*    let avatar = props.profilePage.profilePageData?.photos.small
        ? props.profilePage.profilePageData.photos.small
        : props.profilePage.profileInfo.avatar
    let profileBioText = props.profilePage.profilePageData?.aboutMe
        ? props.profilePage.profilePageData.aboutMe
        : props.profilePage.profileInfo.profileBioText*/
