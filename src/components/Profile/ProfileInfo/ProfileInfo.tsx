import s from "../Profile.module.css";
import React, {ChangeEvent, useState} from "react";
import {profileInfoType} from "../../../redux/profile-reducer";

const ProfileInfo: React.FC<profileInfoType & { setUserStatus: (status: string) => void }> = ({
                                                                                                  avatar,
                                                                                                  profileBioText,
                                                                                                  setUserStatus
                                                                                              }) => {

    const [bioText, setBioText] = useState(profileBioText)
    const [editMode, setEditMode] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setBioText(e.currentTarget.value)
    }

    const onBlurHandler = () => {
        setEditMode(false)
        bioText && setUserStatus(bioText.trim())
    }

    return (
        <div>
            <div className={s.profileBio}>
                <img className={s.avatarBio} src={avatar}/>
                {editMode
                    ? <input autoFocus={true} onBlur={onBlurHandler} onChange={onChangeHandler}/>
                    : <span onDoubleClick={() => setEditMode(true)} className={s.profileBioText}>{
                        profileBioText ? profileBioText : 'No status'
                    }</span>
                }
            </div>
        </div>
    )
}

export default ProfileInfo;