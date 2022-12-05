import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {stateType} from "../../redux/state";

export type ProfilePropsType = {
    state: stateType['profilePage']
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo avatar={props.state.profileInfo.avatar}
                         profileBioText={props.state.profileInfo.profileBioText}/>
            <MyPosts postsData={props.state.posts}/>
        </div>
    )
};

export default Profile;


