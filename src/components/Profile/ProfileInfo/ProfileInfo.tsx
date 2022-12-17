import s from "../Profile.module.css";
import React from "react";
import {profileInfoType} from "../../../redux/store";

const ProfileInfo: React.FC<profileInfoType> = ({avatar,profileBioText}) => {
    return (
        <div>
            <div className={s.profileBio}>
                <img className={s.avatarBio} src={avatar}/>
                <p className={s.profileBioText}>{profileBioText}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;