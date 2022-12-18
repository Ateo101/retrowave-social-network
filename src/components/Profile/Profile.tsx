import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, profilePageType} from "../../redux/store";

export type ProfilePropsType = {
    state: profilePageType
    dispatch: (action: ActionsType) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo avatar={props.state.profileInfo.avatar}
                         profileBioText={props.state.profileInfo.profileBioText}/>
            <MyPosts postsData={props.state.posts}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
};

export default Profile;


